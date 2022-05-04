<template>
  <!-- Container -->
  <div class="container">
    <!-- Skill -->
    <section class="skill">
      <!-- Row -->
      <div class="row">
        <!-- Col -->
        <div class="col-12 col-md-6">
          <!-- Hard skills -->
          <div class="hard-skills">
            <h2>Hard skills:</h2>
            <!-- Row -->
            <div class="row row-cols-3">
              <!-- Col -->
              <div v-for="(singleSkill, index) in listSkills" :key="index" class="col">
                <!-- Single skill -->
                <div class="single-skill">
                  <i :class="singleSkill.icon"></i>
                  <!-- Title -->
                  <div class="title">
                    {{singleSkill.name}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Col -->
        <div class="col-12 col-md-6">
          <!-- Soft skills -->
          <div class="soft-skills">
            <h2>Soft skills:</h2>
            <p>Self-reflection, Integration skills, Communication skills, Teamwork skills, Analytical skills, Organizational skills, Problem solving skills, Stress resistance.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data() {
    return {
      listSkills: [
        {
          name: 'HTML5',
          icon: 'fa-brands fa-html5'
        },
        {
          name: 'CSS3',
          icon: 'fa-brands fa-css3-alt'
        },
        {
          name: 'JAVASCRIPT',
          icon: 'fa-brands fa-js-square'
        },
        {
          name: 'SASS',
          icon: 'fa-brands fa-sass'
        },
        {
          name: 'VUE.JS',
          icon: 'fa-brands fa-vuejs'
        },
        {
          name: 'LARAVEL',
          icon: 'fa-brands fa-laravel'
        },
        {
          name: 'GITHUB',
          icon: 'fa-brands fa-github'
        },
        {
          name: 'SQL - MYSQL',
          icon: 'fa-solid fa-database'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

  // Skill
  .skill{
    width: 100%;
    height: 100vh;
    padding-top: 150px;

    // H2
    h2{
      font-size: 50px;
      font-size: 50px;
    }

    // Single skill
    .single-skill{
      padding: 10px;
      text-align: center;

      // I
      i{
        font-size: 30px;
      }

      // Title
      .title{
        text-align: center;
      }
    }
    
    // Soft skills
    .soft-skills{
      width: 70%;
    }
  }

  @media (max-width: 768px) { 
    // Skill
    .skill{
      padding-top: 100px;

      // H2
      h2{
        font-size: 40px;
      }

      // Soft skills
      .soft-skills{
        padding-top: 50px;
        
        // P
        p{
          font-size: 16px;
        }
      }
    }
  }
</style>