import React from "react";
import HeaderImg from "../Images/documentsImg/slogan.png"
import policy from "../Images/documentsImg/policy.png"
import "./Slogan.css"
import MD_Signature from "../Images/bgImg/signature.png"
function Slogan() {
  return (
    <div style={{marginTop:"10%"}}>
      <div className="sloganWrap container text-dark ">
      <div className="sixSteps col-md-5">
        <div className="title">
        <h1>6 Step Towards</h1>
        </div>
        <h4>Success</h4>
        <div className="">
          <ul>
           
            <li>
              <div className="">
              When you change your Thinking, Change your beliefs.
              </div>
            </li>

            <li>
              <div className="">
              When you change your beliefs, Change your expectation.
              </div>
            </li>

            <li>
              <div className="">
              When you Change your expectation, Change your attitude.
              </div>
            </li>

            <li>
              <div className="">             
                When you change your attitude, Change your behavior. 
              </div>
            </li>

            <li>
              <div className="">
              When you change your behavior, Change your performance.
              </div>
            </li>
            <li>
              <div className="">
                When you change your performance, Change your Life.
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div className="qualityPolicy col-md-7 d-flex justify-content-center px-4  ">
        <div style={{borderBottom:"3px solid black",borderRadius:"10px"}} className="bg-white px-2 ">
        <div style={{borderBottom:"3px solid black"}} className=" d-flex justify-content-center">
         <div className="pt-3">
            <h1>কোয়ালিটি পলিসি</h1>
         </div>
        </div>
        <div style={{borderBottom:"6px solid black"}} className="d-flex justify-content-center">
        
         <h1>Quality Policy</h1>
        
        </div>
        <div className="pt-3">
          <p>আমরা কে,সি লিঞ্জারী লিঃ দীর্ঘস্থায়ী গুনগত ব্যবস্থাপনা পদ্ধতি বাস্তবায়ন ও ক্রমবিকাশ সাধনে দৃঢ় প্রতিজ্ঞ।</p>
          <p>(We, at K.C Lingerie Ltd, are committed to implement and continually improve the quality management system)</p>
          <div className="policyOption">
            <p>এ লক্ষ্য অর্জন করার জন্যঃ</p>
            <p>We plan to achieve this by:</p>
            <div className="">
              <ul>
               <li>
                 <div className="">
                   <p>ক্রেতার চাহিদা ও প্রত্যাশাগুলো সম্পর্কে অবগত হব ও তা সম্পূর্নভাবে মেটাব। </p>
                   <p>(Seeking out customer’s needs and expectation and meeting our customer requirement to the extent)</p>
                 </div>
               </li>
               <li>
                 <div className="">
                   <p>আমাদের উৎপাদনশীলতা বাড়াব ও খরচ কমাব। </p>
                   <p>Improving productivity & reducing costs)</p>
                 </div>
               </li>
               <li>
                 <div className="">
                   <p>কর্মীদের প্রশিক্ষন ও জ্ঞানদান সহ প্রয়োজনীয় উপকরন যোগান দেব।</p>
                   <p>(providing necessary resources including knowledge and training to employees) </p>
                 </div>
               </li>
               <li>
                 <div className="">
                   <p>সংশ্লিষ্ট কর্মকান্ডে সকলকে জড়িত করব। </p>
                   <p>(Involving people at all levels) </p>
                 </div>
               </li>
               <li>
                 <div className="">
                   <p>  নিরাপত্তা, সাস্থ্য ও পরিবেশ সংরক্ষনে উচ্চমান বজায় রাখব। </p>
                   <p>(Maintaining high standard of safety, health and environment)</p>
                 </div>
               </li>
              </ul>
              <div className="d-flex justify-content-end">
                <img style={{marginTop:"-3rem"}} src={MD_Signature} alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      <div style={{ marginTop: "2rem" }} className="p-4">
      <img className="w-100" src={HeaderImg} alt="" />
      </div>
    
    </div>
  );
}

export default Slogan;
