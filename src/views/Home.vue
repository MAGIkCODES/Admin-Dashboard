<script setup>
import NavBar from '@/components/NavBar.vue';
import NewProductList from '@/components/NewProductList.vue';
import AddNewProducts from '@/components/AddNewProducts.vue';
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

const products = ref([]);

onMounted(() => {
  const savedProducts = JSON.parse(localStorage.getItem('products'));

  if (savedProducts) {
    products.value = savedProducts;
  }
});

// add product
const handleProductSubmitted = (productData) => {
  products.value.push({
    id: generateUniqueId(),
    text: productData.text,
    amount: productData.amount
  });

  saveProductToLocalStorage();
  toast.success('Product added successfully')
};

 // generate unique id
 const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000)
  };

  // Delete product
  const handleProductDeleted = (id) => {
    products.value = products.value.filter((product) => product.id !== id) ;

    saveProductToLocalStorage();
    
    toast.success('Product deleted')
  };

  // save to localStorage
  const saveProductToLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(products.value));
  };
</script>

<template> 
  
   <div class="nav-bar">
      <nav>
        <NavBar />
      </nav>
      <div class="container">
        <NewProductList :products="products" @productDeleted="handleProductDeleted"  />
      </div>
      <AddNewProducts @productSubmitted="handleProductSubmitted" />
   </div>
</template>

<style scoped>
  .nav-bar {
   width: 100vw;
   /* height: 100vh; */
   /* overflow: scroll; */
  }

.container {
  padding-top: 100px;
  margin: 30px auto;
  /* max-width: 85%; */
  border-radius: 5px;
}

.modal {
  display: flex;
  position: fixed;
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 25px;
    /* border: 1px solid gray; */
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
  background-color: #fff;
  padding: 20px;
  width: 50%;
  max-width: 85%;
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