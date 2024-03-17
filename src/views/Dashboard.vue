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
          <div class="d-sm-flex justify-content-between align-items-center mt-2 mb-4">
            <h1 class="text-dark mb-0">Dashboard</h1>
            <a class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#"
              ><i class="fas fa-download fa-sm text-white-50" style="margin-right: 9px"></i
              >&nbsp;Generate Report</a
            >
          </div>
          <div class="row">
            <div class="col-md-6 col-xl-4 mb-4">
              <div class="card shadow border-start-primary py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col me-2">
                      <div class="text-uppercase text-primary fw-bold text-xs mb-1">
                        <span>Earnings (monthly)</span>
                      </div>
                      <div class="text-dark fw-bold h5 mb-0"><span>$40,000</span></div>
                    </div>
                    <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4 mb-4">
              <div class="card shadow border-start-success py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col me-2">
                      <div class="text-uppercase text-success fw-bold text-xs mb-1">
                        <span>Earnings (annual)</span>
                      </div>
                      <div class="text-dark fw-bold h5 mb-0"><span>$215,000</span></div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-12 col-xl-4 mb-4">
              <div class="card shadow border-start-info py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col me-2">
                      <div class="text-uppercase text-info fw-bold text-xs mb-1">
                        <span>Tasks</span>
                      </div>
                      <div class="row g-0 align-items-center">
                        <div class="col-auto">
                          <div class="text-dark fw-bold h5 mb-0 me-3"><span>50%</span></div>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm">
                            <div
                              class="progress-bar bg-info"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="width: 50%"
                            >
                              <span class="visually-hidden">50%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="text-primary fw-bold m-0">Projects</h6>
                </div>
                <div class="card-body">
                  <h4 class="small fw-bold">Server migration<span class="float-end">20%</span></h4>
                  <div class="progress mb-4">
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
                  <h4 class="small fw-bold">Sales tracking<span class="float-end">40%</span></h4>
                  <div class="progress mb-4">
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
                  <h4 class="small fw-bold">Customer Database<span class="float-end">60%</span></h4>
                  <div class="progress mb-4">
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
                  <h4 class="small fw-bold">Payout Details<span class="float-end">80%</span></h4>
                  <div class="progress mb-4">
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
                  <div class="progress mb-4">
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
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="text-primary fw-bold m-0">Todo List</h6>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="row align-items-center no-gutters">
                      <div class="col me-2">
                        <h6 class="mb-0"><strong>Lunch meeting</strong></h6>
                        <span class="text-xs">10:30 AM</span>
                      </div>
                      <div class="col-auto">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="formCheck-1" /><label
                            class="form-check-label"
                            for="formCheck-1"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row align-items-center no-gutters">
                      <div class="col me-2">
                        <h6 class="mb-0"><strong>Lunch meeting</strong></h6>
                        <span class="text-xs">11:30 AM</span>
                      </div>
                      <div class="col-auto">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="formCheck-2" /><label
                            class="form-check-label"
                            for="formCheck-2"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row align-items-center no-gutters">
                      <div class="col me-2">
                        <h6 class="mb-0"><strong>Lunch meeting</strong></h6>
                        <span class="text-xs">12:30 AM</span>
                      </div>
                      <div class="col-auto">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="formCheck-3" /><label
                            class="form-check-label"
                            for="formCheck-3"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <div class="card text-white bg-primary shadow">
                    <div class="card-body">
                      <p class="m-0">Primary</p>
                      <p class="text-white-50 small m-0">#4e73df</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card text-white bg-success shadow">
                    <div class="card-body">
                      <p class="m-0">Success</p>
                      <p class="text-white-50 small m-0">#1cc88a</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card text-white bg-info shadow">
                    <div class="card-body">
                      <p class="m-0">Info</p>
                      <p class="text-white-50 small m-0">#36b9cc</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card text-white bg-warning shadow">
                    <div class="card-body">
                      <p class="m-0">Warning</p>
                      <p class="text-white-50 small m-0">#f6c23e</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card text-white bg-danger shadow">
                    <div class="card-body">
                      <p class="m-0">Danger</p>
                      <p class="text-white-50 small m-0">#e74a3b</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card text-white bg-secondary shadow">
                    <div class="card-body">
                      <p class="m-0">Secondary</p>
                      <p class="text-white-50 small m-0">#858796</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="bg-body-tertiary d-flex" style="height: 100px; margin-top: 30px">
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
    MyNotice,
    MyNavbar,
    MyMenu
  },
  mounted() {
    this.my_router = router.currentRoute.value.name
  }
}
</script>
