<template>
  <section class="section videos">
    <!--  -->
    <div class="section__wrapper container">
      <div class="section__head">
        <h2>فيديوهات مميزه</h2>
      </div>
      <!--  -->
      <div class="section__all-cards">
        <CardVideo v-for="video in 6" :key="video" />
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
import CardVideo from "@/components/CardVideo";
//
export default {
  name: "Videos",
  components: {
    CardVideo,
  },
};
</script>

<style lang="scss">
.videos {
  @include addTheme("background-color", second);
  margin-top: 0;

  &__card {
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0px 1px 3px #00000021;
    cursor: pointer;

    //
    &__image {
      position: relative;
      width: 100%;
      min-height: 280px;
      height: 280px;
      @include addTheme("background-color", first);

      //
      img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        width: 100%;
      }

      &__overlay {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        @include addTheme("background-color", twelveth);
        opacity: 0.8;

        //
        div {
          text-align: center;

          //
          svg {
            width: 6.8rem;
            height: 6.8rem;
          }

          //
          p {
            @include addTheme("color", second);
            @include addFontSize(map-get($font-size, 15));
            font-weight: 300;
          }
        }
      }
    }

    //
    &__info {
      padding: 1rem 2rem;
      h3 {
        @include addTheme("color", first);
        @include addFontSize(map-get($font-size, 20));
        font-weight: 400;
      }

      p {
        @include addTheme("color", sixth);
        @include addFontSize(map-get($font-size, 16));
        font-weight: 300;
        margin-top: 1rem;
      }
    }
  }
}
</style>
