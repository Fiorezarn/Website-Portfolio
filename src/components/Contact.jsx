import {
  Label,
  TextInput,
  FloatingLabel,
  Textarea,
  Button,
} from "flowbite-react";
import React, { useRef } from "react";
import { HiMail } from "react-icons/hi";
import { MdSubject } from "react-icons/md";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

if (typeof window !== "undefined") {
  injectStyle();
}

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.elements.user_name.value;
    const email = e.target.elements.user_email.value;

    const templateParams = {
      user_name: name,
      user_email: email,
    };

    emailjs
      .sendForm(
        "fioreza_gmail",
        "template_i8jeqa3",
        form.current,
        "Tv-Aaxh-QwjikrTjQ",
        templateParams
      )
      .then(
        (result) => {
          toast("Message Sent 🚀", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <ToastContainer />
      <div
        className="lg:h-screen w-full pt-20 px-6 lg:px-28 mb-10 xl:mb-0 xl:pt-0 lg:mb-0"
        id="Contact"
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <h1 className="font-bold md:text-center text-center lg:text-left">
              <span className="text-purple-400">Let`s chat</span>
              <br />
              Tell me about your <br /> project.
            </h1>
            <p className="mt-6 text-center lg:text-left md:text-center">
              Let`s create something together✨
            </p>
            <div className="mt-10 mb-10 px-4 w-64 py-1 backdrop-blur-sm bg-white/30 rounded-xl flex gap-4 mx-auto lg:mx-0">
              <Icon className="text-3xl mt-3" icon="skill-icons:gmail-light" />
              <div className="my-1">
                <p className="text-gray-100">Mail me at:</p>
                <a href="mailto:fiorezarn@gmail.com">fiorezarn@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="bg-white w-full lg:h-full rounded-xl">
            <h1 className="text-black font-bold text-2xl px-10 py-10 lg:mt-4">
              Send me a message🚀
            </h1>
            <div className="py-8 lg:py-10 px-10">
              <form ref={form} onSubmit={sendEmail}>
                <FloatingLabel
                  variant="outlined"
                  label="Your Name"
                  type="text"
                  name="user_name"
                  required
                />
                <div className="my-2">
                  <Label htmlFor="comment" value="Subject" />
                </div>
                <TextInput
                  id="subject"
                  type="subject"
                  icon={MdSubject}
                  placeholder="Subject"
                  name="subject"
                  required
                />
                <div className="my-2">
                  <Label htmlFor="comment" value="Email" />
                </div>
                <TextInput
                  id="email4"
                  type="email"
                  icon={HiMail}
                  rightIcon={HiMail}
                  placeholder="name@gmail.com"
                  name="user_email"
                  required
                />
                <div className="mt-2">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" />
                  </div>
                  <Textarea
                    id="comment"
                    name="message"
                    placeholder="Leave a message..."
                    required
                    rows={4}
                  />
                  <div className="mt-5">
                    <Button
                      gradientMonochrome="purple"
                      type="submit"
                      value="Send"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
