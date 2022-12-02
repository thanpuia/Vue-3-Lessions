<template>
<h1>Hoho</h1>
<p>{{ title }}</p>
<input type="text" ref="name">
<button @click="handleClick">clik</button>

<div>

  <Modal header="Sign up yo" :text="lukake" theme="sale"/>
</div>

<button @click="toggleModal">Open Modal</button>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    Modal
     },
  data(){
    return {
      title:"pop",
      header:"Sign up",
      text:"Offer",
      showModal:false,


    }
  },

  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
    },
    toggleModal(){
      this.showModal = !this.showModal
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
