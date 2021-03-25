<template>
  <section class="section change blog">
    <!--  -->
    <div class="section__wrapper container">
      <div class="section__head">
        <h2>مدوناتنا</h2>
        <p class="blog__subtitle">اقتراحات للقراءة</p>
      </div>
      <!--  -->
      <div class="section__all-cards">
        <!--  -->
        <CardBlog v-for="slide in 6" :key="slide" />
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
import CardBlog from "@/components/CardBlog";
//
export default {
  name: "Blog",
  components: {
    CardBlog,
  },
};
</script>

<style lang="scss">
.blog {
  @include addTheme("background-color", second);

  //
  p {
    @include addTheme("color", sixth);
    @include addFontSize(map-get($font-size, 30));
  }

  //
  &__card {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0px 0px 15px #0000001a;

    //
    &__wrapper {
      padding: 1rem 2rem;
    }

    //
    &__image {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    //
    &__info {
      //
      h3 {
        @include addTheme("color", twelveth);
        @include addFontSize(map-get($font-size, 18));
        margin: 1rem 0;
      }

      //
      p {
        @include addTheme("color", tenth);
        @include addFontSize(map-get($font-size, 16));
        font-weight: 300;
      }
    }

    //
    &__other {
      display: flex;
      @include addTheme("color", sixth);
      margin: 2rem 0;

      //
      > p {
        display: flex;
        align-items: center;
        @include addFontSize(map-get($font-size, 16));
        font-weight: 300;
      }

      span {
        margin: 0 0.5rem;
        display: block;
      }

      //
      svg {
        width: 13px;
        height: 13px;
        margin-top: 3px;
      }
    }

    //
    &__date {
      margin: 0 1rem;
    }

    //
    &__share {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 4.7rem;
      height: 4.7rem;
      border-radius: 50%;
      top: 15px;
      right: 15px;
      @include addTheme("background-color", first);
      cursor: pointer;

      //
      svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    }

    //
    button {
      @extend %btn;
      width: 9.5rem;
      height: 3.7rem;
      @include addTheme("background-color", first);
      @include addFontSize(map-get($font-size, 16));
      margin: 3rem 0;
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
}
</style>
