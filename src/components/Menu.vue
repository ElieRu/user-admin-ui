<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="call-menu-navbar">
      <div class="offcanvas-header">
        <div class="d-flex justify-content-end"
          style="margin-bottom: 5px;border-radius: 15px;/*padding: 10px;*/width: 100%;"><button
            class="btn btn-primary link-body-emphasis bg-transparent shadow-none" type="button"
            style="padding: 0px;padding-right: 10px;padding-left: 10px;padding-top: 7px;padding-bottom: 7px;"
            data-bs-target="#call-menu-navbar" data-bs-toggle="offcanvas"><svg xmlns="http://www.w3.org/2000/svg"
              width="1em" height="1em" viewBox="0 0 24 24" fill="none" class="fs-2 text-light-emphasis">
              <path
                d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                fill="currentColor"></path>
            </svg></button></div>
      </div>
      <div class="offcanvas-body d-flex flex-column pt-0">
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item"><a :class="this.my_router === 'dashboard' ? activate : desable" aria-current="page"
              href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em"
                fill="currentColor" class="me-2">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z">
                </path>
              </svg>&nbsp;Dashboard</a></li>
          <li class="nav-item"><a :class="this.my_router === 'table' ? activate : desable" href="/table"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor"
                class="me-2">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z">
                </path>
              </svg>&nbsp;table</a></li>
          <li class="nav-item"><a :class="this.my_router === 'blank_page' ? activate : desable" href="/blank-page"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor"
                class="me-2">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M448 64H64C28.63 64 0 92.63 0 128v256c0 35.38 28.62 64 64 64h384c35.38 0 64-28.62 64-64V128C512 92.63 483.4 64 448 64zM160 368H80C71.13 368 64 360.9 64 352v-16C64 327.1 71.13 320 80 320H160V368zM288 352c0 8.875-7.125 16-16 16H192V320h80c8.875 0 16 7.125 16 16V352zM448 224c0 17.62-14.38 32-32 32H96C78.38 256 64 241.6 64 224V160c0-17.62 14.38-32 32-32h320c17.62 0 32 14.38 32 32V224z">
                </path>
              </svg>&nbsp;Blank page</a></li>
          <li class="nav-item"><a :class="this.my_router === 'not_found' ? activate : desable" href="/404"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor"
                class="me-2">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z">
                </path>
              </svg>&nbsp;Page not found</a></li>
          <li class="nav-item"><a :class="this.my_router === 'profile' ? activate : desable" href="/profile"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor"
                class="me-2">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z">
                </path>
              </svg>&nbsp;Profile</a></li>
          <li class="nav-item"><a class="nav-link text-capitalize link-body-emphasis" href="/signin"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor"
                class="me-2">
                <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256V32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V256zM80 256C80 353.2 158.8 432 256 432C353.2 432 432 353.2 432 256C432 201.6 407.3 152.9 368.5 120.6C354.9 109.3 353 89.13 364.3 75.54C375.6 61.95 395.8 60.1 409.4 71.4C462.2 115.4 496 181.8 496 255.1C496 388.5 388.5 496 256 496C123.5 496 16 388.5 16 255.1C16 181.8 49.75 115.4 102.6 71.4C116.2 60.1 136.4 61.95 147.7 75.54C158.1 89.13 157.1 109.3 143.5 120.6C104.7 152.9 80 201.6 80 256z">
                </path>
              </svg>&nbsp;Desconnect</a></li>
        </ul>
      </div>
    </div>
  </template>
  
  
  <script>
  
  export default {
  
    data() {
      return {
        desable: 'nav-link text-capitalize link-body-emphasis'
      }
    },
  
    props: ['my_router'],
  
    mounted() {
      console.log(this.my_router);
    },
  
    computed: {
      activate() {
        return 'nav-link active text-capitalize shadow-sm'
      }
    }
  
  
  }
  
  </script>