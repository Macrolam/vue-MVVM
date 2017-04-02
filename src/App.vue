<template>
  <div id="app">
    <h1 v-text='title'></h1>

    <form action="javascript:postaction()" id="form">
      <label for="title">ToDoList</label>
      <input class="userInput" type="text" v-model="newTask" v-on:keyup.enter="addNewTask" placeholder="添加ToDo,输入完成回车">
    </form>
    <ul class="taskList">
      <li v-for='item in items' v-bind:class='{cur:item.isFin}' v-on:click="toggleFin(item)"><input
        class="isFin" type="checkbox">{{item.con}}
      </li>
    </ul>
    <button id="btn" v-on:click="removeTask" v-if='btnFlagShow()'>clear</button>
  </div>
</template>

<script>
  import storeJs from './localStorage.js';
  export default {
    data: function () {
      return {
        title: 'This is a Macrolam  ToDoList demo',
        newTask: '',
        items: storeJs.fetch()
      }
        ;
    },
    watch: {
      items: {
        handler: function (newval) {
          // console.log(newval, oldval);
          storeJs.save(newval);
        }
      },
      deep: true
    },
    methods: {

      addNewTask: function () {
        if (this.newTask !== '') {
          this.items.push({con: this.newTask, isFin: false});
          this.newTask = '';
        }

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  html {
    height: 100%;
  }

  body {

    height: 100%;
    background: lightcoral;
    color: #fff;
  }

  #app {
    width: 100%;
  }

  h1 {
    text-align: center;
    background: #000;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    font-weight: normal;
    opacity: 0.2;

  }

  form {
    background: #000;
    display: block;
    margin-top: 10px;
    height: 50px;
  }

  form label {
    float: left;
    width: 100px;
    height: 50px;
    line-height: 50px;
    color: #DDD;
    font-size: 24px;
    cursor: pointer;
  }

  .userInput {
    display: block;
    float: right;
    width: 60%;
    height: 24px;
    margin-top: 12px;
    text-indent: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24), 0 1px 6px rgba(0, 0, 0, 0.45) inset;
    border: none;
  }

  .taskList {
    margin-top: 20px;
  }

  .taskList li {
    position: relative;
    padding-left: 60px;
    line-height: 40px;
    margin-bottom: 5px;
    border-left: 5px solid skyblue;
    background: rgba(255, 255, 255, 0.2);
  }

  .taskList .isFin {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }

  .taskList li.cur {
    text-decoration: line-through;
    color: #000;
    font-weight: bold;
  }

  #btn {
    float: right;
    margin-top: 40px;
    background: rgba(255, 255, 255, 0.2);
    color: #2b2b2b;
    font-weight: bold;
    border-radius: 4px;
    line-height: 25px;
    width: 80px;
  }
</style>
