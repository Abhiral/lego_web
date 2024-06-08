{
  /*import React, { useState } from "react";

import "../Contact2/Contact.css";
import { useFormik } from "formik";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

export const Contact1 = () => {
  const [buttonState, setButtonState] = useState("Send Message");
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    //we have created our initailValues object in a format EmailJS accepts
    initialValues: {
      name: "", //user name
      email: "", //email id of the admin
      country: "", // country of email
      phone: "", // user email
      message: "", // message of email
    },
    validationSchema: Yup.object({
      name: Yup.string().required("* Name field is required"),
      country: Yup.string().required("* country field is required"),

      phone: Yup.string()
        .required("required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "too short")
        .max(10, "too long"),
      email: Yup.string()
        .email("Invalid email address")
        .required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
      emailjs
        .send(
          "service_4e60zhn",
          "template_hinv3ph",
          values,
          "YCwPsqqGmbCQ_UCq0"
        )

        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });
  return (
    <form className="formcontact" onSubmit={formik.handleSubmit}>
      <div className="row contactform">
        <input
          id="name"
          name="name"
          type="text"
          className="form-control-6"
          autoComplete="off"
          placeholder="YOUR NAME"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <div
          className={`expandable ${
            formik.touched.name && formik.errors.name ? "show" : ""
          }`}
        >
          {formik.errors.name}
        </div>

        <input
          id="country"
          name="country"
          type="text"
          autoComplete="off"
          placeholder="country"
          className="form-control-6"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
        <div
          className={`expandable ${
            formik.touched.country && formik.errors.country ? "show" : ""
          }`}
        >
          {formik.errors.country}
        </div>
      </div>

      <label htmlFor="phone" />
      <input
        id="phone"
        type="phone"
        name="phone"
        className="form-control"
        placeholder="YOUR num"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <div
        className={`expandable ${
          formik.touched.phone && formik.errors.phone ? "show" : ""
        }`}
      >
        {formik.errors.phone}
      </div>

      <input
        id="email"
        type="email"
        name="email"
        className="form-control"
        placeholder="YOUR EMAIL"
        autoComplete="off"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <div
        className={`expandable ${
          formik.touched.email && formik.errors.email ? "show" : ""
        }`}
      >
        {formik.errors.email}
      </div>

      <textarea
        id="message"
        name="message"
        placeholder="YOUR MESSAGE"
        autoComplete="off"
        className="form-control"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <div
        className={`expandable ${
          formik.touched.message && formik.errors.message ? "show" : ""
        }`}
      >
        {formik.errors.message}
      </div>

      <div className="col-12">
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className="btn main-btn"
        >
          <span>{buttonState}</span>
        </button>
      </div>
      <div className="col-12 form-message">
        <span
          id="output"
          className="output_message text-center text-uppercase"
        />
      </div>
    </form>
  );
};
*/
}
