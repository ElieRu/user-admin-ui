<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="width: 100%; height: 100%; position: absolute"
  >
    <div>
      <div class="card">
        <div class="card-body" style="width: 400px">
          <h4 class="card-title">Reset password</h4>
          <form>
            <div class="row flex-column">
              <div class="col mb-4">
                <div class="d-flex flex-row align-items-center ">
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
                <div class="d-flex flex-row align-items-center ">
                  <input
                    class="form-control"
                    type="password"
                    id="password_confirmation"
                    style="width: 100%"
                    name="passwpassword_confirmationord"
                    placeholder="Confirmation"
                  />
                </div>
                <span class="d-flex align-items-center text-danger" style="font-size: 13px"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                  >
                    <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z"
                    ></path></svg
                  >&nbsp;Incorrecte form</span
                >
              </div>
              <div class="col">
                <button class="btn btn-primary mb-3" type="button" style="width: 100%">
                  New password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
