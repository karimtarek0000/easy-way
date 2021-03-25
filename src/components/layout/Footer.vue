<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__info">
        <!--  -->
        <div class="footer__contact">
          <!--  -->
          <div class="footer__contact__logo">
            <img src="@/assets/logo.jpg" alt="logo" />
          </div>
          <!--  -->
          <ul class="footer__contact__social__media">
            <li>
              <a href="#">
                <GSvg nameIcon="facebook" title="facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <GSvg nameIcon="twitter" title="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <GSvg nameIcon="google" title="google" />
              </a>
            </li>
            <li>
              <a href="#">
                <GSvg nameIcon="youtube" title="youtube" />
              </a>
            </li>
          </ul>
        </div>
        <!--  -->
        <div class="footer__about">
          <h4>عن الشركه</h4>
          <ul>
            <li>
              <routerLink
                active-class="s"
                exact-active-class="ss"
                :to="$i18nRoute({ name: 'Sections' })"
                >من نحن</routerLink
              >
            </li>
            <li>
              <routerLink
                active-class="s"
                exact-active-class="ss"
                :to="$i18nRoute({ name: 'Sections' })"
                >خدماتنا</routerLink
              >
            </li>
            <li>
              <routerLink
                active-class="s"
                exact-active-class="ss"
                :to="$i18nRoute({ name: 'Sections' })"
                >مدوناتنا</routerLink
              >
            </li>
          </ul>
        </div>
        <!--  -->
        <div class="footer__other-link">
          <h4>بعض الروابط</h4>
          <ul>
            <li>
              <routerLink
                active-class="s"
                exact-active-class="ss"
                :to="$i18nRoute({ name: 'Sections' })"
                >سياسه الخصوصيه</routerLink
              >
            </li>
            <li>
              <routerLink
                active-class="s"
                exact-active-class="ss"
                :to="$i18nRoute({ name: 'Sections' })"
                >الشروط والاحكام</routerLink
              >
            </li>
            <li>
              <routerLink
                active-class="s"
                exact-active-class="ss"
                :to="$i18nRoute({ name: 'Sections' })"
                >اسئله شائعه</routerLink
              >
            </li>
            <li>
              <routerLink
                active-class="s"
                exact-active-class="ss"
                :to="$i18nRoute({ name: 'Sections' })"
                >تواصل معنا</routerLink
              >
            </li>
          </ul>
        </div>
        <!--  -->
        <div class="footer__download">
          <h4>تحميل من هنا</h4>
          <ul>
            <li>
              <a href="#">apple ios</a>
              <GSvg nameIcon="apple" title="apple" />
            </li>
            <li>
              <a href="#">google play</a>
              <GSvg nameIcon="android" title="android" />
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <div class="footer__copyright">
        <p>تصميم وبرمجه كل الحقوق محفوظه @ {{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
//
.footer {
  @include addTheme("background-color", second);
  margin-top: 100px;

  //
  &__wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  //
  &__info {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    border-top: 1px solid #03608e10;
    padding: 2rem 0;

    //
    @include BreakPoint("tablet-p") {
      > * {
        flex-basis: calc(98% / 2);
        margin-bottom: 2rem;
      }
    }

    @include BreakPoint("phone") {
      > * {
        flex-basis: 100%;
      }
    }

    //
    h4 {
      @include addTheme("color", fifth);
      @include addFontSize(map-get($font-size, 24));
      margin-bottom: 3.2rem;

      @include BreakPoint("tablet-l") {
        margin-bottom: 0.5rem;
      }
    }

    a {
      @include addFontSize(map-get($font-size, 18));
      @include addTheme("color", fourtenth);
      font-weight: 300;
    }

    li {
      padding: 0.7rem 0;
    }
  }

  //
  &__contact {
    //
    &__logo {
      margin-top: 3rem;
      width: 12.2rem;
      height: 12.2rem;

      //
      img {
        width: 100%;
        height: 100%;
      }
    }

    //
    &__social__media {
      display: flex;
      align-items: center;
      margin-top: 3rem;

      //
      li {
        margin: 0 1rem;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  //
  &__download {
    //
    ul {
      direction: rtl;
    }

    //
    li {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 194px;
      height: 50px;
      border-radius: 5px;
      @include addTheme("background-color", eighth);
      padding: 0 3rem;
      transition: background-color 0.5s ease;
      cursor: pointer;

      //
      @media (hover: hover) {
        &:hover {
          background-color: rgba(map-get($themes, eighth), 0.9);
        }
      }

      //
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }

      //
      &:first-of-type {
        margin-bottom: 1.9rem;
      }

      //
      a {
        @include addTheme("color", second);
        text-transform: capitalize;
      }
    }
  }

  //
  &__copyright {
    padding: 2rem 0;
    border-top: 1px solid #03608e10;
    @include addFontSize(map-get($font-size, 18));
    @include addTheme("color", fourtenth);
    text-align: center;
    font-weight: 300;
  }
}
</style>
