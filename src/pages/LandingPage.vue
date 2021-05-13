<template>
  <div class="main-page">
    <section class="main-page__selection">
      <DeskBar></DeskBar>
      <div class="main-page__selection_heading">
        Мы за удобство <br />
        красоту и здоровье
      </div>
    </section>
    <section class="main-page__information">
      <blog-card-post
        v-for="data in this.$store.state.BasicData.MainPageBlogCardPost"
        :key="data.name"
        :name="data.name"
        :description="data.description"
        :btntext="data.btntext"
        :source="data.source"
        :href="data.href"
      ></blog-card-post>
    </section>
    <section class="main-page__advantages">
      <div class="main-page__title">Преимущества, которыми мы гордимся:</div>
      <div class="main-page__advantages_wrap">
        <base-advantages
          v-for="advantages in $store.state.BasicData.BaseAdvantages"
          :key="advantages.title"
          :source="advantages.source"
          :title="advantages.title"
          :subtitle="advantages.subtitle"
        ></base-advantages>
      </div>
    </section>
    <section class="main-page__cooperation">
      <div class="main-page__cooperation_bg">
        <div class="main-page__cooperation_title">
          Добавьте свой салон в comfortreat
        </div>
        <div class="main-page__cooperation_subtitle">
          Открывайте новые возможности и получайте <br />
          клиентов, используя удобную систему записей.
        </div>
        <router-link to="/business/login" class="main-page__cooperation_btn"
          >Начать сотрудничать</router-link
        >
      </div>
    </section>
  </div>
</template>
<script>
import BaseAdvantages from "../components/single-file/base-advantages.vue";
import BlogCardPost from "../components/blog/BlogCardPost.vue";
import DeskBar from "../models/DeskBar";
export default {
  name: "MainPage",
  components: {
    DeskBar,
    BlogCardPost,
    "base-advantages": BaseAdvantages,
  },
};
</script>
<style lang="sass">
.main-page
  &__title
    font-size: 24px
    color: $palette-black
    margin-bottom: 40px
    text-align: center
  &__selection
    display: flex
    align-items: center
    height: 330px
    background: url(../assets/img/backrounds/bg.png) center center/cover no-repeat
    &_heading
      padding-left: 80px
      font-size: 35px
      color: $palette-white
      font-weight: 600
  &__information
    margin-top: $sectionmt
    display: flex
    flex-wrap: wrap
    justify-content: space-between
  &__advantages
    margin-top: $sectionmt
    &_wrap
      display: flex
      justify-content: space-between
  &__cooperation
    color: white
    margin-top: 35px
    &_title
      font-weight: 600
      font-size: 26px
    &_subtitle
      margin-top: 11px
      font-size: 15px
    &_btn
      text-decoration: none
      cursor: pointer
      margin-top: 20px
      padding: 0px 15px
      box-sizing: border-box
      padding-top: 7px
      display: inline-block
      background: white
      flex-wrap: nowrap
      font-size: 15px
      line-height: 16px
      height: 30px
      color: $palette-blue
    &_bg
      padding: 35px 60px
      padding-top: 30px
      box-sizing: border-box
      height: 180px
      width: 100%
      background: url(../assets/img/backrounds/bg-cooperation.png) center center/cover no-repeat
</style>
