import './home.css';
import QRCode from 'qrcode.react';
import { useParams } from 'react-router-dom';

const Generate = () => {
  const { data } = useParams(); // Get the data from the route parameter

  return (
    <div className='info-code'>
      <h2>Your Generated Information QR Code</h2>
      <QRCode value={data} size={150} /> {/* Display the QR code */}
      <p>Scan the QR code to retrieve the information.</p>
    </div>
  );
};

export default Generate;
