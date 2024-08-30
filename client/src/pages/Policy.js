import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2>Privacy Policy</h2>
          <p>
            Welcome to QuickCart. We value your privacy and are committed to
            protecting your personal information. This privacy policy outlines
            the types of information we collect, how we use it, and the measures
            we take to safeguard your data.
          </p>
          <p>
            <strong>Information Collection:</strong> We may collect personal
            information such as your name, email address, shipping address, and
            payment details when you create an account, place an order, or
            contact us for support.
          </p>
          
          <p>Thank you for choosing QuickCart!</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
