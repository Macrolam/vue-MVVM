<template>
  <div id="app">
  <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'This is a todo list demo'
    };
  }
};
</script>

<style>
html{
  height: 100%;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
