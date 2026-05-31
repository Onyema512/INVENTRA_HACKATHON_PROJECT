import React, { useState } from "react";
import "../Css/Manage.css";

import Img1 from "../assets/Manage1.jpg";
import Img2 from "../assets/Manage2.jpg";
import Img3 from "../assets/Manage3.jpg";
import Img4 from "../assets/Manage4.jpg";

const Manage = () => {
  const images = [Img1, Img2, Img3, Img4];
  const [current, setCurrent] = useState(0);

  const handleHover = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="manage-section">
      <div className="manage-left">
        <h1>
          Manage your <br />
          Inventory <span>faster</span>
        </h1>
      </div>

      <div className="manage-right" onMouseEnter={handleHover}>
        <div className="manage-img large">
          <img src={images[current]} alt="" />
        </div>

        <div className="manage-img small">
          <img
            src={images[(current + 1) % images.length]}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Manage;