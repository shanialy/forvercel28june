import React from "react";
const Card = ({ smallcardData }) => {
  return (
    <div className="container">
      <div className="card-group">
        {smallcardData?.slice(0, 8).map((item) => {
          return (
            <div className="card border-0">
              <img
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  width: "150px",
                  height: "150px",
                }}
                className="card-img-top"
                src="https://shoprex.com/images/srproducts/large/men-s-sports-sweatpant-sp-01_39042.jpg"
                alt=""
              />
              <div className="card-body">
                <h6 className="card-title" style={{ textAlign: "center" }}>
                  {item.key}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
