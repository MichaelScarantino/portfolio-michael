<template>
  <!-- Container -->
  <div class="container">
    <!-- Works -->
    <section class="works">
      <h2>Works:</h2>
      <!-- Row -->
      <div class="row justify-content-md-end row-cols-2 row-cols-md-4">
        <!-- Col -->
        <div v-for="(singleWork, index) in listWorks" :key="index" class="col">
          <!-- Single work -->
          <div class="single-work my-3">
            <!-- Work img -->
            <div class="work-img">
              <img :src="require(`../assets/img/` + singleWork.img)" alt="">
            </div>
            <!-- Overlay -->
            <div class="overlay">
              <!-- Row -->
              <div class="row flex-column">
                <!-- Col -->
                <div class="col">
                  <!-- Title -->
                  <div class="title">
                    <h3>{{singleWork.title}}</h3>
                  </div>
                </div>
                <!-- Col -->
                <div class="col">
                  <!-- Work description -->
                  <div class="work-description">
                    {{singleWork.description}}
                  </div>
                </div>
              </div>
              <!-- Work link -->
              <div class="work-link">
                <!-- Link -->
                <span class="link">
                  <a :href="singleWork.link" target="_blank"><i class="fa-solid fa-link"></i></a>
                </span>
              </div>
            </div>
          </div>
          <!-- Responsive -->
          <div class="responsive text-center d-lg-none">
            <!-- Resp title -->
            <div class="resp-title">
              {{singleWork.title}}
            </div>
            <!-- Resp link -->
            <div class="resp-link">
              <!-- Single link -->
              <span class="single-link">
                <a :href="singleWork.link" target="_blank"><i class="fa-solid fa-link"></i></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>

export default {
name: 'Works',
  components: {
  },
  data() {
        return{
            listWorks: [
            {
                title: 'Spotify Web',
                description: 'Spotify web replication created using Html and Css',
                img: 'spotify.png',
                link: 'https://github.com/MichaelScarantino/html-css-spotifyweb'
            },
            {
                title: 'Discord',
                description: 'Discord site replication using Html and Css',
                img: 'discord.png',
                link: 'https://github.com/MichaelScarantino/htmlcss-discord'
            },
            {
                title: 'Dc Comics',
                description: 'Reply of the Dc Comics site using Html, Css and Javascript with Laravel',
                img: 'dc-comics.png',
                link: 'https://github.com/MichaelScarantino/laravel-comics'
            },
            {
                title: 'Dropbox',
                description: 'Dropbox site replication using Html and Css',
                img: 'dropbox.png',
                link: 'https://github.com/MichaelScarantino/htmlcss-dropbox'
            },
            {
                title: 'Netflix',
                description: 'Revisited replication of the Netflix web app using Html, Css and Javascript with Vue.js',
                img: 'netflix.png',
                link: 'https://github.com/MichaelScarantino/vue-boolflix'
            },
            ]
            
        }
    }
}
</script>

<style scoped lang="scss">
// Works
.works{
  width: 100%;
  height: 100vh;
  padding: 50px 0;
  // H2
  h2{
    padding-bottom: 40px;
    font-size: 50px;
  }
  // Single work
  .single-work{
    position: relative;
    border: 4px solid white;
    cursor: pointer;

    // Overlay
    .overlay{
      width: 100%;
      height: 100%;
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.6);
      display: none;

      // Title
      .title{
        text-align: center;
      }
      // Link
      .link{
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%);
        font-size: 20px;
      }
      // Link hover
      .link:hover i{
        transform: scale(1.5);
      }
    }
   
  }
  // Single work hover
  .single-work:hover .overlay{
    display: block;
  }
  // A hover
  a:hover{
    color: inherit;
  }
  
}

@media (max-width: 768px) { 
  // Works
  .works{
    padding: 15px 40px;
    
    // H2
    h2{
      font-size: 40px;
    }
    .overlay{ 
      display: none;
    }
  }
}
</style>