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
  max-width: 80%;
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
  background: -webkit-linear-gradient(right,#003366,#004080,#0059b3
    , #0073e6);
  color: #032b53;
  padding: 13px;
  border-radius: 20px;
  border: none;
  font-size: 19px;
  letter-spacing: 1px;
  font-weight: 600;
  width: 100%;
  margin-top: 20px;
  transition: all 0.4s ease;
  cursor: pointer;
  color: #fff;
  
}

.btn:hover {
  color: #696c6e;
}

.btn:focus,
.delete-btn:focus {
  outline: 0;
}
</style>