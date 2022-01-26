<template>
  <div class="flex justify-between list-none w-full full">
    <li class="w-1/5 h-screen p-3">
      <Left />
    </li>
    <li class="w-4/5 h-screen">
      <Right />
    </li>
  </div>
</template>

<script>
import Left from "./Left.vue";
import Right from "./Right.vue";
export default {
  name: "Main",
  components: { Left, Right },
};
</script>

<style>
.full {
  background-color: #001e26;
  color: #00dc82;
}
.greenTxt {
  color: #00dc82;
}
</style>
