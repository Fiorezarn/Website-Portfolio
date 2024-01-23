import {
  Label,
  TextInput,
  FloatingLabel,
  Textarea,
  Button,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <>
      <div className="h-screen w-full pt-20 px-6 lg:px-28 mb-20 lg:mb-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <h1 className="font-bold">
              <span className="text-purple-400">Let`s chat</span>
              <br />
              Tell me about your <br /> project.
            </h1>
            <p className="mt-6">Let`s create something together✨</p>
            <div className="mt-10 mb-10 px-4 w-64 py-1 backdrop-blur-sm bg-white/30 rounded-xl flex gap-4">
              <Icon className="text-3xl mt-3" icon="skill-icons:gmail-light" />
              <div className="my-1">
                <p className="text-gray-100">Mail me at:</p>
                <a href="">fiorezarn@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="bg-white w-full lg:h-full rounded-xl">
            <h1 className="text-black font-bold text-2xl px-10 mt-3">
              Send me a message🚀
            </h1>
            <div className="py-10 px-10">
              <FloatingLabel variant="outlined" label="Your Name" />
              <div className="mb-2">
                <Label htmlFor="comment" value="Email" />
              </div>
              <TextInput
                id="email4"
                type="email"
                icon={HiMail}
                rightIcon={HiMail}
                placeholder="name@gmail.com"
                required
              />
              <div className="mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea
                  id="comment"
                  placeholder="Leave a message..."
                  required
                  rows={4}
                />
                <div className="mt-5">
                  <Button gradientMonochrome="purple">Send Message</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
