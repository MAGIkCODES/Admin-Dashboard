<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import { useToast } from 'vue-toastification';

const emit = defineEmits(['productDeleted', 'productEdited']);

const toast = useToast();

const props = defineProps({
  products: {
    type: Array,
    required: true
  },
});

const showModal = ref(false);
const editedProductId = ref(null);
const editedProductName = ref('');
const editedProductPrice = ref('');

// Watch for changes in props.products instead of localStorage
watch(() => {
  const storeEditedProducts = JSON.parse(localStorage.getItem('products') || '[]');
  props.products.forEach((product, index) => {
    const storeEditedProduct = storeEditedProducts[index];
    if (storeEditedProduct) {
      Object.assign(product, storeEditedProduct)
    }
  });
});

const deleteProduct = (id) => {
  emit('productDeleted', id); 
}


// Edit product
const editProduct = (product) => {
  editedProductId.value = product.id;
  editedProductName.value = product.text;
  editedProductPrice.value = product.amount;
  showModal.value = true;
};

// save edited product
const saveChangesOfEditedProduct = () => {
  if (editedProductId.value !== null) {
    // update local storage
    const updateEditedProducts = props.products.map((product) => {
      if (product.id === editedProductId.value) {
        return {
          id: editedProductId.value,
          text: editedProductName.value,
          amount: editedProductPrice.value,
        };
      } else {
        return product;
      }
    });

    localStorage.setItem('products', JSON.stringify(updateEditedProducts));

    // Emit the edited product
    emit('productEdited', {
      id: editedProductId.value,
      text: editedProductName.value,
      amount: editedProductPrice.value,
    });

    
    toast.success('Product edited successfully')
     
    // call back function
    const storeEditedProducts = JSON.parse(localStorage.getItem('products') || '[]');
    props.products.forEach((product, index) => {
    const storeEditedProduct = storeEditedProducts[index];
    if (storeEditedProduct) {
      Object.assign(product, storeEditedProduct)
    }
  });


    // hide the modal and clear the edited values
    showModal.value = false;
    editedProductId.value = null;
    editedProductName.value = '';
    editedProductPrice.value = '';
  }

};

</script>

<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
        <span @click="showModal = false" class="close">&times;</span>
        <h1>Edit Product</h1>
        <label>Product Name:</label>
        <input v-model="editedProductName" type="text" placeholder="Edit name"/>
        <label>Product Price:</label>
        <input v-model="editedProductPrice" type="text" placeholder="Edit amount"/>
        <button @click="saveChangesOfEditedProduct">Save Changes</button>
    </div>
  </div> 
 <table>
    <thead>
      <tr>
        <th colspan="3">
          <h1 class="all-products">All Products</h1>
        </th>
      </tr>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Manage</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.text }}</td>
        <td>₦{{ product.amount }}</td>
        <td>
          <button @click="editProduct(product)" class="edit-btn">Edit</button>
          <button @click="deleteProduct(product.id)" class="delete-btn">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.close {
 font-size: 20px;
 font-weight: 600;
}

.close:hover {
  color: red;
}

.all-products {
      color: black;
      background-color: white;
      font-size: 25px;
    }

    table {
      width: 80%;
      margin-left: 10%;
      margin-top: 20px;
      border-collapse: collapse;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    thead, th {
      background-color: #333;
      border-bottom: 1px solid #ddd;
      color: #fff;
      padding: 12px;
      font-weight: 600;
      font-size: 20px;
    }

    td {
      padding: 12px;
      text-align: center;
      border-bottom: 1px solid #ddd;
      color: black;
      text-transform: capitalize;
    }

    tbody tr:hover {
      background-color: #f5f5f5;
    }

    .edit-btn, .delete-btn {
      padding: 8px 12px;
      margin: 4px;
      border: none;
      cursor: pointer;
      font-size: 14px;
    }

    .edit-btn {
      background-color: #4caf50;
      color: #fff;
    }

    .delete-btn {
      background-color: #f44336;
      color: #fff;
    }

  .modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0; 
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 25px;
    background-color: #333;
    color: white;
    border-radius: 3px;
    width: 200px;
}
.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: aliceblue;
  padding: 20px;
  width: 50%;
  height: 65%;
  max-width: 80%;
  border-radius: 5px;
}

.close {
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}


.modal button {
  padding: 10px 20px;
  margin-bottom: 30%;
  font-size: 20px;
  width: 100%;
  background-color: #3498db;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 2px ;
}

.modal button:hover {
  background-color:  #2980b9;
  }

input:focus {
  background-color: rgb(211, 201, 201);
  color: black;
  
}
</style>