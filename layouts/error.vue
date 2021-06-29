<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
     <h1>An error occurred</h1>
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>
<script>
export default {
 
    props: {
    error: {
      type: Object,
      default: null
    }
  // you can set a custom layout for the error page v-if="error.statusCode === 500||404"
    },
     layout: 'error-layout'
}
</script>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>