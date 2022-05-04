<template>
  <!-- Container -->
  <div class="container">
    <!-- About -->
    <section class="about">
      <!-- Row -->
      <div class="row flex-md-row-reverse">
        <!-- Col -->
        <div class="col-12 col-lg-6">
          <!-- About content -->
          <div class="about-content">
            <h2>
              About me:
            </h2>
            <p>Hi, I'm Michael Scarantino and I'm 27 years old. I worked for 6 years in the factory as a line worker, I have always had a passion for computer science and in recent years I have approached programming. I just finished the Boolean Master and now I'm ready to turn my passion into a real job. In my free time I practice new projects to improve my coding and I play video games. The passion for video games has accompanied me since I was a child.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
}
</script>

<style scoped lang="scss">
// About
.about{
  width: 100%;
  height: 100vh;

  
  // About content
  &-content{
    width: 80%;
    
    // H2
    h2{
      font-size: 50px;
      padding-top: 100px;
    }
  }
}

@media (max-width: 576px) { 
  // About content
  .about-content{
    width: 60%;

    // H2
    h2{
      font-size: 40px;
      padding-top: 50px;
    }
    
    // P
    p{
      font-size: 16px;
    }
  }
}
</style>