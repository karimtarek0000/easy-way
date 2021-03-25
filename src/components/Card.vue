<template>
  <div class="section__card">
    <!--  -->
    <div class="section__card__image">
      <img src="@/assets/images/other1.jpg" alt="other1" />
    </div>
    <!--  -->
    <div class="section__card__info">
      <!--  -->
      <h3 class="section__card__info__title">تعلم اللغة الإنجليزية من الصفر</h3>
      <!--  -->
      <div class="section__card__info__doctor">
        <!--  -->
        <div class="section__card__info__doctor__image">
          <img src="@/assets/images/other2.jpg" alt="other2" />
        </div>
        <p>د/علياء مصطفي</p>
      </div>
      <!--  -->
      <p class="section__card__info__description">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
      </p>
    </div>
    <!--  -->
    <div class="section__card__actions">
      <!--  -->
      <slot />
      <!--  -->
      <button>اشترك</button>
    </div>
    <!--  -->
    <slot name="badge" />
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style></style>
