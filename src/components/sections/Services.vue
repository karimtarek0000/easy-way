<template>
  <section class="services">
    <h2 class="services__head">{{ $t("nameSections.services") }}</h2>
    <!--  -->
    <div class="services__wrapper container">
      <!-- 1 -->
      <div class="services__info services__info--1">
        <!--  -->
        <div class="services__info__image">
          <img src="@/assets/images/child.png" alt="child" />
        </div>
        <!--  -->
        <div class="services__info__features">
          <h3>
            <span>أولاً</span>: تعلم اللغه الانجليزية من الصفر وحتى الاحتراف
          </h3>
          <p>
            <bdi>
              STEP نتميز بتعدد المستويات وتنوع الدورت بالإضافة الى اختبارات
            </bdi>
          </p>
        </div>
      </div>
      <!-- svg -->
      <svg xmlns="http://www.w3.org/2000/svg" width="684.049" height="191.5">
        <path
          data-name="Path 1"
          d="M.852 190.977s82.049-133.9 326.632-99.6S683.302.665 683.302.665"
          fill="none"
          stroke="#958f8f"
          stroke-width="2"
          stroke-dasharray="8 5"
        />
      </svg>
      <!-- 2 -->
      <div class="services__info services__info--2">
        <!--  -->
        <div class="services__info__image">
          <img src="@/assets/images/objrct.png" alt="objrct" />
        </div>
        <!--  -->
        <div class="services__info__features">
          <h3>
            <span>ثانياً</span>: سهولة التعلم من منزلك على طريقتك المناسبة لك
          </h3>
          <p>
            يمكنك التعلم عن طريق الجوال او اللابتوب وفي أي وقت بواسطة دروسنا
            المسجلة التي تتيح لك ان تدخل للدراسة في أي وقت يناسبك
          </p>
        </div>
      </div>
      <!-- svg -->
      <svg xmlns="http://www.w3.org/2000/svg" width="684.049" height="191.5">
        <path
          data-name="Path 1"
          d="M683.197 190.977s-82.049-133.9-326.632-99.6S.747.665.747.665"
          fill="none"
          stroke="#958f8f"
          stroke-width="2"
          stroke-dasharray="8 5"
        />
      </svg>
      <!-- 3 -->
      <div class="services__info services__info--3">
        <!--  -->
        <div class="services__info__image">
          <img src="@/assets/images/vector.png" alt="objrct" />
        </div>
        <!--  -->
        <div class="services__info__features">
          <h3><span>ثالثاً</span>: الشهادات</h3>
          <p>
            نقدم للمتدربين في المعهد شهادات اجتياز المستويات وفي اخر الدورة
            كاملة شهادة أيضا عبر موقعنا
          </p>
        </div>
      </div>
      <!-- Image Video -->
      <div class="services__video">
        <!--  -->
        <div class="services__video__image">
          <img src="@/assets/images/video.jpg" alt="video" />
        </div>
        <!--  -->
        <p class="services__video__par">تعلم اللغة الإنجليزية من الصفر</p>
      </div>
      <!--  -->
      <div class="services__choose__level">
        <BtnPrimary namePage="Sections" text="الانجليزية المستوي المبتدئ" />
        <BtnPrimary namePage="Sections" text="المستوى المتوسط" />
        <BtnPrimary namePage="Sections" text="المستوى المتقدم" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style lang="scss" scoped>
//
.services {
  direction: rtl;
  overflow: hidden;

  //
  &__head {
    text-align: center;
    color: map-get($themes, ninth);
    margin: 5rem 0;
    @include addFontSize(map-get($font-size, 35));
  }

  //
  svg {
    margin: 0 auto;
    display: block;

    //
    &:nth-of-type(2) {
      margin-bottom: -14rem;

      @include BreakPoint("phone") {
        margin-bottom: 0;
      }
    }

    @include BreakPoint("tablet-l") {
      transform: scale(0.5);
    }

    @include BreakPoint("phone") {
      transform: scale(0.5) translateX(50%);
    }
  }

  //
  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    //
    > * {
      flex-basis: calc(95% / 2);
    }

    &:nth-of-type(1),
    &:nth-of-type(3) {
      .services__info__image {
        order: 1;
      }

      .services__info__features {
        order: 0;
      }
    }

    &:nth-of-type(3) {
      .services__info__features {
        p {
          @include addTheme("color", tenth);
        }
      }
    }

    //
    &__image {
      width: 100%;
      img {
        height: 30vw;
      }
    }

    //
    &__features {
      //
      h3 {
        @include addFontSize(map-get($font-size, 30));
        @include addTheme("color", first);
        font-weight: 400;

        span {
          font-weight: 300;
          @include addTheme("color", fourth);
        }
      }

      //
      p {
        @include addFontSize(map-get($font-size, 18));
        @include addTheme("color", sixth);
        font-weight: 300;
        margin-top: 1.7rem;

        @include BreakPoint("tablet-l") {
          @include addFontSize(map-get($font-size, 22));
        }
      }
    }
  }

  //
  &__video {
    display: flex;
    margin-top: 5rem;
    @include addFontSize(map-get($font-size, 20));

    //
    &__image {
      order: 1;
      //
      img {
        width: 53vw;
      }
    }

    &__par {
      margin-top: 5rem;
      order: 0;
    }
  }

  //
  &__choose__level {
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    margin-top: 20px;
    //
    button {
      @include addTheme("background-color", second);
      @include addTheme("color", fifth);
      border: 1px solid #9aa0b2;
      border-radius: 5px;
      padding: 1rem 3rem;

      //
      &:nth-of-type(2) {
        margin: 0 1rem;

        //
        @include BreakPoint("phone") {
          margin: 1rem 0;
        }
      }

      //
      @include BreakPoint("phone") {
        width: 100%;
      }

      //
      @media (hover: hover) {
        &:hover {
          @include addTheme("background-color", fifth);
          @include addTheme("color", second);
        }
      }
    }
  }
}
</style>
