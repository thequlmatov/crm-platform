<template>
  <div class="hello">
    <h1>Random Fact:</h1>
    <button @click="fetchData">Click Me!</button>
    <p v-if="fact">{{ fact }}</p>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    fetchData() {
      fetch('http://crm-platform/api/rooms', {
        method: "GET",
      })
        .then((response) => {
          response.json().then((data) => {
            this.fact = data[0].fact;
						console.log(data)
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style>
button {
padding: 12px 32px;
font-size: 16px;
border-radius: 8px;
}
</style>