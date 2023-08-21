import React from "react";

interface ContactInformationProps {
  data: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address1: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    websites?: string[];
  };
}

const ContactInformation: React.FC<ContactInformationProps> = ({ data }) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    address1,
    address2,
    city,
    state,
    zip,
    websites,
  } = data;

  return (
    <React.Fragment>
      <h2>Contact Information</h2>
      <p className="full-name">
        <strong>Name:</strong> {firstName} {lastName}
      </p>
      <p className="phone-number">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="email-address">
        <strong>Email:</strong> {email}
      </p>
      {/* <p className="address-block">
        <strong>Address:</strong> {address1}
        {address2 && `, ${address2}`}
        {city && `, ${city}`}
        {state && `, ${state}`}
        {zip && `, ${zip}`}
      </p> */}
      {websites && (
        <div className="website-block">
          <strong>Websites:</strong>
          <ul>
            {websites.map((website, index) => (
              <li key={index}>
                <a href={website}>{website}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default ContactInformation;
