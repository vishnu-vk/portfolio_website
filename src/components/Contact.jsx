import React from "react";
import { Icon } from "@iconify/react";
import { icons } from "../data";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput, TextAreaInput } from "./Input";
import toast, { Toaster } from "react-hot-toast";
import { sendEmail } from "../functions";

const successNotification = () => toast.success("Message sent successfully");
const errorNotification = () => toast.error("Something Went wrong!");
const contactFormInitialValues = {
  name: "",
  email: "",
  message: "",
};
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const contactFormValidator = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(20, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .matches(emailRegex, "Invalid email")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = ({ sectionRef }) => {
  const handleSubmit = (values, actions) => {
    sendEmail(values).then(
      (res) => {
        if (res.status === 200) {
          actions.resetForm();
          successNotification();
        }
      },
      (err) => {
        actions.resetForm();
        errorNotification();
      }
    );
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="w-full flex justify-center items-center relative bg-white p-10 md:p-14 scroll-mt-[70px]"
      >
        <div className="flex flex-col md:flex-row  justify-center md:justify-between  md:items-center items-center gap-6  w-full">
          <div className="flex flex-col justify-center items-start gap-6">
            <div className="flex justify-center items-center h-[50px] gap-4">
              <Icon icon={icons.phone} color="#496363" height="35" width="35" />
              <div className="flex flex-col justify-center items-start text-[14px] font-semibold tracking-[0.165rem]">
                <span className="text-lightColor">Call</span>
                <span className="text-darkColor whitespace-nowrap">
                  +91 9744172369
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center h-[50px] gap-4">
              <Icon icon={icons.email} color="#496363" height="35" width="35" />
              <div className="flex flex-col justify-center items-start text-[14px] font-semibold tracking-[0.165rem]">
                <span className="text-lightColor">Mail</span>
                <span className="text-darkColor whitespace-nowrap">
                  vvishnu898@gmail.com
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center h-[50px] gap-4">
              <Icon
                icon={icons.location}
                color="#496363"
                height="35"
                width="35"
              />
              <div className="flex flex-col justify-center items-start text-[14px] font-semibold tracking-[0.165rem]">
                <span className="text-lightColor">Location</span>
                <span className="text-darkColor whitespace-nowrap">
                  Kerala/India
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <Formik
              initialValues={contactFormInitialValues}
              validationSchema={contactFormValidator}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form className="flex justify-center items-start sm:items-start flex-col gap-4 w-full sm:w-[400px]">
                  <TextInput
                    type="text"
                    name="name"
                    label="Name"
                    icon={icons.user}
                    placeholder="Jhon Smith"
                  />
                  <TextInput
                    type="email"
                    name="email"
                    label="Email"
                    icon={icons.email}
                    placeholder="exampl@domain.com"
                  />
                  <TextAreaInput
                    name="message"
                    label="Message"
                    icon={icons.message}
                    placeholder="Hello,......"
                  />
                  <button
                    type="submit"
                    className="p-4 bg-darkColor rounded-md text-backgroundColor shadow-md"
                    disabled={props.isSubmitting}
                  >
                    <span className="cursor-pointer text-[14px] md:text-[16px] font-semibold">
                      Sent Message
                    </span>
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <Toaster
        toastOptions={{
          success: {
            className: "tracking-[0.165rem]",
            style: {
              font: "robotoSlab",
              color: "#496363",
              backgroundColor: "#f8f9fa",
            },
            iconTheme: {
              primary: "#496363",
            },
          },
          error: {
            className: "tracking-[0.165rem]",
            style: {
              font: "robotoSlab",
              color: "#ffc8c8",
              backgroundColor: "#f8f9fa",
            },
            iconTheme: {
              primary: "#ffc8c8",
            },
          },
        }}
      />
    </>
  );
};

export default Contact;
