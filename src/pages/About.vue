<template>
  <section class="banner">
    <div class="banner-about__wrapper carousel">
      <div class="banner-about__content">
        <div class="banner-about__text-1">
          <p>БЕСПЛАТНОЕ</p>
          <p>БУХГАЛТЕРСКОЕ ОБЛУЖИВАНИЕ</p>
        </div>
        <div class="banner-about__text-2">
          <p>Зарегистрировали фирму, подписали Договор на бухгалтерское обслуживание - первый месяц бухгалтерского обслуживания БЕСПЛАТНО!<i>*</i></p>
          <p>* Акция действительна только до конца месяца!</p>
        </div>
      </div>
      <div class="banner-about__content">
        <div class="banner-about__text-1">
          <p>БЕСПЛАТНОЕ</p>
          <p>БУХГАЛТЕРСКОЕ ОБЛУЖИВАНИЕ</p>
        </div>
        <div class="banner-about__text-2">
          <p>Зарегистрировали фирму, подписали Договор на бухгалтерское обслуживание - первый месяц бухгалтерского обслуживания БЕСПЛАТНО!<i>*</i></p>
          <p>* Акция действительна только до конца месяца!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';
import Slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  name: 'About',
  mounted() {
    $('.carousel').slick({
      autoplay: true,
      arrows: false,
      dots: true,
      mobileFirst: true
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  margin: 30px -15px;
  text-align: left;
}
.banner-about__wrapper {
  display: flex;
  width: 100%;
  min-height: 200px;
  background-image: url(../assets/logo-banner.png), url(../assets/banner.png);
  background-position: calc(100% - 10px) calc(100% - 10px), 0 0;
  background-repeat: no-repeat, no-repeat;
  background-size: auto 80%, cover;
}
.banner-about__content {
  display: flex;
  flex-direction: column;
  max-width: 55%;
  margin: 30px 0 80px 60px;
  font-size: 30px;
}
.banner-about__text-1 {
  color: #822e41;
  margin: 0 0 10px 50px;
  font-family: "Helios Bold", sans-serif;
}
.banner-about__text-1 p {
  position: relative;
  margin-bottom: 10px;
}
.banner-about__text-1 p:first-of-type::before {
  content: '';
  display: inline-block;
  position: absolute;
  left: -50px;
  width: 40px;
  height: 100%;
  background-image: url(../assets/logo_icon.png);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
}
.banner-about__text-1 p:last-of-type {
  text-decoration: underline;
}
.banner-about__text-2 {
  font-size: 26px;
  font-family: "Helios", sans-serif;
}
.banner-about__text-2 i {
  color: #822e41;
}
.banner-about__text-2 p:last-of-type {
  font-size: 20px;
}
</style>
