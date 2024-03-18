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
          <div class="row d-block" style="height: 100%">
            <div class="col">
              <h1 class="mt-2 mb-4">User</h1>
              <div class="card">
                <div class="card-header">
                  <h6>New user</h6>
                </div>
                <div class="card-body">
                  <form method="post">
                    <div class="row">
                      <div class="col">
                        <div>
                          <div class="row flex-column flex-md-row">
                            <div class="col mb-4">
                              <div
                                class="d-flex flex-row align-items-center"
                              >
                                <input
                                  class="bg-transparent form-control"
                                  type="text"
                                  placeholder="First Name"
                                  id="first_name"
                                  style="width: 100%; outline: none; color: black"
                                  name="first_name"
                                />
                              </div>
                            </div>
                            <div class="col mb-4">
                              <div
                                class="d-flex flex-row align-items-center"
                              >
                                <input
                                  class="bg-transparent form-control"
                                  type="text"
                                  placeholder="Last Name"
                                  id="last_name"
                                  style="width: 100%; outline: none; color: black"
                                  name="last_name"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            class="d-flex flex-row align-items-center mb-4"
                          >
                            <input
                              class="bg-transparent form-control"
                              type="email"
                              placeholder="Email"
                              id="email"
                              style="width: 100%; outline: none; color: black"
                              name="email"
                            />
                          </div>
                          <div class="row">
                            <div class="col-12 col-md-6 mb-4">
                              <div
                                class="d-flex flex-row align-items-center"
                              >
                                <input
                                  class="bg-transparent form-control"
                                  type="password"
                                  placeholder="Password"
                                  id="password"
                                  style="width: 100%; outline: none; color: black"
                                  name="password"
                                />
                              </div>
                            </div>
                            <div class="col-12 col-md-6 mb-4">
                              <div
                                class="d-flex flex-row align-items-center"
                              >
                                <input
                                  class="bg-transparent form-control"
                                  type="password"
                                  placeholder="Confirmation"
                                  id="password_confirmation"
                                  style="width: 100%; outline: none; color: black"
                                  name="password_confirmation"
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
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="bg-body border rounded border-0" style="padding-bottom: 1px">
                <div class="justify-content-between align-items-center"></div>
                <h1 class="mt-4 mb-4">Team</h1>
                <div class="card">
                  <div class="card-header">
                    <h6>Employee infos</h6>
                  </div>
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <form class="d-none d-sm-flex">
                        <div class="d-flex align-items-center form-outline">
                          <label
                            class="form-label"
                            style="margin-right: 4px; margin-top: 10px"
                            for="display"
                            >Show</label
                          ><select class="shadow-none form-select form-select-sm" id="display">
                            <option value="15" selected="">15</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="all">Display all</option>
                          </select>
                        </div>
                      </form>
                      
                        <div class="d-flex flex-row align-items-center">
                          <input class="form-control border-none" placeholder="Search" type="search" id="search" />
                        </div>

                    </div>
                    <div class="table-responsive" style="overflow: inherit">
                      <table class="table table-striped table-hover table-borderless">
                        <thead>
                          <tr>
                            <th id="cell_id">#</th>
                            <th id="cell_name">Name</th>
                            <th class="d-none d-sm-table-cell" id="cell_cat">Email Adress</th>
                            <th class="d-none d-md-table-cell" id="cell_spec">Birthday</th>
                            <th class="d-none d-lg-table-cell" id="cell_price">Phone Number</th>
                            <th class="d-none d-lg-table-cell" id="cell_price-1">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                class="fs-2"
                              >
                                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"
                                ></path>
                              </svg>
                            </td>
                            <td class="text-capitalize">
                              <a class="link-body-emphasis link-opacity-75" href="#">John Doe</a>
                            </td>
                            <td class="text-lowercase d-none d-sm-table-cell">
                              johndoe01@gmail.com
                            </td>
                            <td class="text-capitalize d-none d-md-table-cell">1/1/1998</td>
                            <td class="text-capitalize d-none d-lg-table-cell">
                              (+243) 09 787 556
                            </td>
                            <td class="text-capitalize d-lg-table-cell">
                              <div class="dropdown">
                                <button
                                  class="btn btn-primary link-primary bg-transparent shadow-none"
                                  aria-expanded="false"
                                  data-bs-toggle="dropdown"
                                  type="button"
                                  style="padding-top: 6px"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-32 0 512 512"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    class="text-body-emphasis"
                                  >
                                    <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                                    <path
                                      d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
                                    ></path>
                                  </svg>
                                </button>
                                <div class="dropdown-menu" style="overflow: hidden">
                                  <a class="dropdown-item" href="#">Update</a
                                  ><a class="dropdown-item" href="#">Delete</a
                                  ><a class="dropdown-item" href="/profile">Show profile</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <nav
                      class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers"
                    >
                      <ul class="pagination">
                        <li class="page-item disabled">
                          <a class="page-link" aria-label="Previous" href="#"
                            ><span aria-hidden="true">«</span></a
                          >
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" aria-label="Next" href="#"
                            ><span aria-hidden="true">»</span></a
                          >
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <footer
                class="bg-body-tertiary d-flex sticky-footer"
                style="height: 100px; margin-top: 30px"
              >
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
