<template>
  <div style="width: 100%; height: 100%; position: fixed">
    <MyHeader></MyHeader>

    <MyNotice></MyNotice>

    <div
      class="container-fluid d-flex justify-content-center"
      style="position: fixed; height: 87%; overflow: visible; padding-right: 0px; padding-left: 0px"
    >
      <div class="row" style="width: 100%; /*margin: auto;*/">
        <MyNavbar :my_router="my_router"></MyNavbar>

        <div class="col-lg-9" style="overflow: auto; height: 100%; padding-top: 25px">
          <div class="row d-block" style="height: 100%">
            <div class="col">
              <h1 class="mt-2 mb-4">Blank page</h1>

              <div class="dropdown" aria-labelledby="dropdownMenuButton">
                <button
                  class="btn btn-primary dropdown-toggle"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  type="button"
                ></button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">First Item</a
                  ><a class="dropdown-item" href="#">Second Item</a
                  ><a class="dropdown-item" href="#">Third Item</a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <MyMenu :my_router="my_router"></MyMenu>
  </div>
</template>

<script>
import MyHeader from '@/components/Header.vue'
import MyNotice from '@/components/Notice.vue'
import MyNavbar from '@/components/NavBar.vue'
import MyMenu from '@/components/Menu.vue'
import router from '@/router'

export default {
  data() {
    return {
      my_router: ''
    }
  },
  components: {
    MyHeader,
    MyNavbar,
    MyNotice,
    MyMenu
  },

  mounted() {
    this.my_router = router.currentRoute.value.name
  }
}
</script>
