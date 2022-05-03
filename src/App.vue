<template>
  <!-- App -->
  <div id="app">
    <!-- Header Component -->
    <Header />
    <!-- Main -->
    <main>
        <full-page ref="fullpage" :options="options" id="fullpage">
          <!-- Section home -->
          <div id="s1" class="section margin-s1-2-3-4-5">
            <div class="animation">
              <Home/>
            </div>
          </div>
          <!-- Section about -->
          <div id="s2" class="section margin-s1-2-3-4-5">
            <div class="animation">
              <About/>
            </div>
          </div>
          <!-- Section works -->
          <div id="s3" class="section margin-s1-2-3-4-5">
            <Works/>
          </div>
          <!-- Section skill -->
          <div id="s4" class="section margin-s1-2-3-4-5">
            <Skill/>
          </div>
          <!-- Section contact -->
          <div id="s5" class="section margin-s1-2-3-4-5">
            <Contact/>
          </div>
        </full-page>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Works from './pages/Works.vue';
import Skill from './pages/Skill.vue';
import Contact from './pages/Contact.vue';


export default {
  name: "App",
  components: {
    Header,
    Home,
    About,
    Works,
    Skill,
    Contact
  },
  data: function(){
    return {
      options: {
        navigation: true,
        navigationTooltips: ['Home','About me','Works','Skills','Contact'],
        showActiveTooltip: true,
        scrollingSpeed: 150,
        afterLoad: function(origin,nextIndex){
        
          if(origin.index == 0){
            const s1 = document.getElementById('s1');
            
            s1.classList.add('animation-s1');
            s1.classList.remove('margin-s1-2-3-4-5');
          }
          if(nextIndex.index == 1){
            const s2 = document.getElementById('s2');
            s2.classList.add('animation-s2');
            s2.classList.remove('margin-s1-2-3-4-5');
          }
          if(nextIndex.index == 2){
            const s3 = document.getElementById('s3');
            s3.classList.add('animation-s1');
            s3.classList.remove('margin-s1-2-3-4-5');
          }
          if(nextIndex.index == 3){
            const s4 = document.getElementById('s4');
            s4.classList.add('animation-s1');
            s4.classList.remove('margin-s1-2-3-4-5');
          }
          if(nextIndex.index == 4){
            const s5 = document.getElementById('s5');
            s5.classList.add('animation-s1');
            s5.classList.remove('margin-s1-2-3-4-5');
          }
        }
      },
    }
  },
};
</script>

<style lang="scss">
@import "./style/general";
  // App
  #app{
    width: 100%;
    height: 100vh;
    background-image: url('./assets/img/modifica-6.png');
    background-size: contain;
    background-repeat: no-repeat;

    // Margin s1-2-3-4-5
    .margin-s1-2-3-4-5{
      margin-left: 100%;
    }
    
    // Fade in
    @keyframes fade-in{
      0%{opacity:0;}
      100%{opacity: 1;}
    }

    // Fade left
    @keyframes fade-left{
      0%{margin-left: 100%;}
      100%{margin-left: 0;}
    }
    
    // Animation s1
    .animation-s1{
      animation: fade-in 4s;
    }
    // animation s2
    .animation-s2{
      animation: fade-left 0.5s;
    }
  }

  // Fp nav fp right span
  #fp-nav.fp-right span{
    background-color: white !important;
  }

  @media (max-width: 992px) { 
    // App
    #app{
      background-image: url('./assets/img/modifica-5.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  
</style>
