/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Button from "../../utils/Button";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function PopupContact(props) {
  console.log(props.imgSrc);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const EmailRegExp =
    /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/;
  const NameRegExp = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    //we have created our initailValues object in a format EmailJS accepts
    initialValues: {
      name: "", //user name
      email: "", //email id of the admin
      company: "", // Company of email
      phone: "", // user email
      message: "", // message of email
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(NameRegExp, "Please Enter valid Name")
        .required("* Name field is required"),
      company: Yup.string().required("* Company field is required"),

      email: Yup.string()
        .matches(EmailRegExp, "Please Enter Bussiness Email")
        .email("Invalid email address")
        .required("* Email field is required"),
      message: Yup.string().max(500, "too long"),
    }),
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      console.log(values);
      emailjs
        .send(
          "contactuslegoai",
          "template_vgas58t",
          values,
          "zDx9DH3eMBukfPCv_"
        )

        .then(
          (result) => {
            toast.success("Message Sent Successfuly");
            props.updateParentState(false);
            resetForm();
          },
          (error) => {
            props.updateParentState(true);
            toast.error("Message Sent Failed");
          }
        );
    },
  });
  return (
    <div>
      <form
        className="formcontact"
        style={{ textAlign: "center" }}
        onSubmit={handleSubmit}
      >
        <div className="row g-3">
          <div className="col-sm-6">
            <input
              name="name"
              type="text"
              className="form-control"
              autoComplete="off"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            {touched.name && errors.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>
          <div className="col-sm-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder=" Bussiness Email"
              autoComplete="off"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className="row g-3">
          <div className="col-sm-6 ">
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="off"
              placeholder="Company"
              className="form-control"
              onChange={handleChange}
              value={values.company}
              onBlur={handleBlur}
            />

            {touched.company && errors.company ? (
              <p className="form-error">{errors.company}</p>
            ) : null}
          </div>

          <div className="col-sm-6">
            <PhoneInput
              name="phone"
              country={"in"}
              onChange={handleChange}
              value={values.phone}
              onBlur={handleBlur}
              inputClass="form-control"
              inputProps={{
                required: true,
              }}
            />
            {touched.phone && errors.phone ? (
              <p className="form-error">{errors.phone}</p>
            ) : null}
          </div>
        </div>

        <textarea
          rows="4"
          id="message"
          name="message"
          placeholder="Message"
          autoComplete="off"
          className="form-control"
          onChange={handleChange}
          value={values.message}
          onBlur={handleBlur}
        />
        {touched.message && errors.message ? (
          <p className="form-error">{errors.message}</p>
        ) : null}
        <button
          type="submit"
          style={{ width: "200px", fontSize: "16px", background: "#bf21ff", border:0, borderRadius:"5px",color:"#fff",padding:"10px",marginTop:"0.6rem" }}
          onClick={handleSubmit}
        >Submit</button>
      </form>
    </div>
  );
}

export default PopupContact;
