<template>
  <footer class="custom-footer">
    <div class="container">
      <div class="custom-footer__inner">
        <div class="custom-footer__column">
          <Copyright class="custom-footer__copyright"/>
          <ContactInformation/>
        </div>
        <div class="custom-footer__column">
          <nav class="custom-footer__nav">
            <ul class="custom-footer__list">
              <li class="custom-footer__item">
                Межкомнатные двери
              </li>
              <li class="custom-footer__item">
                Мебель 
              </li>
              <li class="custom-footer__item">
                Стеновые панели «Буазери»
              </li>
              <li class="custom-footer__item">
                Лестницы 
              </li>
              <li class="custom-footer__item">
                Мебельные фасады
              </li>
            </ul>
          </nav>
          <div class="custom-footer__wrapper">
            <div class="custom-footer__content">
              <nav class="custom-footer__nav">
                <ul class="custom-footer__list">
                  <li class="custom-footer__item">
                    Доставка
                  </li>
                  <li class="custom-footer__item">
                    Статьи
                  </li>
                  <li class="custom-footer__item">
                    О нас фасады
                  </li>
                  <li class="custom-footer__item">
                    Фасады
                  </li>
                </ul>
              </nav>
            <Socials class="custom-footer__socials"/>
            </div>
            <a class="custom-footer__privacy link">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
<style lang="scss">
$b: '.custom-footer';

#{$b} {
  font-size: 13px;
  color: $color-secondary-opacity;
  background-color: $color-dark;

  // .custom-footer__inner
  &__inner {
    display: grid;
    grid-template-columns:1fr 1fr;
    gap: 150px;
    background-image: url('/assets/img/BG.png');
    background-repeat: repeat;
    padding: 100px 0;

    @include desktop {
      gap: 50px;
    }

    @include desktop-sm  {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: unset;
      padding: 60px 0;
    }
  }
  
  // .custom-footer__column
  &__column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    @include mobile {
      display: block;
      text-align: center;
    }

    &:not(:last-child) {
      @include desktop-sm {
        margin-bottom: 40px;
      }
      @include mobile {
        margin-bottom: unset;
      }
    }
    &:last-child {
      @include mobile {
        display: none;
      }
    }
  }
  
  // .custom-footer__copyright
  &__copyright {
    @include mobile {
        margin-bottom: 40px;
      }
  }
  // .custom-footer__categories-list
  &__list {
    color: $color-secondary-opacity;
  }

  // .custom-footer__categories-item
  &__item {
    padding: 8px 0;
    cursor: pointer;

    &:hover {
      color: $color-white;
    }
  }

  // .custom__footer-wrapper
  &__wrapper {
  }
  // .custom-footer__content
  &__content {
    display: flex;
  }
  // .custom-footer__socials
  &__socials {
    margin-left: 85px;

    @include desktop {
      margin-left: 40px;
    }
  }
  // .custom-footer__privacy
  &__privacy {
    margin-top: 55px;
  }
}
</style>