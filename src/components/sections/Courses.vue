<template>
  <section class="section change courses">
    <!--  -->
    <div class="section__wrapper container">
      <div class="section__head">
        <h2>الكورسات المجانية</h2>
        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
      </div>
      <!--  -->
      <div class="section__all-cards">
        <Card v-for="count in 6" :key="count">
          <!--  -->
          <div class="section__card__actions__mony">
            <p>مجانا</p>
          </div>
          <!--  -->
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
  name: "Courses",
  components: {
    Card,
  },
};
</script>

<style lang="scss">
.courses {
  @include addTheme("background-color", seventh);
}
</style>
