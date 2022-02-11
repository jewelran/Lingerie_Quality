import React from "react";

function NotificationCard(props) {
  const { _id, description, time, provider, title } = props.info;

  return (
    <div>
      <div data-aos="fade-left"
     data-aos-duration="2000" className="col-md-12   text-center pt-4 container mb-5 d-flex justify-content-aground align-items-center">
        <div
          style={{ boxShadow: "#a39e9e 0px 9px 20px 10px", height: "auto" }}
          className="col-md-6 text-start rounded justify-content-center, align-items-center p-3 "
        >
          <div className="">
            <h4>{provider}</h4>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
