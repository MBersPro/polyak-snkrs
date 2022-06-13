import React, { useEffect, useState, useMemo } from "react";

import image1d from "./snkrs_image_1.jpg";
import image2d from "./snkrs_image_2.jpg";
import image3d from "./snkrs_image_3.jpg";
import image4d from "./snkrs_image_4.jpg";
import image5d from "./snkrs_image_5.jpg";

import styles from "./Screen.module.css";

const test = {
  mobile: [image4d],
  tablet: [image5d],
  desktop: [image1d, image2d, image3d],
};

let timeout = null;

const Screen = ({ children, viewPort }) => {
  const [bgImage, setBgImage] = useState(test[viewPort][0]);
  //const [imagesArray, setImagesArray] = useState();

    const some = () => {
    let count = 0;
      timeout = setInterval(() => {
      setBgImage(imagesArray[count % imagesArray.length]);
      count += 1;
    }, 3000);
  };

  const imagesArray = useMemo(() => {
    timeout && clearInterval(timeout);
    some()
    return test[viewPort];
  }, [viewPort]);



  // useEffect(() => {
  //   some()
  //   return () => {
  //     clearInterval(timeout);
  //   };
  // }, []);

  return (
    <div
      className={styles.screen}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
};

export default Screen;
