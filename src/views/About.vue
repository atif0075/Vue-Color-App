<template>
  <div class="flex flex-col justify-center items-center h-full">
    <div class="p-10 rounded-lg border-2 flex flex-col items-center glass">
      <transition name="tray" @before-enter="beforeEnter" @after-enter="afterEnter" @enter="enter">
        <h1 class="greenTxt text-3xl font-bold py-4" v-if="show">About me</h1>
      </transition>
      <img
        src="../assets/images/myPic.jpg"
        alt="AuthorPic"
        class="w-32 h-32 rounded-full border-4 p-1 border-green-500"
      />
      <h1 class="font-semibold py-2 text-xl tracking-wider">I am Atif</h1>
      <p
        class="w-96 text-justify py-3"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet illo quaerat, officiis omnis quis molestiae ullam assumenda recusandae distinctio itaque? Nihil, sed! Natus, esse eum odit aperiam ut sed.</p>
      <button class="bg py-3 px-4 rounded text-base font-semibold">
        <a href="mailto:chatif476@gmail.com">Contact me</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      show: true
    }
  },
  methods: {
    hider() {
      ClrBtn.classList.add("hidden")
      GradBtn.classList.add("hidden")
    }
  },
  beforeMount() {
    this.hider()
  }
}
</script>

<style>
.tray-enter,
.tray-leave-to {
  opacity: 0;
}

.tray-leave,
.tray-enter-to {
  opacity: 1;
}

.tray-enter-active,
.tray-leave-active {
  transition: opacity 300ms ease;
}
</style>