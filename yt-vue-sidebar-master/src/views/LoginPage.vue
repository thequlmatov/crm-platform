<template>
  <form class="login-form" action="">
    <label for="name">Name</label>
    <input class="login-form_input" id="name" type="text" v-model="email" />
    <label for="password"> Password</label>
    <input id="password" type="password" v-model="password" />
    <button @click.prevent="submit">Log in</button>
  </form>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const DBEmail = "123";
    const DBPass = "123";

    const router = useRouter();

    const submit = () => {
      if (
        email.value.toLowerCase() === DBEmail &&
        password.value.toLowerCase() === DBPass
      ) {
        router.push("/");
        // router.push({ name: "main", params: { id: 1 } });
        // router.push({ name: "main" });
        localStorage.setItem("token", "token");
      }
    };

    onBeforeMount(() => {
      const token = !!localStorage.getItem("token");
      if (token) {
        // router.push({ name: "main" });
        router.push("/login");
      }
    });

    return {
      email,
      password,
      DBEmail,
      DBPass,
      submit,
    };
  },
};
</script>

<style lang="scss">
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 202px;
    &_input {
      margin-bottom: 10px;
      padding: 8px;
      width: 250px;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;

      &:last-child {
        margin-bottom: 20px;
      }
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
</style>
