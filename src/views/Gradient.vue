<template>
  <div>
    <h1 class="greenTxt text-3xl font-bold py-4">Select any Gradient</h1>
    <div class="w-full py-3">
      <ul class="grid grid-cols-4">
        <li id="grad1" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText1" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad2" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText2" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad3" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText3" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad4" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText4" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad5" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText5" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad6" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText6" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad7" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText7" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad8" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText8" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad9" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText9" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad10" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText10" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad11" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText11" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad12" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText12" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad13" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText13" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad14" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText14" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad15" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText15" class="grad xs">{{ color }}</a>
        </li>
        <li id="grad16" class="p-3 rounded py-12 m-3 glass">
          <a id="gradText16" class="grad xs">{{ color }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gradient",
  methods: {
    hider() {
      ClrBtn.classList.add("hidden")
      GradBtn.classList.remove("hidden")
    },
  },
  beforeMount() {
    this.hider()
  },

};
</script>

<style>
.xs {
  font-size: 0.65rem;
}
</style>
