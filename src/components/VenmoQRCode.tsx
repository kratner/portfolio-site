// VenmoQRCode.tsx
import React from "react";
// import QRCode from "react-qr-code";
import QRCode from "qrcode.react";

interface VenmoQRCodeProps {
  venmoUsername: string;
  amount: number;
}

const VenmoQRCode: React.FC<VenmoQRCodeProps> = ({ venmoUsername, amount }) => {
  // Format the data for the Venmo QR code
  const venmoQRData = `venmo://paycharge?txn=pay&recipients=${venmoUsername}&amount=${amount}`;

  return (
    <div>
      <QRCode value={venmoQRData} />
      {/* You can add additional styling or information here */}
    </div>
  );
};

export default VenmoQRCode;
