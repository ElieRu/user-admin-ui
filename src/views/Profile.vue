<!-- eslint-disable vue/multi-word-component-names -->
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
          <div class="row flex-column">
            <div class="col">
              <h1 class="mt-2 mb-4">Profile</h1>
            </div>
            <div class="col">
              <div class="row" style="height: 100%">
                <div class="col-12 col-md-4">
                  <div
                    class="bg-body border rounded border-0 shadow d-flex justify-content-center align-items-center mb-4"
                    style="padding: 15px; height: 250px; z-index: 1"
                  >
                    <div class="d-flex flex-column align-items-center">
                      <div
                        class="mb-3 p-1"
                        style="border-width: 2px; border-style: dashed; border-radius: 100%"
                      >
                        <img
                          class="border rounded-circle border-0"
                          src="/src/assets/img/IMG_5546f1.jpeg"
                          style="width: 100px; height: 100px"
                        />
                      </div>
                      <input
                        type="file"
                        id="profile-img"
                        style="display: none"
                        accept="image/*"
                      /><label
                        class="form-label text-light bg-primary border rounded border-0 shadow"
                        for="profile-img"
                        style="padding: 8px; padding-top: 2px; padding-bottom: 2px; cursor: pointer"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          class="text-light"
                        >
                          <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"
                          ></path></svg
                        >&nbsp; Change Photo</label
                      >
                    </div>
                  </div>
                  <div class="card shadow mb-4">
                    <div class="card-header py-3">
                      <h6 class="text-primary fw-bold m-0">Projects</h6>
                    </div>
                    <div class="card-body">
                      <h4 class="small fw-bold">
                        Server migration<span class="float-end">20%</span>
                      </h4>
                      <div class="progress progress-sm mb-3">
                        <div
                          class="progress-bar bg-danger"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 20%"
                        >
                          <span class="visually-hidden">20%</span>
                        </div>
                      </div>
                      <h4 class="small fw-bold">
                        Sales tracking<span class="float-end">40%</span>
                      </h4>
                      <div class="progress progress-sm mb-3">
                        <div
                          class="progress-bar bg-warning"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 40%"
                        >
                          <span class="visually-hidden">40%</span>
                        </div>
                      </div>
                      <h4 class="small fw-bold">
                        Customer Database<span class="float-end">60%</span>
                      </h4>
                      <div class="progress progress-sm mb-3">
                        <div
                          class="progress-bar bg-primary"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 60%"
                        >
                          <span class="visually-hidden">60%</span>
                        </div>
                      </div>
                      <h4 class="small fw-bold">
                        Payout Details<span class="float-end">80%</span>
                      </h4>
                      <div class="progress progress-sm mb-3">
                        <div
                          class="progress-bar bg-info"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 80%"
                        >
                          <span class="visually-hidden">80%</span>
                        </div>
                      </div>
                      <h4 class="small fw-bold">
                        Account setup<span class="float-end">Complete!</span>
                      </h4>
                      <div class="progress progress-sm mb-3">
                        <div
                          class="progress-bar bg-success"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 100%"
                        >
                          <span class="visually-hidden">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-8">
                  <div class="card mb-4">
                    <div class="card-header">
                      <h6>User Settings</h6>
                    </div>
                    <div class="card-body">
                      <form method="get" action="#">
                        <div class="row flex-column flex-md-row">
                          <div class="col mb-4">
                            <div class="d-flex flex-row align-items-center">
                              <input
                                class="bg-transparent border rounded form-control"
                                placeholder="First Name"
                                type="text"
                                id="name"
                                style="width: 100%"
                                name="first_name"
                              />
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="d-flex flex-row align-items-center">
                              <input
                                class="bg-transparent border rounded form-control"
                                type="text"
                                id="last_name"
                                placeholder="Last Name"
                                style="width: 100%"
                                name="last_name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <input
                            class="form-control"
                            type="email"
                            id="email"
                            placeholder="Email adress"
                            style="width: 100%"
                            name="email"
                          />
                        </div>
                        <div class="row">
                          <div class="col-6 mb-4">
                            <div class="d-flex flex-row align-items-center">
                              <input
                                class="form-control"
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div class="col-6" id="mb-4">
                            <div class="row">
                              <div class="col mb-4">
                                <div class="d-flex flex-row align-items-center">
                                  <input
                                    class="form-control"
                                    id="birthday"
                                    style="width: 100%"
                                    type="date"
                                    name="birthday"
                                    min="1"
                                    max="31"
                                    step="1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <button
                              class="btn btn-primary btn-sm link-light border-0"
                              type="submit"
                            >
                              update
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                      <h6>Change password</h6>
                    </div>
                    <div class="card-body">
                      <form method="get">
                        <div class="row flex-column">
                          <div class="col mb-4">
                            <div class="d-flex flex-row align-items-center">
                              <input
                                class="form-control"
                                type="password"
                                id="password"
                                style="width: 100%"
                                name="password"
                                placeholder="New password"
                              />
                            </div>
                          </div>
                          <div class="col mb-4">
                            <div class="d-flex flex-row align-items-center">
                              <input
                                class="form-control"
                                type="password"
                                id="password_confirmation"
                                style="width: 100%"
                                name="password_confirmation"
                                placeholder="Confirmation"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <button
                              class="btn btn-primary btn-sm link-light border-0"
                              type="submit"
                            >
                              update password
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <footer class="bg-body-tertiary d-flex mt-4" style="height: 100px; margin-top: 30px">
                <div class="container my-auto">
                  <div class="text-center my-auto copyright">
                    <span
                      ><br />Made with&nbsp;<svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                      >
                        <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                        <path
                          d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                        ></path>
                      </svg>
                      by Ruhamya Elie&nbsp;© 2024</span
                    >
                  </div>
                </div>
              </footer>
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
