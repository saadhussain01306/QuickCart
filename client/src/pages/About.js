import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - QuickCart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="about us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to QuickCart, your one-stop destination for seamless and
            hassle-free online shopping. We are dedicated to bringing you a
            diverse range of products at unbeatable prices, with a commitment to
            exceptional customer service. Our platform is designed to make your
            shopping experience fast, secure, and enjoyable. Thank you for
            choosing QuickCart, where convenience meets quality.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
