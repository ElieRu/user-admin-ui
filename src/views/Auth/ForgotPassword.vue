<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center"
    style="width: 100%; height: 100%; position: absolute"
  >
    <div>
      <div class="card">
        <div class="card-body" style="width: 400px">
          <h4 class="card-title">Forgot your password?</h4>
          <hr />
          <div>
            <p style="font-size: 14px">
              <span style="color: rgb(75, 86, 107)"
                >Change your password in three easy steps. This helps to keep your new password
                secure.</span
              >
            </p>
            <ol>
              <li style="font-size: 14px">
                <span style="color: rgb(75, 86, 107)">Fill in your email address below.</span>
              </li>
              <li style="font-size: 14px">
                <span style="color: rgb(75, 86, 107)">We'll email you a temporary code.</span>
              </li>
              <li style="font-size: 14px">
                <span style="color: rgb(75, 86, 107)"
                  >Use the code to change your password on our secure website.</span
                >
              </li>
            </ol>
          </div>
          <form>
            <div class="row flex-column">
              <div class="col mb-4">
                <div class="d-flex flex-row align-items-center ">
                  <input
                    class="form-control"
                    type="email"
                    id="email"
                    style="width: 100%"
                    name="email"
                    placeholder="Email Adress"
                  />
                </div>
                <span class="d-flex align-items-center text-danger" style="font-size: 13px"
                  >&nbsp;Incorrecte form</span
                >
              </div>
              <div class="col">
                <button class="btn btn-primary mb-3" type="submit" style="width: 100%">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
