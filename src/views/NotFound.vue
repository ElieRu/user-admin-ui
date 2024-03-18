<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <body style="width: 100%;height: 100%;position: fixed;">
      
      
      <MyHeader></MyHeader>
  
      <MyNotice></MyNotice>
  
      <div class="container-fluid d-flex justify-content-center"
        style="position: fixed;height: 87%;overflow: visible;padding-right: 0px;padding-left: 0px;">
        <div class="row" style="width: 100%;/*margin: auto;*/">
          
          <MyNavbar :my_router="my_router"></MyNavbar>
  
          <div class="col-lg-9" style="overflow: auto;height: 100%;padding-top: 25px;">
  
  
  
            <div class="row d-block" style="height: 100%;">
              <div class="col">
                <div class="text-center mt-5">
                  <div class="error mx-auto" data-text="404"><img class="mb-3"
                      src="/src/assets/img/3d-casual-life-smiling-man-with-laptop-waving-hand.png"
                      style="width: 200px;height: 170px;">
                  </div>
                  <p class="text-dark mb-5 lead">Page Not Found</p>
                  <p class="text-black-50 mb-0">It looks like you found a glitch in the matrix...</p><a href="/">← Back to
                    Dashboard</a>
                </div>
              </div>
            </div>
  
  
  
          </div>
        </div>
      </div>
  
      <MyMenu :my_router="my_router"></MyMenu>
  
    </body>
  </template>
  
  <script>
  
  import MyHeader from "@/components/Header.vue"
  import MyNotice from "@/components/Notice.vue"
  import MyNavbar from "@/components/NavBar.vue"
  import MyMenu from "@/components/Menu.vue"
  import router from "@/router"
  
  export default {
    data() {
      return {
        my_router: ''
      }
    },
    components: {
      MyHeader, MyNavbar, MyNotice, MyMenu
    },
  
    mounted() {
      this.my_router = router.currentRoute.value.name
      // console.log(this.my_router);
    }
  }
  
  </script>
  