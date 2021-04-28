import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { login, authenticate } from '../Helper/Enpoints/Endpoints';

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

const Login = props => {
  const [seller, setSeller] = useState(props.location.state?.seller || 0);

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: ''
    },
    validationSchema,
    onSubmit: ({ phoneNumber, password }) => {
      login({ phoneNumber, password, seller }).then(response => {
        if (response.error) {
          formik.setErrors({ phoneNumber: 'Mobile and password do not match' });
          return;
        }
        authenticate(response, () => {
          props.history.push({
            pathname: `/dashboard`
          });
        });
      });
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
                <label htmlFor="exampleInputPhoneNumber">Mobile</label>
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
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={formik.handleChange} className="form-control form-control-sm" id="password" />
              </div>
              <div>
                <div>
                  <input value={!seller} onChange={() => setSeller(seller => !seller)} checked={!seller} type="checkbox" /> I know a supplier.
                </div>
                <div>
                  <input value={seller} onChange={() => setSeller(seller => !seller)} checked={seller} type="checkbox" /> I am a Supplier.
                </div>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
