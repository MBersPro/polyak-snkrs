import React, { useEffect, useState, useMemo } from "react";

import image1d from "./snkrs_image_1.jpg";
import image2d from "./snkrs_image_2.jpg";
import image4d from "./snkrs_image_4.jpg";
import image5d from "./snkrs_image_5.jpg";
import image1t from "./snkrs_image_1t.jpg";
import image2t from "./snkrs_image_2t.jpg";
import image3t from "./snkrs_image_3t.jpg";
import image4t from "./snkrs_image_4t.jpg";

import styles from "./Screen.module.css";

const test = {
  mobile: [image1t, image2t, image3t, image4t],
  tablet: [image1t, image2t, image3t, image4t],
  desktop: [image1d, image2d, image4d, image5d],
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
    }, 10000);
  };

  const imagesArray = useMemo(() => {
    timeout && clearInterval(timeout);
    some()
    return test[viewPort];
  }, [viewPort]);

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
