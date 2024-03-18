<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="width: 100%; height: 100%; position: absolute"
  >
    <div>
      <div class="card">
        <div class="card-body" style="width: 400px">
          <h4 class="card-title">Sign up</h4>
          <form>
            <div class="row flex-column">
              <div class="col mb-4">
                <div class="d-flex flex-row align-items-center">
                  <input
                    class="form-control"
                    type="text"
                    id="namae"
                    style="width: 100%"
                    name="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="col mb-4">
                <div class="d-flex flex-row align-items-center">
                  <input
                    class="form-control"
                    type="email"
                    id="email"
                    style="width: 100%"
                    name="email"
                    placeholder="Email Adress"
                  />
                </div>
              </div>
              <div class="col mb-4">
                <div class="d-flex flex-row align-items-center">
                  <input
                    class="form-control"
                    type="password"
                    id="password"
                    style="width: 100%"
                    name="password"
                    placeholder="Password"
                  /><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -32 576 576"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    id="hidePassword"
                    style="margin-right: 8px; cursor: pointer; display: none"
                  >
                    <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
                    ></path>
                  </svg>
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
                  /><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -32 576 576"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    id="hidePasswordConf"
                    style="margin-right: 8px; cursor: pointer; display: none"
                  >
                    <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"
                    ></path>
                  </svg>
                </div>
                <span class="d-flex align-items-center text-danger" style="font-size: 13px"
                  >&nbsp;Incorrecte form</span
                >
              </div>
              <div class="col">
                <button class="btn btn-primary mb-3" type="submit" style="width: 100%">
                  Sign up
                </button>
                <div style="text-align: center">
                  <span style="font-size: 14px"
                    >You have an acount?&nbsp;<a href="/signin">Sign in</a></span
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
