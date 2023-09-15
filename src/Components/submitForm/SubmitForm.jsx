import React, { useState } from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import "./SubmitForm.css";
import Modal from "../ui/Modal";

const SubmitForm = () => {
  const [disable, setDisable] = useState(true);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [validTill, setValidTill] = useState("");
  const [cvv, setCvv] = useState("");

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "contactNumber":
        setContactNumber(e.target.value);
        break;
      case "cardNumber":
        setCardNumber(e.target.value);
        break;
      case "validTill":
        setValidTill(e.target.value);
        break;
      case "cvv":
        setCvv(e.target.value);
        break;
      default:
        break;
    }

    
    const allFieldsFilled =
    name !== "" &&
    address !== "" &&
    contactNumber !== "" &&
    cardNumber !== "" &&
    validTill !== "" &&
    cvv !== "";
    setDisable(!allFieldsFilled);
  };
  
  const handleWheel = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal>
        <Header title={"Shipping Details"} />
        <form className="shippingForm">
          <div className="contactDetails">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Swapnil Mannurkar"
              required
              value={name}
              onChange={handleInputChange}
            />
            <label>Address:</label>
            <input
              type="text"
              name="address"
              placeholder="Belgaum, Karnataka, Bharat"
              required
              value={address}
              onChange={handleInputChange}
            />
            <label>Contact Number:</label>
            <input
              type="number"
              name="contactNumber"
              placeholder="9242239078"
              required
              maxLength={10}
              value={contactNumber}
              onChange={handleInputChange}
              onWheel={handleWheel}
            />
          </div>
          <div className="paymentDetails">
            <label>Card Number:</label>
            <input
              type="number"
              name="cardNumber"
              placeholder="1234 5678 1234"
              required
              value={cardNumber}
              maxLength={12}
              onChange={handleInputChange}
              onWheel={handleWheel}
            />
            <div className="paymentDetailsColumn">
              <div className="paymentDetailsRow">
                <label>Valid till:</label>
                <input
                  type="text"
                  name="validTill"
                  placeholder="12/25"
                  required
                  value={validTill}
                  onChange={handleInputChange}
                />
              </div>
              <div className="paymentDetailsRow">
                <label>CVV:</label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  maxLength={3}
                  required
                  value={cvv}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </form>
        <Footer
          type="submitForm"
          submit={"CONFIRM"}
          cancel={"BACK"}
          disabled={disable}
        />
      </Modal>
    </>
  );
};

export default SubmitForm;
