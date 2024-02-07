<template>
  <header class="header">
    <nav class="site_nav">
      <a href="">
        <img src="../img/site-logo.png" alt="">
      </a>
      <div class="user-info" @click="toggleModal">
        <img src="../img/admin.png" alt="User Avatar">
        <h1> {{ fullName }} </h1>
      </div>
    </nav>
    <div v-if="isModalOpen" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p>Profile</p>
        <p>Settings</p>
        <p>
          <router-link to="/login">Logout</router-link>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      fullName: "Zuhriddin Qulmatov",
      isModalOpen: false,
    }
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
}
</script>

<style lang="scss">

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
.header {
  height: 87px;
  width: 100%;

  .site_nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #F5F5F5;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    img {
      width: 80px;
      height: 80px;
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    h1 {
      margin: 0;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .modal {
    position: absolute;
    right: 20px;
    top: 70px;
    width: 200px;

  }

  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 20px;
  }


}
  </style>
