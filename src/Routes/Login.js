import React from "react";

const Login = () => {
  return (
    <div class="global-container">
      <div class="card login-form">
        <div class="card-body">
          <h3 class="card-title text-center">Log in to FastAid</h3>
          <div class="card-text">
            {/* <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Incorrect username or password.
            </div> */}
            <form className="form-login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control form-control-sm"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block btn-login">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
