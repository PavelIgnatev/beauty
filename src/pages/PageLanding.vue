<template>
  <div class="main-page">
    <section class="main-page__selection">
      <Deskbar></Deskbar>
      <div class="main-page__selection_heading">
        Мы за удобство <br />
        красоту и здоровье
      </div>
    </section>
    <section class="main-page__information">
      <BlockInformation
        name="Владеете салоном, 
        но всё ещё не с нами?"
        description="Наша задача - не только упростить жизнь каждому, кто захочет посетить салон красоты, но и поддержать исполнителей данных услуг"
        btntext="Узнать подробнее"
        source="bg-salon.png"
      ></BlockInformation>
      <BlockInformation
        name="Новинки моды 2021"
        description="Новинки мировой индустрии красоты, которые вызывали наибольший отклик у людей в этом году! 
        Вперёд к трендам!"
        btntext="Мне интересно"
        source="bg-moda.png"
      ></BlockInformation>
    </section>
    <section class="main-page__advantages">
      <div class="main-page__title">Преимущества, которыми мы гордимся:</div>
      <div class="main-page__advantages_wrap">
        <Advantages
          source="price.svg"
          title="Умные цены"
          subtitle="Мы стараемся делать
      сервис доступным для всех"
        ></Advantages>
        <Advantages
          source="bron.svg"
          title="Бронируй 24/7"
          subtitle="Занимайте свободные записи
        в удобное для вас время"
        ></Advantages>
        <Advantages
          source="globus.svg"
          title="Широкий выбор"
          subtitle="С нами сотрудничают более 1000 салонов красоты"
        ></Advantages>
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
        <div class="main-page__cooperation_btn">Начать сотрудничать</div>
      </div>
    </section>
  </div>
</template>
<script>
import Advantages from "../components/module/advantages";
import BlockInformation from "../components/module/block-information";
import Deskbar from "../components/module/deskbar";
export default {
  name: "MainPage",
  components: { Deskbar, BlockInformation, Advantages },
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
      background: url(../assets/img/backrounds/cooperation.png) center center/cover no-repeat
</style>
