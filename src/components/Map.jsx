import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4344792877882!2d3.3007843726183865!3d6.466514609536091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b89247704b75b%3A0x4f06804985124132!2sMile%202%2C%2023B%20Ondo%20Cl%2C%20Amuwo%20Odofin%20Estate%2C%20Lagos%20102102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716679272449!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{border: "0"}}
        allowFullScreen=""
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
        className=" w-full"
      ></iframe>
    </div>
  );
};

export default Map;

