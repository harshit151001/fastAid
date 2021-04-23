import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, {
      message: 'Please enter a valid mobile number (10 digits)',
      excludeEmptyString: false
    })
    .min(10)
    .max(10)
    .required('Required'),
  password: Yup.string().min(6).required('Required')
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: ''
    },
    validationSchema,
    onSubmit: ({ phoneNumber, password }) => {
      console.log(phoneNumber, password);
      // action
    }
  });

  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Log in to FastAid</h3>
          <div className="card-text">
            {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {formik.errors.phoneNumber}
              </div>
            ) : null}

            <form className="form-login">
              <div className="form-group">
                <label for="exampleInputPhoneNumber">Mobile</label>
                <input id="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} placeholder="Mobile Number*" type="number" className="form-control form-control-sm" aria-describedby="contactNumber" />
              </div>
              <div style={{ marginBottom: '40px' }}>
                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" onChange={formik.handleChange} className="form-control form-control-sm" id="password" />
              </div>
              <button
                onClick={() => {
                  formik.handleSubmit();
                }}
                type="button"
                className="btn btn-primary btn-block btn-login"
              >
                Sign in
              </button>

              {/* <div className="sign-up">
                Don't have an account? <a href="#">Create One</a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
