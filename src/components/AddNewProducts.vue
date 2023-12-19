<script setup>
import { useToast } from 'vue-toastification';
import { ref } from 'vue';

const text = ref('');
const amount = ref('');

const emit = defineEmits(['productSubmitted'])

const toast = useToast();

const onSubmit = () => {
  if(!text.value || !amount.value){
    toast.error('Both field must be filled to add a product')
    return;
  }
 const productData = {
  text: text.value,
  amount: parseFloat(amount.value)
 };

 emit('productSubmitted', productData);

  text.value = '';
  amount.value = '';
};
</script>

<template>
    <div class="form-container">
        <h1>Add new product</h1>
        <form id="form" @submit.prevent="onSubmit">
                <div class="form-control">
                    <label for="text">Product Name</label>
                    <input type="text" id="text" v-model="text" placeholder="Enter product name" />
                </div>
                <div class="form-control">
                    <label for="amount">Product Amount <br /></label>
                    <input type="text" id="amount" v-model="amount" placeholder="Enter amount..." />
                </div>
                <button class="btn">Add Product</button>
        </form>
    </div>
</template>

<style scope> 

h1 {
    color: #021324;
    font-size: 20px ;
    font-weight: 600;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid gray;
}


.form-container {
  width: 80%;
  padding: 20px;
  margin: 30px auto;
  background-color: aliceblue;
}



label {
  display: inline-block;
  margin: 10px 0;
  color:  #021324;
  /* font-weight: 600; */
  font-size: 20px;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  letter-spacing: 1px;
}

.btn {
  cursor: pointer;
  background-color: #3498db;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
}

.btn:hover {
  background-color:  #2980b9;
}

.btn:focus,
.delete-btn:focus {
  outline: 0;
}

</style>