import React from "react";
import HeaderImg from "../Images/documentsImg/slogan.png"
import policy from "../Images/documentsImg/policy.png"
function Slogan() {
  return (
    <div>
      <div className="">
        <img className= "w-100 h-75 p-5 -b-1"  src={policy} alt="policy" />
      </div>
      <div style={{ marginTop: "2rem" }} className="p-4">
      <img className="w-100" src={HeaderImg} alt="" />
      </div>
    
    </div>
  );
}

export default Slogan;
