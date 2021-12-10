import React from 'react'
import "./Gallery.css"
import agaton from "./Gallery_img/Set/agaton.png"
import alberts from "./Gallery_img/Set/alberts.png"
import alice from "./Gallery_img/Set/alice.png"
import ella from "./Gallery_img/Set/ella.png"
import Ellen from "./Gallery_img/Set/Ellen.png"
import friend from "./Gallery_img/Set/friend.png"
import short from "./Gallery_img/Set/short.png"
import saraRashgurd from "./Gallery_img/Set/saraRashgurd.png"


import basicBoxer from "./Gallery_img/Single/basicBoxer.png"
import basicBrief from "./Gallery_img/Single/basicBrief.png"
import saga from "./Gallery_img/Single/saga.png"
import swimsuit from "./Gallery_img/Single/swimsuit.png"
import bikiniBottom from "./Gallery_img/Single/bikiniBottom.png"
import swimsuit2 from "./Gallery_img/Single/swimsuit2.png"
import bikiniSet from "./Gallery_img/Single/bikiniSet.png"
import swimsuit3 from "./Gallery_img/Single/swimsuit3.png"


function Gallery() {
    return (
        <div>
             <div className="mainContainer">
    <div class="slides">
      <img src={agaton} alt=""/>
      <img src={alberts} alt=""/>
      <img src={alice} alt=""/>
      <img src={Ellen} alt=""/>
      <img src={ella} alt=""/>
      <img src={friend} alt=""/>
      <img src={short} alt=""/>
      <img src={saraRashgurd} alt=""/>
      <img src={short} alt=""/>
      <img src={saraRashgurd} alt=""/>
    </div>
  </div>
  <br />
             <div className="mainContainer">
    <div class="slides">
      <img src={basicBoxer} alt=""/>
      <img src={basicBrief} alt=""/>
      <img src={saga} alt=""/>
      <img src={swimsuit} alt=""/>
      <img src={bikiniBottom} alt=""/>
      <img src={swimsuit2} alt=""/>
      <img src={swimsuit3} alt=""/>
      <img src={bikiniSet} alt=""/>
      <img src={swimsuit3} alt=""/>
      <img src={bikiniSet} alt=""/>
    </div>
  </div>
        </div>
    )
}

export default Gallery
