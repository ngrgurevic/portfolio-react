import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const AoSEffect = ({ animation, children, duration }) => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <div data-aos={animation} data-aos-duration={duration}>
      {children}
    </div>

  );
}
export default AoSEffect