<template>
  <div>
    <div>
      <h1 class="greenTxt text-3xl font-bold py-4">Vue Color App {{ msg }}</h1>
    </div>
    <div>
      <ul>
        <router-link id="btn1" class="li bg block" to="/">Color</router-link>

        <router-link id="btn2" class="li bg block" to="/gradient">Gradient</router-link>

        <router-link id="btn3" class="li bg block" to="/about">About</router-link>
      </ul>
    </div>
    <div class="w-full flex items-center">
      <button id="ClrBtn" @click="funClr" class="bg px-3 py-2 rounded">Generate</button>
      <button id="GradBtn" @click="funGrad" class="bg px-3 py-2 rounded hidden">Generate</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Left",
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        this.funClr()
      }
      else if (e.key == 'a' || e.key == 'A') {
        btn1.click()
      }
      else if (e.key == 's' || e.key == 'S') {
        btn2.click()
      }
      else if (e.key == 'd' || e.key == 'D') {
        btn3.click()
      }
    });
  },

  data() {
    return {
      colorPallete: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
      color: '#DF466F'
    }
  },
  methods: {
    randomColor() {
      return Math.floor(Math.random() * this.colorPallete.length);
    },
    colorGenerator(e, s) {
      let hash = "#";
      for (let i = 0; i < 6; i++) {
        hash += this.colorPallete[this.randomColor()];
      }
      e.style.background = hash
      s.innerHTML = hash
    },

    funClr() {
      this.msg = "enter"
      this.colorGenerator(back1, text1)
      this.colorGenerator(back2, text2)
      this.colorGenerator(back3, text3)
      this.colorGenerator(back4, text4)
      this.colorGenerator(back5, text5)
      this.colorGenerator(back6, text6)
      this.colorGenerator(back7, text7)
      this.colorGenerator(back8, text8)
      this.colorGenerator(back9, text9)
      this.colorGenerator(back10, text10)
      this.colorGenerator(back11, text11)
      this.colorGenerator(back12, text12)
    },
    funGrad() {
      this.grad(grad1, gradText1)
      this.grad(grad2, gradText2)
      this.grad(grad3, gradText3)
      this.grad(grad4, gradText4)
      this.grad(grad5, gradText5)
      this.grad(grad6, gradText6)
      this.grad(grad7, gradText7)
      this.grad(grad8, gradText8)
      this.grad(grad9, gradText9)
      this.grad(grad10, gradText10)
      this.grad(grad11, gradText11)
      this.grad(grad12, gradText12)
      this.grad(grad13, gradText13)
      this.grad(grad14, gradText14)
      this.grad(grad15, gradText15)
      this.grad(grad16, gradText16)
    },
    randomDegreeGen() {
      return Math.floor(Math.random() * 360 + 1);
    },
    grad(id, gradCode) {
      let hash = "";
      for (let i = 0; i < 6; i++) {
        hash += this.colorPallete[this.randomColor()];
      }
      let a = "";
      for (let i = 0; i < 6; i++) {
        a += this.colorPallete[this.randomColor()];
      }
      let textSet = id.style.backgroundImage = `linear-gradient(${this.randomDegreeGen()}deg, #${hash}, #${a})`;
      gradCode.innerHTML = textSet;
    }
  },
};
</script>

<style></style>
