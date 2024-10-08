import React, { useContext } from "react";
import CartPage from "./CartPage";
import { Context } from "./Applayout";

const About = () => {
  const { isCartOpen } = useContext(Context);
  return (
    <>
      <div className="w-full h-full min-h-screen bg-palette3 flex flex-col items-center justify-center px-4">
        {isCartOpen && <CartPage />}
        <div className="w-full max-w-4xl h-auto lg:h-4/5 flex items-center justify-center bg-palette9 rounded-3xl shadow-inner shadow-palette1 text-palette1 p-6 lg:p-10">
          <p className="text-palette1 w-full h-auto flex items-center justify-center text-center text-sm md:text-lg lg:text-xl leading-relaxed md:leading-loose">
            Hey there! Welcome to our e-commerce platform. I am Huzaifa Asif, a
            developer with over 2 years of experience in HTML, CSS, JavaScript,
            React, Tailwind CSS, and WordPress, currently pursuing a BS in
            Computer Science. This site was built with React.js and Tailwind
            CSS, making it fully responsive, so whether you're browsing on a
            phone, tablet, or computer, the site will always look amazing. The
            products you see here are fetched from the FakeStore API, so while
            you can view the details and explore what we have, you can't
            actually buy anything here. It’s all for demo purposes! I created
            this platform as a showcase of what’s possible with modern web
            technologies. From dynamic product listings to beautifully styled
            pages, I aimed to provide an experience that’s smooth, professional,
            and responsive. But again, don’t try adding anything to your
            cart—you won’t be checking out! Thanks for stopping by, and enjoy
            the site!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
