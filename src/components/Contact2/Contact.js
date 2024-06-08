/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Contact.css";
import Con from "./contact-png.png";
import emailjs from "@emailjs/browser";
import { Alert } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

import * as Yup from "yup";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, [showAlert]);

  const [buttonLoading, setButtonLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const validateForm = () => {
  //   const errors = {};
  //   let isValid = true;

  //   // Validate name field
  //   if (!form.current.name.value.trim()) {
  //     errors.name = "Please enter your name";
  //     isValid = false;
  //   }
  //   // Validate country field
  //   if (!form.current.country.value.trim()) {
  //     errors.country = "Please enter Country";
  //     isValid = false;
  //   }
  //   //phone number

  //   {
  //     /*if (!form.current.phone.value.trim()) {
  //     errors.phone = "Please enter your phone Number";
  //     isValid = false;
  //   } else if (
  //     /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
  //       form.current.phone.value
  //     )
  //   ) {
  //     errors.phone = "Please enter a valid phone Number";
  //     isValid = false;
  //   }
  // */
  //   }
  //   // Validate email field
  //   if (!form.current.email.value.trim()) {
  //     errors.email = "Please enter your email address";
  //     isValid = false;
  //   } else if (!/\S+@\S+\.\S+/.test(form.current.email.value)) {
  //     errors.email = "Please enter a valid email address";
  //     isValid = false;
  //   }

  //   // Validate message field
  //   if (!form.current.message.value.trim()) {
  //     errors.message = "Please enter a message";
  //     isValid = false;
  //   }

  //   setFormErrors(errors);

  //   return isValid;
  // };

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
        .matches(NameRegExp, "Full Name is not valid")
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
    onSubmit: (values) => {
      emailjs
        .send(
          "service_fy722tj",
          "template_ydj0rsg",
          values,
          "nb81b4pRLw4OKP5t2"
        )

        .then(
          (result) => {
            setAlertType("success");
            setAlertMessage("Message sent successfully!");
            setButtonLoading(false);
            setShowAlert(true);
            resetForm();
          },
          (error) => {
            setAlertType("danger");
            setAlertMessage(
              "An error occurred while sending your message. Please try again later."
            );
            setShowAlert(true);
          }
        );
    },
  });
  return (
    <div id="Contact" className="newContact">
      <h2 style={{ marginbottom: "12px" }}>Contact Us</h2>
      <div className="contact-body">

        {showAlert && (
          <div style={{ position: "relative", height: "150px", width: "100%" }}>
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
              style={{ position: "absolute", top: "172px", right: "10px" }}
            >
              {alertMessage}
            </Alert>
          </div>
        )}
        <div className="contact-form">
          {/* <div>
            <img src={Con} alt="LegoAI" loading="lazy" />
          </div> */}
          <div className="contact-info">
            <div className="contact-details">
              <span>
                <i className="fas fa-mobile-alt"></i>
              </span>
              <div>
                <span>Phone No.</span>
                <span className="text">+91-8884321107</span>
              </div>
            </div>
            <div className="contact-details">
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <div>
                <span>E-mail</span>
                <span className="text">contactus@legoai.com</span>
              </div>

            </div>
            <div className="contact-details">
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <span>Address</span>
                <span className="text">
                  91 SpringBoard,512/10,Outer Ring Rd <br/>
                  Mahadevapura,Bengaluru{" "}
                </span>
              </div>

            </div>
            {/* <div>
            <span>
              <i className="fas fa-clock"></i>
            </span>
            <span>Opening Hours</span>
            <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
  */}
          </div>

          <form className="formcontact formcontact-footer" onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-sm-6">
                <input
                  id="name"
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
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Bussiness Email"
                  autoComplete="off"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="row g-3">
              <div className="col-sm-6">
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
                {/*<Select
                  name="country"
                  placeholder="Country"
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
                  menuPortalTarget={document.body}
                  isSearchable={true}
                  value={values.selectedOption}
                  options={Countrydata}
                  onChange={(selectedOption) =>
                    setFieldValue("country", selectedOption.value)
                  }
                />
                */}
                {touched.company && errors.company ? (
                  <p className="form-error">{errors.company}</p>
                ) : null}
              </div>
              <div className="col-sm-6">
                <PhoneInput
                  isValid={(value, country) => {
                    if (value.match(/12345/)) {
                      return "Invalid value: " + value + ", " + country.name;
                    } else if (value.match(/1234/)) {
                      return false;
                    } else {
                      return true;
                    }
                  }}
                  name="phone"
                  country={"in"}
                  value={values.phone}
                  onChange={(value, country) => {
                    setFieldValue("phone", value);
                  }}
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
            <input
              type="submit"
              disabled={buttonLoading && true}
              className="send-btn"
              value={buttonLoading ? "SUBMITING" : "SUBMIT"}
            />
          </form>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.7260185349614!2d77.68705447397917!3d12.98936771449073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU5JzIxLjciTiA3N8KwNDEnMjIuNyJF!5e0!3m2!1sen!2snp!4v1681994992271!5m2!1sen!2snp"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
