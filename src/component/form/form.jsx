import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import QRCode from "qrcode.react"; // Library to generate QR codes

function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    sname: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const [showQRCode, setShowQRCode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

   
  const handleSubmit = (e) => {
    e.preventDefault();
    const qrData = `surnname: ${formData.sname}\n firstName:${formData.fname}\n email:${formData.email}\n phone: ${formData.phone}`;
 
    navigate(`/qr/${encodeURIComponent(qrData)}`); // URL encoding to handle special characters

  };
  return (
    <>
      <div className="form-compl">
        <h2>Rgeister to generate a QR Code with User Information</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields for user information */}
          <div className="form-i">
            <label>SurnName:</label>
            <br />
            <input
              type="text"
              name="fname"
              className="form-input"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-i">
            <label>FirstName:</label>
            <br />
            <input
              type="text"
              name="sname"
              className="form-input"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>
              Email:
              <br />
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <br />
              <input
                type="text"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <button type="submit">Generate QR Code</button>
        </form>

        {/* Display the QR code if the form has been submitted */}
        {showQRCode && (
          <div>
            <h3>Your QR Code:</h3>
            <QRCode value={qrData} size={150} /> {/* Generates the QR code */}
            <p>Scan this QR code to retrieve the user information.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
