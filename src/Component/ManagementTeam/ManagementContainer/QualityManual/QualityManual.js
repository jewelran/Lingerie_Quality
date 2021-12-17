import React from "react";
import Footer from "../../../Footer/Footer";
import Navigation from "./../../../Navigation/Navigation";

function QualityManual() {
  return (
    <div  style={{backgroundColor:"#292d31"}} className="">
      <div className="">
        <Navigation />
        <div
          style={{
            lineHeight: "14px",
            fontFamily: "tahoma",
            maxWidth: "900px",
            marginTop:"2rem",
            borderRadius:"10px",
            Bottom:"2rem",
            marginBottom:"2rem"
          }}
          className="container bg-white text-dark p-4"
        >
          <div className="border-bottom p-5 ">
            <span>Content:-....</span>
            <p style={{ fontWeight: "bold" }}>1. Introduction</p>
            <p style={{ fontWeight: "bold" }}>2. Ambition & Future Plan. </p>
            <p style={{ fontWeight: "bold" }}>3. Quality Policy.</p>
            <p style={{ fontWeight: "bold" }}>
              4. Document controlling system.
            </p>
            <p style={{ fontWeight: "bold" }}>5. Routine & procedure.</p>
            <p style={{ fontWeight: "bold" }}>6. Sampling </p>
            <div style={{ marginLeft: "2rem" }}>
              <p>6.1. Styling Sample / Development Sample.</p>
              <p>6.2. Quotation Sample.</p>
              <p>6.3. Size set sample.</p>
              <p>6.4. Counter Sample / Pre-Production Sample.</p>
              <p>6.5. Shipment Sample.</p>
            </div>

            <div className="">
              <p style={{ fontWeight: "bold" }}>7. Before Start Production.</p>
              <div style={{ marginLeft: "2rem" }}>
                <p>7.1. Product risk Assessment.</p>
                <p>7.2. Pattern check / confirming.</p>
                <p>7.3. Pre-production Meeting.</p>
              </div>
            </div>

            <div className="">
              <p style={{ fontWeight: "bold" }}>8. Warehouse / Store.</p>
              <div style={{ marginLeft: "2rem" }}>
                <p>8. Warehouse / Store.</p>
                <p>8.2. Fabric Inspection.</p>
                <p>8.3. Shade Check.</p>
                <p>8.4. GSM Check.</p>
                <p>8.5. Shrinkage Test.</p>
                <p>8.6. Wash Test.</p>
              </div>
            </div>
            <div className="">
              <p style={{ fontWeight: "bold" }}>9. Cutting.</p>
              <div style={{ marginLeft: "2rem" }}>
                <p>9.1. Marker Inspection.</p>
                <p>9.2. Layer Inspection.</p>
                <p>9.3. Cut panel inspection.</p>
                <p>9.4. Print panel inspection.</p>
              </div>
            </div>
            <div className="">
              <p style={{ fontWeight: "bold" }}>10. Sewing.</p>
              <div style={{ marginLeft: "2rem" }}>
                <p>
                  10.1. Trail Run / 1st 20Pcs Inspection/ initial Inspection.
                </p>
                <p>10.2. In-Process Inspection / TLS System.</p>
                <p>10.3. End-table Inspection.</p>
                <p>10.4. Random Cross check.</p>
                <p>10.5. Random In-line inspection.</p>
                <p>10.6. AQL Inspection.</p>
              </div>
            </div>
            <div className="">
              <p style={{ fontWeight: "bold" }}>11. Finishing.</p>
              <div style={{ marginLeft: "2rem" }}>
                <p>11.1. Thread sucking.</p>
                <p>11.2. Random Check.</p>
                <p>11.3. Packing Audit.</p>
                <p>11.4. Hourly packing Audit.</p>
                <p>11.5. Metal detection.</p>
                <p>11.6. Ratio / shade & Routine Check.</p>
                <p>11.7. Pre-final Inspection.</p>
                <p>11.8. Final inspection.</p>
              </div>
            </div>
            <div className="">
              <p style={{ fontWeight: "bold" }}>12. Conclusion.</p>
            </div>
          </div>

    {/* page 2 */}
          <div style={{textAlign:"justify", marginTop:"2rem", padding:"2%"}} className="">
            <h5  style={{fontSize:"20px",fontWeight:"bold"}}>7. Before start production: -</h5>
            <div style={{lineHeight:"20px"}} className="">
              <h6  style={{fontSize:"16px",fontWeight:"bold"}}>7.1. Product Risk Assessment: -</h6>
              <p>We Analysis All kind of product related risk at quotation stage of sample by conduct meeting with all department head to confirm about requirements, quality, focus point, value driver, product nature, critical process & production type. We make a risk assessment report base on meeting discussion & buyer requirement to share with related peoples for ensure product quality from the beginning of a style.</p>
                <li  style={{fontSize:"16px",fontWeight:"bold"}}>⮚	Sample department head is the responsible for this meeting. </li>
            </div>

            <div className="">
              <h6>7.2. Pattern check / confirming.</h6>
              <p>This is the way to check & confirm product measurement, making methods & find out the risky technical issues & solve them before start bulk. </p>
              <p>Routine for pattern check / confirming: -</p>
             <div  style={{marginLeft:"2rem"}}>
             <p>1.	Check pattern & maker as per approved spec.</p>
              <p>2.	Cut 02pcs of each size as per marker.</p>
              <p>3.	Check cut piece with approved paper pattern.</p>
              <p>4.	Complete sewing as per technical instructions & by follow sampling foot print. </p>
              <p>5.	Measure & check complete garments as per approved spec & Counter sample. </p>
             </div>
             <p style={{lineHeight:"20px"}}>After complete measurement & check note down all kind of findings and share with all department head. Find out the corrective action plan to prevent them at early stage to secure the product quality. For any correction (measurement, cut / notch mark, way, cutting method, print or embroidery position) all department head take the decision by discuss together & fix the pattern for bulk. </p>
             <p  style={{fontSize:"16px",fontWeight:"bold"}}>⮚	All department head is responsible for this task. </p>
            </div>
            <div className="">
              <h6  style={{fontSize:"16px",fontWeight:"bold"}}>7.3. Pre-Production Meeting.</h6>
              <p  style={{lineHeight:"20px"}}>After receive all materials & Approved counter sample we arrange a pre-production meeting. The participant of this is meeting not only department heads also those people who is working at the needle point. We discuss in this meeting about technical instructions, machine adjustment, buyer comments, measurement, new construction method, special Treatments, pattern & all kind of point witch could impact on garments quality. We make a Pre-production report with all related documents & information which help us to maintain & monitor product quality as per buyer expectation in every stage of production.</p>
            </div>
            <div className="">
              <p>Routine for Pre-Production Meeting: -</p>
                <div  style={{marginLeft:"1rem"}}>
                  <p>1.	Must have to conduct for every new style. </p>
                  <p>2.	Repeat order of same season with any kind of change need to attend Pre-production meeting.</p>
                  <p>3.	Repeat order of same season without any change no need to attend pre-production meeting.</p>
                  <p>4.	Repeat order of previous season without any change need to attend pre-production meeting.</p>
                </div>
              <p style={{fontSize:"16px",fontWeight:"bold"}}>⮚	Pre-Production Co-Coordinator is the responsible for this meeting. </p>
            </div>
            <div className="">
              <h5>8. Warehouse / Store:-</h5>
              <h6>8.1. Accessories Inspection.</h6>
              <p style={{lineHeight:"20px"}}>After receiving Accessories, we inspect 10% as per packing list quantity by store quality inspector. Make report for all kind of findings during inspection & share with responsible & related people to make everyone to be alert form their stage. </p>
              <p>Routine for Accessories check: -</p>
              <div  style={{marginLeft:"2rem"}} >
                <p>1.	Take total 10% form top, middle & bottom as per packing list.</p>
                <p>2.	Check quality, shade, measurement, color, lettering, comments, care instructions, lay out, safety issues & routine.</p>
            
              </div>
              <p style={{fontSize:"16px",fontWeight:"bold"}}>⮚	Store Auditor is responsible for Accessories inspection.</p>
            </div>
          </div>
        </div>
      </div>
            <Footer/>
    </div>
  );
}

export default QualityManual;
