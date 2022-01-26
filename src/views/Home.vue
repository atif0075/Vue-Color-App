<template>
  <div>
    <h1 class="greenTxt text-3xl font-bold py-4">Select any Color</h1>
    <div class="w-full py-3">
      <ul class="grid grid-cols-3">
        <li id="back1" class="p-6 rounded py-12 m-3 glass">
          <a id="text1" class="grad">{{ color }}</a>
        </li>
        <li id="back2" class="p-6 rounded py-12 m-3 glass">
          <a id="text2" class="grad">{{ color }}</a>
        </li>
        <li id="back3" class="p-6 rounded py-12 m-3 glass">
          <a id="text3" class="grad">{{ color }}</a>
        </li>
        <li id="back4" class="p-6 rounded py-12 m-3 glass">
          <a id="text4" class="grad">{{ color }}</a>
        </li>
        <li id="back5" class="p-6 rounded py-12 m-3 glass">
          <a id="text5" class="grad">{{ color }}</a>
        </li>
        <li id="back6" class="p-6 rounded py-12 m-3 glass">
          <a id="text6" class="grad">{{ color }}</a>
        </li>
        <li id="back7" class="p-6 rounded py-12 m-3 glass">
          <a id="text7" class="grad">{{ color }}</a>
        </li>
        <li id="back8" class="p-6 rounded py-12 m-3 glass">
          <a id="text8" class="grad">{{ color }}</a>
        </li>
        <li id="back9" class="p-6 rounded py-12 m-3 glass">
          <a id="text9" class="grad">{{ color }}</a>
        </li>
        <li id="back10" class="p-6 rounded py-12 m-3 glass">
          <a id="text10" class="grad">{{ color }}</a>
        </li>
        <li id="back11" class="p-6 rounded py-12 m-3 glass">
          <a id="text11" class="grad">{{ color }}</a>
        </li>
        <li id="back12" class="p-6 rounded py-12 m-3 glass">
          <a id="text12" class="grad">{{ color }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    hider() {
      ClrBtn.classList.remove("hidden")
      GradBtn.classList.add("hidden")
    },
  },
  beforeMount() {
    this.hider()
  },

};
</script>
<style>
.glass {
  background: #ffffff33;
  box-shadow: 0 4px 30px #0000001a;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid #ffffff4d;
}
.bg {
  background-color: #012a35;
}
</style>