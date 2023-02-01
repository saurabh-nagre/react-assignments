import { useState } from "react";

import {useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";

import { removeUser, updateUser } from "../actions/actions";

import "./Dashboard/styles.css";

const UpdateUsers = ()=> {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state.data;

  const deleteUser = () => {
    dispatch(removeUser(data));
    setDisable(true);
  };
  const validationSchema = Yup.object().shape({
    id: Yup.number().required("should be unique"),
    first_name: Yup.string().required("It is required"),
    last_name: Yup.string().required("It is required"),
    email: Yup.string().email("Enter correct email").required("it is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      id: Number(data.id),
    },
    onSubmit: (values) => {
      setDisable(true);
      dispatch(updateUser({ ...values, avatar: data.avatar }));

      axios
        .put(
          "https://reqres.in/api/users/" + Number(data.id).toString(),
          values
        )
        .then((value) => {
          console.log(value);
          setDisable(false);
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
      <img src={data.avatar} alt="User Profile" className="image" />

      <form method="post">
        <input
          name="id"
          type="number"
          className="input"
          value={formik.values.id}
          disabled
        />
        <br/>
        {formik.errors.id && <p className="error">*{formik.errors.id}</p>}

        <input
          name="first_name"
          type="text"
          className="input"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter First Name"
        />
        <br/>
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
        />
        <br/>
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
        />
        <br/>
        {formik.errors.email && <p className="error">{formik.errors.email}</p>}
        <br/>

        <button
          type="submit"
          disabled={disable}
          onClick={formik.handleSubmit}
          className="submit"
        >
          Update
        </button>
      </form>
      <button
        disabled={disable}
        onClick={() => deleteUser()}
        className="deleteBtn"
      >
        Delete User with ID {Number(data.id)}
      </button>
      <br/>

      <button
        className="backbtn"
        onClick={() => {
          navigate("/getList");
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default UpdateUsers;
