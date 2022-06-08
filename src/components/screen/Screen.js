import React, { useEffect, useState } from "react";
import img1 from "./screen_bg-img2.jpg";
import img2 from "./screen_bg-img4.jpg";
import img3 from "./screen_bg-img5.jpg";

import styles from "./Screen.module.css";

const imagesArray = [img1, img2, img3];

let timeout = null;

const Screen = ({ children }) => {
  const [bgImage, setBgImage] = useState(img1);
  useEffect(() => {
    let count = 0;
    timeout = setInterval(() => {
          setBgImage(imagesArray[count % imagesArray.length]);
          count += 1;
      }, 10000);
    return () => {
        clearInterval(timeout);
    }
  }, []);

  return (
    <div className={styles.screen} style={{ backgroundImage: `url(${bgImage})` }}>
      {children}
    </div>
  );
};

export default Screen;
