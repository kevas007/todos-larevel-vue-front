<template>
  <div class="m-10" v-if="getTodos  ">
 <p>{{getTodos.length}}</p>
 <div class="grid grid-cols-4 gap-4">
      <div v-for="item in getTodos" :key="item.id" class="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div  class="flex justify-center -mt-16 md:justify-end" v-if="item.image_cover">
            <img   class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" :src="item.image_cover"/>
        </div>

        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{{item.title }}</h2>

        <p class="mt-2 text-gray-600 dark:text-gray-200">{{item.description }}</p>
         <div class="flex justify-end mt-4 mb-5">
         <input type="checkbox" v-model="item.completed" id="horns" name="horns">
         </div>
        <hr>
        <div class="flex justify-around mt-4">
          <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Edit
</button>

          <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80" >
      Delete
            </button>

          </div>
        <!-- <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-blue-500 dark:text-blue-300">John Doe</a>
        </div> -->
    </div>
 </div>
  </div>
</template>

<script>
 import { mapGetters } from 'vuex';


export default {
  name: 'HelloWorld',

  mounted () {
    this.$store.dispatch('getTodos')
  },
  computed: {
     ...mapGetters([
      'getTodos',
    ])

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
