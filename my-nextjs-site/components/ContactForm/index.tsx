"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

interface SendEmailType {
  email: string;
  name: string;
  message: string;
  subject: string;
}

function ContactForm() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, {
        message: "Name must contain only letters and spaces",
        excludeEmptyString: true,
      })
      .max(40)
      .required("Name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required.")
      .nullable(),
    subject: Yup.string()
      .min(10, "Field must be 4 characters or more.")
      .max(40, "Field must be 40 characters or less.")
      .required("Subject is required."),
    message: Yup.string().max(1000).min(16).required("Message is required."),
  });

  const handleSubmit = async (
    values: SendEmailType,
    { resetForm }: FormikHelpers<SendEmailType>
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      resetForm(); // Reset the form values to their initial state

      return data.text === "OK"
        ? Swal.fire({
            title: "Thank you!",
            text: "I received your message and will get back to you as soon as possible.",
            icon: "success",
            background: "#0d47a1",
            color: "#fff",
            customClass: {
              confirmButton: "confirm-button-class",
            },
          })
        : Swal.fire({
            title: "Oops...",
            text: "Something went wrong!",
            background: "#0d47a1",
            color: "#fff",
            icon: "error",
            footer: "Try again.",
            customClass: {
              confirmButton: "confirm-button-class",
            },
          });
    } catch (error) {
      return Swal.fire({
        title: "Yikes...",
        text: "Something went wrong!",
        background: "#0d47a1",
        color: "#fff",
        icon: "error",
        footer: "Try again.",
        customClass: {
          confirmButton: "confirm-button-class",
        },
      });
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form
          id="form-element"
          className="flex flex-col w-full h-full justify-around"
        >
          <div className="flex flex-col m-2">
            <Field
              className="p-4 rounded-[10px]"
              type="email"
              placeholder="What's your email?"
              name="email"
            />
            <ErrorMessage
              className="m-1 text-red-500"
              name="email"
              component="div"
            />
          </div>
          <div className="flex flex-col m-2">
            <Field
              className="p-4 rounded-[10px]"
              component="textarea"
              type="message"
              placeholder="What's the message?"
              name="message"
            />
            <ErrorMessage
              className="m-1 text-red-500"
              name="message"
              component="div"
            />
          </div>
          <div className="flex flex-col m-2">
            <Field
              className="p-4 rounded-[10px]"
              placeholder="What's your name?"
              type="name"
              name="name"
            />
            <ErrorMessage
              className="m-1 text-red-500"
              name="name"
              component="div"
            />
          </div>
          <div className="flex flex-col m-2">
            <Field
              className="p-4 rounded-[10px]"
              type="subject"
              placeholder="What's the subject?"
              name="subject"
            />
            <ErrorMessage
              className="m-1 text-red-500"
              name="subject"
              component="div"
            />
          </div>

          <button className="mt-8" type="submit" disabled={isSubmitting}>
            Send It.
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
