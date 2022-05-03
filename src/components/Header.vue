<template>
    <!-- Header -->
    <header>
        <!-- Container Fluid -->
        <div class="container">
            <!-- Row -->
            <div class="row align-items-center">
                <!-- Col -->
                <div class="col">
                    <!-- Header Logo -->
                    <div class="header-logo d-flex justify-content-end">
                        <img src="../assets/img/michael-logo-piccolo.png" alt="Logo Michael">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "Header",
};
</script>

<style scoped lang="scss">
@import "../style/general";
    // Header
    header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 30px 0;
        z-index: 1;
        
        // Heade logo img
        .header-logo img{
            min-width: 70px;
            width: 90px;
            margin-left: 30px;
        }
    }
</style>
