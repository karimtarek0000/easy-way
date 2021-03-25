<template>
  <div class="blog__card">
    <!--  -->
    <div class="blog__card__image">
      <img src="@/assets/images/other5.png" alt="other5" />
    </div>
    <!--  -->
    <div class="blog__card__wrapper">
      <div class="blog__card__info">
        <h3>عنوان المدونه</h3>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص
        </p>
      </div>
      <!--  -->
      <div class="blog__card__other">
        <p class="blog__card__count-view">
          <GSvg nameIcon="aye" title="view" />
          <span>34 مشاهدة</span>
        </p>
        <p class="blog__card__date">
          <GSvg nameIcon="clock" title="date" />
          <span>24 Jan 2019</span>
        </p>
      </div>
      <!--  -->
      <button>التفاصيل</button>
    </div>
    <!--  -->
    <div class="blog__card__share">
      <GSvg nameIcon="share" title="share" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBlog",
};
</script>

<style></style>
