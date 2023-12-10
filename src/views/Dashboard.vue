<template>
    <nav>
        <div class="nav">
            <div class="profile">
                <div class="img">
                    <img src="https://res.cloudinary.com/dqrykh6qy/image/upload/v1702193375/profile_jh7ory.jpg" alt="">
                </div>
                <div class="user-name">
                    <h2>mr frank</h2>
                    <p>Admin</p>
                </div>
            </div>
            <button>Add New Product</button>
            <button>Edit Product</button>
        </div>
    </nav>
    <div class="container">
      <h3><span>Item</span>Price</h3>
      <ul id="list" class="list">
        <li class="minus">
          Malt <span>400</span>
        </li>
        <li class="plus">
          Burger <span>$400</span>
        </li>
      </ul>
    </div>
</template>

<style scoped>

.nav {
  width: 100vw;
  display: flex;
  justify-content:  space-evenly;
  align-items: center;
  background-color: #fff;
  color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.profile {
  display: flex;
  align-items: center;
  color: #021324
}

.img img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
  /* border: 2px solid black; */
  background-color: #021324;
}

.user-name h2 {
  /* margin: 0; */
  text-transform: capitalize;
  line-height: 1em;
}

.user-name p {
  margin: 0;
  color: red;
  font-weight: 600;
}

button {
  /* width: 100px; */
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.container {
  padding: 20px;
  margin: 30px auto;
  width: 400px;
  background-color: aliceblue;
  border-radius: 5px;
}

.btn {
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
}

.btn:focus,
.delete-btn:focus {
  outline: 0;
}

.list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
}

.list li {
  /* width: 600px; */
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px;
  margin: 10px 0;
 
}

.list li.plus {
  /* border-right: 5px solid #2ecc71; */
}

.list li.minus {
  /* border-right: 5px solid #c0392b; */
}

.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.list li:hover .delete-btn {
  opacity: 1;
}

h3 {
  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  margin: 40px 0 10px;
  /* border-right-width: 500px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #021324;
}

</style>