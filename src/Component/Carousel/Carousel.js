import React from "react";
import "./Carousel.css"
import HeaderImg from "../Images/quality.png"
function Carousel() {

 
  return (
    <div className="container mt-5 pb-5">
      <div className="d-flex pb-5">
        <div className="col-md-3 CarouselAsideBer">
          <h1 className =" text-center">Mission</h1>
          <ul style = {{lineHeight: "2rem" , }}>
              <li style = {{listStyleType:"number"}}>  Secure product quality as per customer demand</li>
              <li style = {{listStyleType:"number"}}>  Maintain functionality of routine & Requirement.</li>
              <li style = {{listStyleType:"number"}}>  Sustain on high quality standard.</li>
              <li style = {{listStyleType:"number"}}>  Ensure safe & Secure quality work.</li>
              <li style = {{listStyleType:"number"}}> Make sure the most precise work.</li>
          </ul>
        </div>

        <div className=" col-md-6 ">
          <div
            id="carouselExampleIndicators"
            class="carousel slide rounded"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="d-block w-100" alt="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="d-block w-100" alt="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
              </div>
              <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" class="d-block w-100" alt="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-3 CarouselAsideBer2">
          <h1 className = "text-center">Vision</h1>
          <ul style ={{lineHeight:"2rem"}}>
              <li style = {{listStyleType:"number"}}> Stablish zero defect Method</li>
              <li style = {{listStyleType:"number"}}> No Stop Order</li>
              <li style = {{listStyleType:"number"}}> No Customer Claim</li>
              <li style = {{listStyleType:"number"}}> Create Best Quality Standard</li>
              <li style = {{listStyleType:"number"}}> Be an Idol on Quality</li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 pt-5">
          <img style ={{width:"95%"}} src={HeaderImg} alt="img" />
      </div>
    </div>
  );
}

export default Carousel;
