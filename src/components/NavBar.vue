<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="nav">
      <div class="profile">
          <div class="img">
              <img src="https://res.cloudinary.com/dqrykh6qy/image/upload/v1702193375/profile_jh7ory.jpg" alt="">
          </div>
          <div class="user-name">
              <h2>mr frank amadi</h2>
              <p>Admin</p>
          </div>
      </div>
      <button>Add Sale-Rep</button>
      <!-- <RouterLink to="/home">Dashboard</RouterLink> -->
      <!-- <RouterLink to="/addnewproduct">Add New Product</RouterLink> -->
      <!-- <RouterLink to="/addnewproduct">Edit Product</RouterLink> -->
      <!-- <button>Edit Product</button> -->
  </div>
  <!-- <RouterView /> -->
</template>

<style scoped>
.nav {
      background-color: #fff;
      padding: 10px;
      display: flex;
      text-align: center;
      justify-content: space-evenly;
      position: fixed;
      width: 100%;
      top: 0;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}

.profile {
  display: flex;
  align-items: center;
  color: #021324;
}

.img img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid gray;
  background-color: #021324;
}

.user-name h2 {
  font-weight: 600;
  text-transform: capitalize;
  line-height: 1em;
}

.user-name p {
  margin: 0;
  color: red;
  font-weight: 600;
}

a {
  background-color:  #3498db;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  background-color: #2980b9;
}

.nav button {
  /* width: 110px; */
  border: 0;
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #3498db;
}

.nav button:hover {
  color: #032b53;
}
</style>