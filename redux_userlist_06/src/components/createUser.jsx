import { useFormik } from "formik";
import * as Yup from "yup";
import "./Dashboard/styles.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { insertUser } from "../actions/actions";
import * as constants from "../constants/constants";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function CreateUsers() {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();
  const { id } = location.state;

  const validationSchema = Yup.object().shape({
    id: Yup.number().required("should be unique"),
    first_name: Yup.string().required("It is required"),
    last_name: Yup.string().required("It is required"),
    email: Yup.string().email("Enter correct email").required("it is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      id: id,
    },
    onSubmit: (values) => {
      setDisable(true);
      dispatch(insertUser({ ...values, avatar: constants.DEFAULTIMAGE }));

      axios
        .post("https://reqres.in/api/users", values)
        .then((value) => {
          console.log(value);
        })
        .catch((reason) => {
          console.log(reason);
          setDisable(false);
        });
    },
    validationSchema,
  });
  return (
    <div className="app">
      {/* <div>{JSON.stringify(formik)}</div> */}
      <img src={constants.DEFAULTIMAGE} alt="User Profile" className="image" />

      <form method="post">
        <input
          name="id"
          type="number"
          className="input"
          value={formik.values.id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Unique Id"
          disabled
        ></input>
        <br></br>
        {formik.errors.id && <p className="error">*{formik.errors.id}</p>}

        <input
          name="first_name"
          type="text"
          className="input"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter First Name"
        ></input>
        <br></br>
        {formik.errors.first_name && (
          <p className="error">*{formik.errors.first_name}</p>
        )}

        <input
          name="last_name"
          type="text"
          className="input"
          value={formik.values.last_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter Last Name"
        ></input>
        <br></br>
        {formik.errors.last_name && (
          <p className="error">*{formik.errors.last_name}</p>
        )}

        <input
          name="email"
          type="email"
          className="input"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter email"
        ></input>
        <br></br>
        {formik.errors.email && <p className="error">{formik.errors.email}</p>}
        <br></br>

        <button
          type="submit"
          disabled={disable}
          onClick={formik.handleSubmit}
          className="submit"
        >
          Submit
        </button>
      </form>

      <Link to="/getList">
        <button className="backbtn">Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default CreateUsers;
