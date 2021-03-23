<template>
  <main>
    <!-- Header -->
    <Header :data="dataSlider" />
  </main>
</template>

<script>
import Header from "@/components/layout/Header";
//
export default {
  name: "Home",
  data() {
    return {
      dataSlider: [
        {
          id: 1,
          linkImg: "https://i.postimg.cc/52VG4NtS/image-min.png",
        },
        {
          id: 2,
          linkImg:
            "https://i.postimg.cc/vTHQ4LXb/neonbrand-z-FSo6bn-ZJTw-unsplash.jpg",
        },
        {
          id: 3,
          linkImg: "https://i.postimg.cc/52VG4NtS/image-min.png",
        },
        {
          id: 4,
          linkImg:
            "https://i.postimg.cc/vTHQ4LXb/neonbrand-z-FSo6bn-ZJTw-unsplash.jpg",
        },
      ],
    };
  },
  components: {
    Header,
  },
};
</script>

<style></style>
