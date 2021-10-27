import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'
function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  onSubmit: (values) =>{
    alert("Login Successful");
    console.log('form', values);
  },
  validate: (values) => {
    let errors = {};
    if(!values.email) errors.email = 'Username should be an email';
    if(!values.password) errors.password = 'Field required';
    return errors;

  },
});
  return (
    <div>
      <p>
        build a Formik form by James H.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input id="passwordField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        <br />
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button type="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
