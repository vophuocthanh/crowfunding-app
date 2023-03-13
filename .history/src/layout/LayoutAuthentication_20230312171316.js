import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = (props) => {
  const { children } = props;
  return (
    <div className="w-full min-h-screen p-10 bg-lite">
      <Link to="./" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding" />
      </Link>
      <div className="w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam,
        laboriosam voluptates optio deserunt ipsa aut quidem tempora eaque odio
        cum magni iste nobis esse porro quo harum repudiandae laborum!
      </div>
    </div>
  );
};

export default LayoutAuthentication;
