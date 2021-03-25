<template>
  <section class="section change other-courses">
    <!--  -->
    <div class="section__wrapper container">
      <div class="section__head">
        <h2>فيديوهات مميزه</h2>
        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
      </div>
      <!--  -->
      <div class="section__all-cards">
        <Card v-for="count in 6" :key="count">
          <div class="section__card__actions__mony">
            <del>500 S.R</del>
            <p>300 S.R</p>
          </div>

          <div slot="badge" class="section__card__badge">
            <p>25</p>
            <p>may</p>
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
import Card from "@/components/Card";
//
export default {
  name: "Videos",
  components: {
    Card,
  },
};
</script>

<style lang="scss">
.other-courses {
  @include addTheme("background-color", second);
}
</style>
