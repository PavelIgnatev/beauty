<template>
  <div>
    <div
      class="base-header__category"
      @click="active = true"
      v-click-outside="isActive"
      :class="{ 'base-header__active': active }"
    >
      {{ HeaderCategory.name }}
    </div>
    <transition name="BaseHeaderFade">
      <div class="base-header__list" v-if="active">
        <div class="base-header__list_wrapper">
          <router-link
            v-for="(item, index) in HeaderCategory.value"
            :to="item.name.split(' ').join('-')"
            :key="index"
            class="base-header__link"
            >{{ item.name }}</router-link
          >
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "BaseHeaderCategory",
  props: { HeaderCategory: Object },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    isActive() {
      this.active = false;
    },
    urlRusLat(str) {
      str = str.toLowerCase(); // все в нижний регистр
      var cyr2latChars = new Array(
        ["а", "a"],
        ["б", "b"],
        ["в", "v"],
        ["г", "g"],
        ["д", "d"],
        ["е", "e"],
        ["ё", "yo"],
        ["ж", "zh"],
        ["з", "z"],
        ["и", "i"],
        ["й", "y"],
        ["к", "k"],
        ["л", "l"],
        ["м", "m"],
        ["н", "n"],
        ["о", "o"],
        ["п", "p"],
        ["р", "r"],
        ["с", "s"],
        ["т", "t"],
        ["у", "u"],
        ["ф", "f"],
        ["х", "h"],
        ["ц", "c"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "shch"],
        ["ъ", ""],
        ["ы", "y"],
        ["ь", ""],
        ["э", "e"],
        ["ю", "yu"],
        ["я", "ya"],

        ["А", "A"],
        ["Б", "B"],
        ["В", "V"],
        ["Г", "G"],
        ["Д", "D"],
        ["Е", "E"],
        ["Ё", "YO"],
        ["Ж", "ZH"],
        ["З", "Z"],
        ["И", "I"],
        ["Й", "Y"],
        ["К", "K"],
        ["Л", "L"],
        ["М", "M"],
        ["Н", "N"],
        ["О", "O"],
        ["П", "P"],
        ["Р", "R"],
        ["С", "S"],
        ["Т", "T"],
        ["У", "U"],
        ["Ф", "F"],
        ["Х", "H"],
        ["Ц", "C"],
        ["Ч", "CH"],
        ["Ш", "SH"],
        ["Щ", "SHCH"],
        ["Ъ", ""],
        ["Ы", "Y"],
        ["Ь", ""],
        ["Э", "E"],
        ["Ю", "YU"],
        ["Я", "YA"],

        ["a", "a"],
        ["b", "b"],
        ["c", "c"],
        ["d", "d"],
        ["e", "e"],
        ["f", "f"],
        ["g", "g"],
        ["h", "h"],
        ["i", "i"],
        ["j", "j"],
        ["k", "k"],
        ["l", "l"],
        ["m", "m"],
        ["n", "n"],
        ["o", "o"],
        ["p", "p"],
        ["q", "q"],
        ["r", "r"],
        ["s", "s"],
        ["t", "t"],
        ["u", "u"],
        ["v", "v"],
        ["w", "w"],
        ["x", "x"],
        ["y", "y"],
        ["z", "z"],

        ["A", "A"],
        ["B", "B"],
        ["C", "C"],
        ["D", "D"],
        ["E", "E"],
        ["F", "F"],
        ["G", "G"],
        ["H", "H"],
        ["I", "I"],
        ["J", "J"],
        ["K", "K"],
        ["L", "L"],
        ["M", "M"],
        ["N", "N"],
        ["O", "O"],
        ["P", "P"],
        ["Q", "Q"],
        ["R", "R"],
        ["S", "S"],
        ["T", "T"],
        ["U", "U"],
        ["V", "V"],
        ["W", "W"],
        ["X", "X"],
        ["Y", "Y"],
        ["Z", "Z"],

        [" ", "_"],
        ["0", "0"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["-", "-"]
      );

      var newStr = new String();

      for (var i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        var newCh = "";

        for (var j = 0; j < cyr2latChars.length; j++) {
          if (ch == cyr2latChars[j][0]) {
            newCh = cyr2latChars[j][1];
          }
        }
        // Если найдено совпадение, то добавляется соответствие, если нет - пустая строка
        newStr += newCh;
      }
      // Удаляем повторяющие знаки - Именно на них заменяются пробелы.
      // Так же удаляем символы перевода строки, но это наверное уже лишнее
      return newStr.replace(/[_]{2,}/gim, "_").replace(/\n/gim, "");
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
<style lang="sass">
.base-header
  &__active
    color: $palette-orange
  &__HeaderCategory
    text-align: center
    height: 50px
    display: flex
    align-items: center
    cursor: pointer
    transition: all .5s ease-in-out
  &__list
    z-index: 10000
    position: absolute
    left: 0
    top: 50px
    width: 100%
    height: 260px
    padding-top: 33px !important
    padding-bottom: 33px !important
    background: #010235
    box-sizing: border-box
    &::after
      content: ''
      width: 100%
      height: 1px
      position: absolute
      top: 0
      z-index: 100
      left: 0
      background: #D54327
      transform: scaleY(0.5)
  &__link
    z-index: 100
    text-decoration: none
    color: $palette-white
    text-align: left
    display: flex
    align-items: center
    height: calc(194px / 7)
    cursor: pointer
  &__list_wrapper
    width: 100%
    height: 100%
    display: flex
    flex-wrap: wrap
    flex-direction: column
  &__category
    display: flex
    align-items: center
    height: 100%
    z-index: 100
    cursor: pointer
.BaseHeaderFade-enter-active, .BaseHeaderFade-leave-active
  transition: opacity .5s ease-in-out
.BaseHeaderFade-enter, .BaseHeaderFade-leave-to
  opacity: 0
</style>
