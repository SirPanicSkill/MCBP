<template>
  <div class="container">
    <section class="banner d-lg-flex d-md-flex d-none d-sm-none">
      <div class="banner-about__wrapper">
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
    <section class="best-of-us">
      <p>ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ</p>
      <div class="best self-cons">
        <img src="../assets/self-cons.png" alt="self-cons">
        <p>Личный консультант</p>
        <div class="desc">Помощь высококвалифицированного специалиста по всем вопросам.</div>
      </div>
      <div class="best docs">
        <img src="../assets/docs.png" alt="docs">
        <p>Документы “под ключ”</p>
        <div class="desc">Сбор и составление необходимых для регистрации документов.</div>
      </div>
      <div class="best packs">
        <img src="../assets/packs.png" alt="packs">
        <p>Удобные портфели</p>
        <div class="desc">Мы подобрали самые выгодные пакеты для ваших целей.</div>
      </div>
      <div class="best advantage">
        <img src="../assets/advantage.png" alt="advantage">
        <p>Экономия ваших средств</p>
        <div class="desc">У нас действительно выгодные предложения на рынке бизнес-услуг.</div>
      </div>
      <div class="best creative">
        <img src="../assets/creative.png" alt="creative">
        <p>Креативные решения</p>
        <div class="desc">У нас своя дизайн-студия, которая сможет красиво оформить бизнес.</div>
      </div>
      <div class="best partners">
        <img src="../assets/partners.png" alt="partners">
        <p>Проверенные партнеры</p>
        <div class="desc">Зарекомендовавшие себя типы (нотариусы и юристы).</div>
      </div>
    </section>
    <hr/>
    <section class="row about">
      <p class="col-12">О КОМПАНИИ</p>
      <div class="col-lg-8 about__text">Наша компания – команда опытных специалистов, которые предоставляют услуги в области автоматизации бизнеса и консалтинга. Сфера нашей деятельности – бизнес консалтинг в области маркетинга, проведение различных исследований и юридическое сопровождение сделок. Так же мы готовы предложить вам услуги нашего дизайн-агенства по разработке фирменной айдентики, созданию сайта организации, и последующему ему продвижению!<br/><br/>
Мы гордится своей  репутацией и огромным опытом в области автоматизации бизнеса и бухгалтерского учета. Основная деятельность компании заключается в решение как типичных, так и нестандартных задач для автоматизации бизнес-процессов.</div>
      <img src="../assets/team_bump.png" alt="about us" class="col-lg-4">
    </section>
    <hr/>
    <section class="row partners">
      <p class="col-12">НАШИ ПАРТНЕРЫ</p>
      <div class="col-12 partners__text">Мы сотрудничаем с большим числом ведущих банков. И они могут ручаться за нашу работу, о чем свидетельствует ряд наград и сертификатов.  Для нас большая часть быть партнерами!</div>
      <div class="col-12 partners__wrapper">
        <a href="../assets/sert_vozr.png" target="_blank" class="partners__sert vozr"></a>
        <a href="../assets/sert_prom.png" target="_blank" class="partners__sert prom"></a>
        <a href="../assets/sert_sber.png" target="_blank" class="partners__sert sber"></a>
        <a href="../assets/sert_vtb.png" target="_blank" class="partners__sert vtb"></a>
        <a href="../assets/sert_alfa.png" target="_blank" class="partners__sert alfa"></a>
        <a href="../assets/sert_vozr.png" target="_blank" class="partners__sert vozr"></a>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';
import Slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  name: 'About',
  mounted() {
    $('.banner-about__wrapper').slick({
      autoplay: true,
      arrows: false,
      dots: true,
      respondTo: 'slider',
      mobileFirst: true
    });
    $('.partners__wrapper').slick({
      autoplay: true,
      slidesToShow: 5,
      lazyLoad: 'ondemand',
      slideToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*banner*/
.banner {
  margin: 30px -15px 0;
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
.slick-dotted.slick-slider {
  margin: 0;
}
/*SECTIONS*/
section {
   margin-top: 30px;
}
section:not(.banner) p {
  flex-basis: 100%;
  text-align: left;
  font-family: "Helios Bold", sans-serif;
  color: #822e41;
  margin-bottom: 10px;
}
section:not(.banner) > p {
  margin-bottom: 1rem;
}

/*vidgets*/
.best-of-us {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: wrap;
}
.best {
  width: 370px;
  height: 100px;
  box-sizing: border-box;
  padding: 0 10px 0 100px;
  position: relative;
}
.best img {
  position: absolute;
  left: 10px;
  width: 70px;
  top: 50%;
  transform: translateY(-50%);
}
.best .desc {
  text-align: left;
  font-size: 14px;
}

/*about*/
.about img {
  height: 100%;
}
.about__text {
  text-align: left;
  margin-bottom: 10px;
}

/*partners*/
.partners__wrapper {
  display: flex;
  width: 100%;
  height: 287px;
/*   box-sizing: border-box; */
}
.partners__text {
  text-align: left;
  margin-bottom: 10px;
}
.partners__sert {
  width: 208px;
  max-width: 208px;
  height: 287px;
  box-sizing: border-box;
  border: 10px solid white;
  outline: 1px solid #822e41;
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
.partners__sert::before {
  content: '';
  position: absolute;
  width: 100%;
  transform: scale(1.122);
  height: 1px;
  top: -10px;
  left: 0;
  background-color: #822e41;
}
.partners__sert::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scale(1.122);
  height: 1px;
  bottom: -10px;
  left: 0;
  background-color: #822e41;
}
.vozr {
  background-image: url(../assets/sert_vozr_xs.png);
}
.prom {
  background-image: url(../assets/sert_prom_xs.png);
}
.sber {
  background-image: url(../assets/sert_sber_xs.png);
}
.vtb {
  background-image: url(../assets/sert_vtb_xs.png);
}
.alfa {
  background-image: url(../assets/sert_alfa_xs.png);
}

/***** MADIA *****/
/*view < 1100px*/
@media (max-width: 1100px){
  .best-of-us {
    justify-content: space-around;
  }
}
/*760px < view < 1100px*/
@media (max-width: 1100px) and (min-width: 760px){
  .best {
    width: 345px;
  }
}
</style>
