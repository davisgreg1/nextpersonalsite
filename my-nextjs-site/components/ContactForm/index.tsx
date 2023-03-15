"use client";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Lottie from "react-lottie-player";
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import { FormError } from "@/components/FormError";
import * as Yup from "yup";
import Swal from "sweetalert2";
import sendPlane from "@/public/images/lottie/sendPlane.json";
import styles from "./styles.module.css";

interface SendEmailType {
  email: string;
  name: string;
  message: string;
  subject: string;
}

function ContactForm() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;

  const trimmedUserName = userName?.trim();

  const firstName = trimmedUserName?.split(" ")[0];

  const firstNameAvailable = !!firstName;
  const emailAvailable = !!userEmail;

  const schema = Yup.object().shape({
    name: Yup.string()
      .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g, {
        message: "Name must contain only letters and spaces.",
        excludeEmptyString: true,
      })
      .max(50, "Name must be less than 50 characters.")
      .required("Name is required."),
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required.")
      .nullable(),
    subject: Yup.string()
      .min(10, "Subject must be at least 10 characters.")
      .max(40, "Subject must be less than 40 characters.")
      .required("Subject is required."),
    message: Yup.string()
      .min(16, "Message must be at least 16 characters.")
      .max(1000, "Message must be less than 1000 characters.")
      .required("Message is required."),
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
            text: `${values.name}, your message was sent! I will respond as soon as possible.`,
            icon: "success",
            background: "#0d47a1",
            color: "#fff",
            customClass: {
              confirmButton: "confirm-button-class",
            },
          })
        : Swal.fire({
            title: "Oops...",
            text: `${values.name}, something went wrong! I'm on it though!`,
            background: "#0d47a1",
            color: "#fff",
            icon: "error",
            footer: "Try again, later.",
            customClass: {
              confirmButton: "confirm-button-class",
            },
          });
    } catch (error) {
      return Swal.fire({
        title: "Yikes...",
        text: `${values.name}, check your internet connection and try again.`,
        background: "#0d47a1",
        color: "#fff",
        icon: "error",
        customClass: {
          confirmButton: "confirm-button-class",
        },
      });
    }
  };

  return (
    <Formik
      initialValues={{
        name: firstNameAvailable ? trimmedUserName : "",
        email: emailAvailable ? userEmail : "",
        subject: "",
        message: "",
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, ...rest }) => {
        return (
          <>
            <Form
              id="form-element"
              className="flex flex-col w-full h-full justify-around p-4"
            >
              <div className="flex flex-col m-2">
                <motion.div
                  className="w-full"
                  animate={
                    rest.errors.email && rest.touched.email
                      ? {
                          x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
                          transition: { duration: 0.5 },
                        }
                      : {}
                  }
                >
                  <Field
                    className={`p-4 rounded-[10px] w-full ${styles.inputField}`}
                    type="email"
                    placeholder={"What's your email?"}
                    name="email"
                  />
                </motion.div>
                <ErrorMessage name="email" component={FormError} />
              </div>
              <div className="flex flex-col m-2">
                <motion.div
                  className="w-full"
                  animate={
                    rest.errors.message && rest.touched.message
                      ? {
                          x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
                          transition: { duration: 0.5 },
                        }
                      : {}
                  }
                >
                  <Field
                    className={`p-4 rounded-[10px] w-full ${styles.inputField}`}
                    component="textarea"
                    type="message"
                    placeholder="What's the message?"
                    name="message"
                  />
                </motion.div>
                <ErrorMessage name="message" component={FormError} />
              </div>
              <div className="flex flex-col m-2">
                <motion.div
                  className="w-full"
                  animate={
                    rest.errors.name && rest.touched.name
                      ? {
                          x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
                          transition: { duration: 0.5 },
                        }
                      : {}
                  }
                >
                  <Field
                    className={`p-4 rounded-[10px] w-full ${styles.inputField}`}
                    placeholder="What's your name?"
                    type="name"
                    name="name"
                  />
                </motion.div>
                <ErrorMessage name="name" component={FormError} />
              </div>
              <div className="flex flex-col m-2">
                <motion.div
                  className="w-full"
                  animate={
                    rest.errors.subject && rest.touched.subject
                      ? {
                          x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
                          transition: { duration: 0.5 },
                        }
                      : {}
                  }
                >
                  <Field
                    className={`p-4 rounded-[10px] w-full ${styles.inputField}`}
                    type="subject"
                    placeholder="What's the subject?"
                    name="subject"
                  />
                </motion.div>
                <ErrorMessage name="subject" component={FormError} />
              </div>
              <button className="m-4" type="submit" disabled={isSubmitting}>
                Send It.
              </button>
            </Form>
            {isSubmitting ? (
              <Lottie
                loop
                animationData={sendPlane}
                play
                className="absolute top-1/2"
              />
            ) : (
              ""
            )}
          </>
        );
      }}
    </Formik>
  );
}
export default ContactForm;
