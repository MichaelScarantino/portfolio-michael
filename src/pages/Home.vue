<template>
    <!-- Container --> 
    <div class="container align-items-stretch">
        <!-- Home -->
        <section class="home">
            <!-- Row -->
            <div class="row flex-column">
                <!-- Col -->
                <div class="col">
                    <!-- Home content -->
                    <div id="details-1" class="home-content d-flex align-items-center align-items-md-end justify-content-center justify-content-md-end">
                        <!-- Home text -->
                        <div class="home-text">
                            <h1>Michael Scarantino</h1>
                            <p>Full Stack Web Developer</p>
                        </div>
                            
                    </div>
                </div>
                <!-- Col -->
                <div class="col">
                    <!-- Details -->
                    <div id="details" class="details d-md-flex d-none align-items-end justify-content-md-around">
                        <!-- Single detail -->
                        <div class="single-detail">
                            Web Sites
                        </div>
                        <!-- Single detail -->
                        <div class="single-detail">
                            Web Apps
                        </div>
                        <!-- Single detail -->
                        <div class="single-detail">
                            Responsive Design
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {
    },
}
</script>

<style scoped lang="scss">
// Home
.home{
    width: 100%;
    height: 100vh;

    // Home content
    &-content{
        height: 50vh;

        // H1
        h1 {
        font-size: 90px;
        letter-spacing: -2px;
        }
        // P
        p{
            display: block;
            font-size: 18px;
            padding-left: 8px;
            
        }
        
    }
    // Details
    .details{
            width: 100%;
            height: 50vh;
            padding-bottom: 30px;
            
            // Single detail
            .single-detail{
                border: 3px solid white;
                width: 200px;
                height: 50px;
                text-align: center;
                line-height: 50px;
            }
        }
}
@media (max-width: 992px) { 
    // Home content
    .home-content{
        text-align: left;
        
        // H1
        h1{
            padding-top: 15px;
            font-size: 40px;
        }

        // P
        p{
            width: 100%;
            padding-left: 2px;
        }
    }
}

@media (max-width: 767px) { 
    // Home content
    .home-content{
        height: 100vh;
        text-align: center;

        // H1
        h1{
            padding-top: 15px;
            font-size: 40px;
        }

        // P
        p{
            width: 100%;
            padding-left: 2px;
        }
    }
}

</style>