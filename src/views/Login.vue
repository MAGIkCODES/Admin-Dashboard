<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const email = ref('');
const password = ref('');


const router = useRouter();
const toast = useToast();

const handleSignIn = () => {
  const getUser = localStorage.getItem('user');
  const user = JSON.parse(getUser);
  if (!email.value || !password.value) {
    toast.error('Both fields must be filled');
    // console.log('toast'); // Moved this line inside the if block
    return;
  } else if (user && email.value === user.email && password.value === user.password) {
    localStorage.setItem('authenticated', true);
    toast.success('Login successful');
    router.push('/home');
  } else {
    toast.error('Invalid email or password');
  }

  email.value = '';
  password.value = '';
};

</script>

<template>
   <div class="container">
        <h2>Admin Login</h2>
        <form @submit.prevent="handleSignIn">
          <input v-model="email"  type="email" placeholder="Email" required>
          <input v-model="password"  type="password" placeholder="Password" required>
          <button type="submit">Sign in</button>
        </form>
    </div>
</template>

<style scoped>

h2 {
    color: black;
    text-align: center;
  }
  
  .container {
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 50%;
    width: 400px;
    
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: none;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  
</style>


