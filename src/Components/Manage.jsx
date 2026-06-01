import React, { useState } from "react";
import "../Css/Manage.css";

import Img1 from "../assets/Manage1.jpg";
import Img2 from "../assets/Manage2.jpg";
import Img3 from "../assets/Manage3.jpg";
import Img4 from "../assets/Manage4.jpg";

const Manage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="manage-section">
      <div className="manage-left">
        <h1 className="manage-heading">
          Manage your <br /> Inventory <span>faster</span>
        </h1>
        <div className="manage-orange"></div>
      </div>

      <div
        className="manage-right"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`manage-circle left-current ${
            hovered ? "left-slide" : "" }`}
        >
          <img src={Img1} alt="" />
        </div>

        <div
          className={`manage-circle right-current ${
            hovered ? "right-fade" : "" }`}
        >
          <img src={Img2} alt="" />
        </div>

        <div
          className={`manage-circle left-new ${
            hovered ? "show-new" : ""}`}
        >
          <img src={Img3} alt="" />
        </div>

        <div
          className={`manage-circle right-new ${
            hovered ? "show-new" : ""}`}
        >
          <img src={Img4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Manage;