<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const activeTab = ref('login');
const toast = useToast();
 const router = useRouter();

const loginEmail = ref('')
const loginPassword = ref('')
const signupEmail = ref('');
const signupUsername = ref('');
const signupPassword = ref('');

const switchTab = (tab) => {
  activeTab.value =tab;
}

const handleLogin = () => {
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const user = storedUsers.find(u => u.email === loginEmail.value && u.password === loginPassword.value);

  if (user) {
    toast.success('Login successful!');
    router.push('/home');
  } else {
    toast.error('Invalid email or password. Please try again.');
  }
  // Clear the input fields after login attempt  
  loginEmail.value = '';
  loginPassword.value = '';
}


const handleSignup = () => {
  const newUser = {
    email: signupEmail.value,
    username: signupUsername.value,
    password: signupPassword.value,
  };

  console.log('New User:', newUser);

  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  existingUsers.push(newUser);

  try {
    localStorage.setItem('users', JSON.stringify(existingUsers));
  } catch (error) {
    // Error saving user to local storage
    console.error('Error saving user to local storage:', error);
    toast.error('Error saving user data. Please try again.');
    return;
  }

  signupEmail.value = '';
  signupUsername.value = '';
  signupPassword.value = '';

  toast.success('signup successful you can now login')

}

</script>

<template>
  <div class="container">
      <div class="text-title">
        <div @click="switchTab('login')">Login</div>
        <div @click="switchTab('signup')">Signup</div>
      </div>
      <div v-if="activeTab === 'login'">
          <form @submit.prevent="handleLogin">
            <label for="loginEmail"></label>
            <input type="email" v-model="loginEmail" placeholder="Email Address" required>
            <label for="loginPassword"></label>
            <input type="password" v-model="loginPassword" placeholder="Password" required>
            <button type="submit"  class="btn">Login</button>
          </form>
      </div>

      <div v-if="activeTab === 'signup'">
        <form @submit.prevent="handleSignup">
          <label for="signupEmail"></label>
          <input type="email" v-model="signupEmail" placeholder="Email Address" required>
          <label for="signupUsername"></label>
          <input type="text" v-model="signupUsername" placeholder="Username" required>
          <label for="signupPassword"></label>
          <input type="password" v-model="signupPassword" placeholder="Password" required>
          <button type="submit" class="btn">Signup</button>
        </form>
      </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 100%;
    height: 500px;
    max-width: 100%;
    background-color: #f4f4f4;
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.9);
  }


  form {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }


  input {
    width: 300px;
    height: 50px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    border-radius: 20px;
    transition: border-color 1.5s;
  }

  input::placeholder {
      font-size: 19px;
    }
  input:focus {
    border-color:  #032b53;
    color: #032b53;
  }

  .text-title {
    padding: 10px;
    width: 85%;
    border: 1px solid #032b53;
    border-radius: 20px;
  }

  form button {
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
      color: #fff;
    }

  div {
    color: #032b53;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    font-size: 19px;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    color: #696c6e;
  } 

</style>

   