<template>
  <!-- Container -->
  <div class="container">
    <!-- Contacts -->
    <section class="contacts">
      <!-- Contact link -->
      <div class="contact-link">
        <h2>Contacts:</h2>
        <!-- Contact list -->
        <div class="contact-list">
          <!-- Ul -->
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/michael-scarantino-7714a1233/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </li>
            <li>
              <a href="https://github.com/MichaelScarantino" target="_blank"><i class="fa-brands fa-github"></i></a>
              
            </li>
            <!-- Email hover -->
            <li class="email-hover">
              <i class="fa-solid fa-envelope"></i>
              <div class="email"><p>michael.scarantino.dev@gmail.com</p></div>
              <div class="email-resp"><p>michael.scarantino.dev@gmail.com</p></div>
            </li>
            <!-- Phone hover -->
            <li class="phone-hover">
              <i class="fa-solid fa-phone"></i>
              <div class="phone"><p>3408487050</p></div>
              <div class="phone-resp"><p>3408487050</p></div>
            </li>
            <!-- Location hover -->
            <li class="location-hover">
              <i class="fa-solid fa-location-dot"></i>
              <div class="location"><p>Osasco(TO)</p></div>
              <div class="location-resp"><p>Osasco(TO)</p></div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <div class="copyright">
        <p><span><i class="fa-solid fa-copyright"></i> </span> 2022 Michael Scarantino</p>
      </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',

}
</script>

<style scoped lang="scss">

  // Contacts
  .contacts{
    width: 100%;
    height: 100vh;
    text-align: center;

    // Contact link
    .contact-link{
      position: absolute;
      top: 50%;
      right: 20%;
      transform: translate(0,-50%);

      // H2
      h2{
      padding-top: 30px;
      }

      // Ul
      ul{
        display: flex;
        // Li
        li{
          padding: 10px 30px;
          cursor: pointer;
          
          // I
          i{
            font-size: 30px;
          }

          // A hover
          a:hover{
            color: inherit;
          }

          // Email Phone Location
          .email,
          .phone,
          .location{
            display: none;
            position: absolute;
            top: 100%;
            right: 50%;
            transform: translate(50%,0);
          }

          // Email Phone Location
          .email-resp,
          .phone-resp,
          .location-resp{
            display: none;
          }

        }

        // Email hover Phone-hover Location hover
        .email-hover,
        .phone-hover,
        .location-hover{
          position: relative;
        }

        .email-hover:hover .email,
        .phone-hover:hover .phone,
        .location-hover:hover .location{
          display: block;
        }
      }
    }
    
    // Copyright
    .copyright{
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%,0);
    }
    
  }

  @media (max-width: 768px) { 
    // Contacts
    .contacts{
      // Contact link
      .contact-link{
        text-align: center;
        top: 45%;
        left: 0;
        right: 0;
        margin: 0 auto;
        
        // H2
        h2{
          font-size: 30px;
        }

        // H2
        ul{
          display: inline-block;
          
          // Li
          li{
            line-height: 30px;
            text-align: center;

            // I
            i{
              font-size: 30px;
            }

            // Email resp Phone resp Location resp
            .email-resp,
            .phone-resp,
            .location-resp {
              display: block;
              font-size: 20px;
              padding-left: 10px;
            }
            // Email hover Phone-hover Location hover
              .email-resp,
              .phone,
              .location{
                display: none;
              }
          }
        }
      }
      .copyright{
        padding-bottom: 80px;
        font-size: 14px;
        text-align: left;
      }
    }
  }
  
</style>