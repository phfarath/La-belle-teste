import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/place/La+Belle+Cutanee/@-23.590952,-46.6310473,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b0009055d5b:0x7c7b39bdf68dff18!8m2!3d-23.5909569!4d-46.6284724!16s%2Fg%2F11y2n5smhw?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
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