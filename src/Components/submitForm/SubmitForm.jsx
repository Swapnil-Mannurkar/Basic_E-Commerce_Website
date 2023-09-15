import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import "./SubmitForm.css";
import Modal from "../ui/Modal";

const SubmitForm = () => {
  return (
    <>
      <Modal>
        <Header title={"Shipping Details"} />
        <form className="shippingForm">
          <div className="contactDetails">
            <label>Name:</label>
            <input type="text" placeholder="Swapnil Mannurkar" required />
            <label>Address:</label>
            <input
              type="text"
              placeholder="Belgaum, Karnataka, Bharat"
              required
            />
            <label>Contact Number:</label>
            <input type="phone" placeholder="+91 924 223 9078" required />
          </div>
          <div className="paymentDetails">
            <label>Card Number:</label>
            <input type="text" placeholder="1234 5678 1234" required />
            <div className="paymentDetailsColumn">
              <div className="paymentDetailsRow">
                <label>Valid till:</label>
                <input type="text" placeholder="12/25" required />
              </div>
              <div className="paymentDetailsRow">
                <label>CVV:</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>
          </div>
        </form>
        <Footer type="submitForm" submit={"CONFIRM"} cancel={"BACK"} />
      </Modal>
    </>
  );
};

export default SubmitForm;
