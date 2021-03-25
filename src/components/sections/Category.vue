<template>
  <section class="section">
    <!--  -->
    <div class="section__wrapper container">
      <div class="section__head">
        <h2>فئة الدورات</h2>
        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
      </div>
      <!-- Navbar -->
      <NavbarSelectCategory />
      <!--  -->
      <div class="section__all-cards">
        <Card v-for="count in 6" :key="count">
          <div class="section__card__actions__mony">
            <del>500 S.R</del>
            <p>300 S.R</p>
          </div>
        </Card>
      </div>
      <!-- View all -->
      <!--  -->
      <BtnPrimary
        namePage="Sections"
        class="section__view__all"
        text="شاهد الكل"
      />
    </div>
  </section>
</template>

<script>
import NavbarSelectCategory from "@/components/sections/NavbarSelectCategory";
import Card from "@/components/Card";
//
export default {
  name: "Category",
  components: {
    NavbarSelectCategory,
    Card,
  },
};
</script>

<style lang="scss">
//
.section {
  margin-top: 5rem;
  @include addTheme("background-color", seventh);
  padding: 2rem 0;

  //
  &__head {
    text-align: center;
    margin: 2rem 0 4rem 0;

    //
    h2 {
      @include addTheme("color", third);
      @include addFontSize(map-get($font-size, 35));
    }

    p {
      @include addFontSize(map-get($font-size, 16));
      @include addTheme("color", sixth);
      margin-top: 1rem;
      font-weight: 300;
    }
  }

  //
  &__all-cards {
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;

    //
    > * {
      flex: 0 1 calc(95% / 3);
      margin-bottom: 3rem;

      @include BreakPoint("tablet-p") {
        flex: 0 1 calc(95% / 2);
      }

      @include BreakPoint("phone") {
        flex: 0 1 100%;
      }
    }
  }

  //
  &__card {
    position: relative;
    border-radius: 5px;
    box-shadow: 0px 1px 9px #8181812e;
    overflow: hidden;

    //
    &__image {
      width: 100%;

      //
      img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

    //
    &__info {
      @include addTheme("background-color", second);
      padding: 2rem;

      //
      &__title {
        @include addTheme("color", fourth);
        @include addFontSize(map-get($font-size, 20));
        font-weight: 500;
      }

      //
      &__doctor {
        display: flex;
        align-items: center;
        margin-top: 1rem;

        //
        &__image {
          width: 49px;
          height: 49px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 1px 1px 3px #0000001a;
          overflow: hidden;

          //
          img {
            max-width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        p {
          @include addFontSize(map-get($font-size, 16));
          @include addTheme("color", fifth);
          margin: 0 1rem;
        }
      }

      &__description {
        @include addTheme("color", sixth);
        @include addFontSize(map-get($font-size, 16));
        font-weight: 300;
        margin-top: 1rem;
      }
    }

    //
    &__actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include addTheme("background-color", second);
      padding: 1rem 2rem 4rem 2rem;

      //
      &__mony {
        display: flex;
        align-items: center;

        p {
          @include addTheme("color", first);
          @include addFontSize(map-get($font-size, 18));
          font-weight: 500;
        }

        del {
          @include addTheme("color", sixth);
          @include addFontSize(map-get($font-size, 14));
          margin: 0 1rem;
        }
      }

      //
      button {
        @extend %btn;
        width: 9.5rem;
        height: 3.7rem;
        @include addTheme("background-color", first);
        @include addFontSize(map-get($font-size, 16));
        // padding: 0.5rem 3rem;
        border-radius: 5px;
        font-weight: 300;

        //
        @media (hover: hover) {
          &:hover {
            background-color: rgba(map-get($themes, first), 0.9);
          }
        }
      }
    }

    //
    &__badge {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      top: 10px;
      left: 10px;
      width: 6.2rem;
      height: 6.2rem;
      @include addTheme("background-color", first);
      @include addTheme("color", second);
      border-radius: 50%;
      @include addFontSize(map-get($font-size, 16));
      border: 1px solid white;
      font-weight: 300;

      p {
        &:nth-of-type(2) {
          margin-top: -5px;
        }
      }
    }
  }

  //
  &__view__all {
    width: 18rem;
    height: 5.8rem;
    border-radius: 5px !important;
    @include addTheme("background-color", first);
    @include addFontSize(map-get($font-size, 18));
    margin: 3rem auto;
    box-shadow: 0px 10px 30px #ff27373d;
    font-weight: 300;

    //
    @media (hover: hover) {
      &:hover {
        background-color: rgba(map-get($themes, first), 0.9);
      }
    }
  }
}
</style>
