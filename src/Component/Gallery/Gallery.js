import React from 'react'
import "./Gallery.css"

// set1   
import albertus from "./Gallery_img/Set/albertus.png"
import allaBrif from "./Gallery_img/Set/allaBrif.png"
import dylan from "./Gallery_img/Set/dylan.png"
import ellen from "./Gallery_img/Set/ellen.png"
import fionaBikini from "./Gallery_img/Set/fionaBikini.png"
import friends from "./Gallery_img/Set/friends.png"
import friendsBrief from "./Gallery_img/Set/friendsBrief.png"
import lacePanty from "./Gallery_img/Set/lacePanty.png"
import mikeShorts from "./Gallery_img/Set/mikeShorts.png"
import sashra from "./Gallery_img/Set/sashra.png"
import shorts from "./Gallery_img/Set/shorts.png"
import sunnyStructure from "./Gallery_img/Set/sunnyStructure.png"

// set 2
import agaton from "./Gallery_img/Set2/agaton.png"
import aliceSwimsuit from "./Gallery_img/Set2/aliceSwimsuit.png"
import almaSwimsuit from "./Gallery_img/Set2/almaSwimsuit.png"
import amySwimsuit from "./Gallery_img/Set2/amySwimsuit.png"
import boboSwimsuit from "./Gallery_img/Set2/boboSwimsuit.png"
import bondiBeach from "./Gallery_img/Set2/bondiBeach.png"
import chillaBikibi from "./Gallery_img/Set2/chillaBikibi.png"
import chillaSwimuit   from "./Gallery_img/Set2/chillaSwimuit .png"
import ellaSwimsuit from "./Gallery_img/Set2/ellaSwimsuit.png"
import melissa from "./Gallery_img/Set2/melissa.png"
import nightDress from "./Gallery_img/Set2/nightDress.png"
import noaRashguard from "./Gallery_img/Set2/noaRashguard.png"


import basicBoxer from "./Gallery_img/Single/basicBoxer.png"
import basicBrief from "./Gallery_img/Single/basicBrief.png"
import saga from "./Gallery_img/Single/saga.png"
import swimsuit from "./Gallery_img/Single/swimsuit.png"
import swimsuit2 from "./Gallery_img/Single/swimsuit2.png"
import swimsuit3 from "./Gallery_img/Single/swimsuit3.png"
import swimsuit4 from "./Gallery_img/Single/swimsuit4.png"
import swimsuit5 from "./Gallery_img/Single/swimsuit5.png"
import swimsuit6 from "./Gallery_img/Single/swimsuit6.png"
import swimsuit7 from "./Gallery_img/Single/swimsuit7.png"
import swimsuit8 from "./Gallery_img/Single/swimsuit8.png"
import rashguard from "./Gallery_img/Single/rashguard.png"


function Gallery() {
    return (
        <div className='p-5 mt-5' >
          <h1 style={{fontFamily:"cursive", fontWeight:"800", color:"#0A0546", paddingBottom:"10rem",}} className='text-center'><span  style={{fontSize:"80px"}}>O</span>UR <span  style={{fontSize:"80px"}}>P</span>RODUCTS</h1>
             <div className="mainContainer">
    <div  class="slides">
      <img src={albertus} alt=""/>
      <img src={allaBrif} alt=""/>
      <img src={dylan} alt=""/>
      <img src={ellen} alt=""/>
      <img src={fionaBikini} alt=""/>
      <img src={friends} alt=""/>
      <img src={friendsBrief} alt=""/>
      <img src={lacePanty} alt=""/>
      <img src={mikeShorts} alt=""/>
      <img src={sashra} alt=""/>
      <img src={shorts} alt=""/>
      <img src={sunnyStructure} alt=""/>
    </div>
  </div>
             <div className="centerMainContainer">
    <div class="slides">
      <img src={agaton} alt=""/>
      <img src={aliceSwimsuit} alt=""/>
      <img src={almaSwimsuit} alt=""/>
      <img src={amySwimsuit} alt=""/>
      <img src={boboSwimsuit} alt=""/>
      <img src={bondiBeach} alt=""/>
      <img src={chillaBikibi} alt=""/>
      <img src={chillaSwimuit} alt=""/>
      <img src={ellaSwimsuit} alt=""/>
      <img src={melissa} alt=""/>
      <img src={nightDress} alt=""/>
      <img src={noaRashguard} alt=""/>
    </div>
  </div>
  <br />
  <div className="underMainContainer">
    <div class="slides">
      <img src={basicBoxer} alt=""/>
      <img src={basicBrief} alt=""/>
      <img src={saga} alt=""/>
      <img src={swimsuit} alt=""/>
      <img src={swimsuit2} alt=""/>
      <img src={swimsuit3} alt=""/>
      <img src={swimsuit4} alt=""/>
      <img src={swimsuit5} alt=""/>
      <img src={swimsuit6} alt=""/>
      <img src={swimsuit7} alt=""/>
      <img src={swimsuit8} alt=""/>
      <img src={rashguard} alt=""/>
    </div>
  </div>
        </div>
    )
}

export default Gallery
