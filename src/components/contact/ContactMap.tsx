import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9!2d-46.6310473!3d-23.590952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b0009055d5b:0x7c7b39bdf68dff18!2sLa%20Belle%20Cutan%C3%A9e!5e0!3m2!1sen!2sbr!4v1710000000000!5m2!1sen!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da La Belle Cutanée"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default ContactMap;