import React from "react";
import "./WidgetContent.css";
import imge1 from ".././assets/imge1.jpg";
import image2 from ".././assets/image2.jpg";
import image3 from ".././assets/image3.jpg";
import image4 from ".././assets/image4.jpg";
import image5 from ".././assets/image5.jpg";
import image6 from ".././assets/image6.jpg";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src={imge1}
          alt="img"
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src={image2}
          alt="img"
        />
        <div className="widget__contentTitle">
          <h5>Quota of Quotes</h5>
          <p>Daily dosage of unforgettable lines from ...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src={image3}
          alt="img"
        />
        <div className="widget__contentTitle">
          <h5>Art & Artist</h5>
          <p>A Space retated to creating, practicing an...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src={image4}
          alt="img"
        />
        <div className="widget__contentTitle">
          <h5>Friedrich Nietzche</h5>
          <p>A Space dedicated to great work of Friedrich...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src={image5}
          alt="img"
        />
        <div className="widget__contentTitle">
          <h5>Stock Market Strategies</h5>
          <p>Everything about investing in Stock...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src={image6}
          alt="img"
        />
        <div className="widget__contentTitle">
          <h5>Architecture World</h5>
          <p>All about civil architecture...</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;