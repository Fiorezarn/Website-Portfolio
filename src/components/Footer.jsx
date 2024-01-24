import { Footer } from "flowbite-react";

const FooterComponent = () => {
  return (
    <div className="w-full lg:text-center text-white px-10">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <div className="logo">
          <h1 className="text-purple-400 text-3xl font-bold mb-8">FRN.</h1>
        </div>
        <div className="flex gap-10 text-black text-end justify-end">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Skill">Skill</a>
          <a href="#Project">Project</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
      <Footer.Divider />
      <p>©2024 Fiorezarn™</p>
    </div>
  );
};

export default FooterComponent;
