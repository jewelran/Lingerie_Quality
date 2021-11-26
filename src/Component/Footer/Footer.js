import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className="bg-dark h-50">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="d-flex">
                <div className="col-md-3">
                    <h1><span style={{borderBottom:"3px solid white"}}> About</span> Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga necessitatibus quaerat corrupti commodi quisquam repudiandae nisi saepe obcaecati nemo blanditiis nostrum cumque, officia rem provident eligendi incidunt laudantium? Laborum, voluptatem blanditiis magni ut nobis assumenda delectus laboriosam excepturi id sunt expedita nam harum atque ipsam iusto vel natus magnam.</p>
                    <div className=" d-flex">
                        <button className="secondary">fb</button>
                        <button className="secondary">linkedIn</button>
                    </div>
                </div>
                <div className="col-md-3">
                <h1><span style={{textDecoration:'underline'}}>Get</span> In Touch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga necessitatibus quaerat corrupti commodi quisquam repudiandae nisi saepe obcaecati nemo blanditiis nostrum cumque, officia rem provident eligendi incidunt laudantium? Laborum, voluptatem blanditiis magni ut nobis assumenda delectus laboriosam excepturi id sunt expedita nam harum atque ipsam iusto vel natus magnam.</p>
                    <div className=" d-flex">
                        <button className="secondary">fb</button>
                        <button className="secondary">linkedIn</button>
                    </div>
                </div>
                <div className="col-md-3">
                <h1><span style={{textDecoration:'underline'}}>Useful</span> Links</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga necessitatibus quaerat corrupti commodi quisquam repudiandae nisi saepe obcaecati nemo blanditiis nostrum cumque, officia rem provident eligendi incidunt laudantium? Laborum, voluptatem blanditiis magni ut nobis assumenda delectus laboriosam excepturi id sunt expedita nam harum atque ipsam iusto vel natus magnam.</p>
                    <div className=" d-flex">
                        <button className="secondary">fb</button>
                        <button className="secondary">linkedIn</button>
                    </div>
                </div>
                <div className="col-md-3">
                <h1><span style={{textDecoration:'underline'}}>Latest</span> Projects</h1>
                   <div className="footerImgGallery">
                      <div className="d-flex">
                      <img  src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M=" alt="img" />
                       <img src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M=" alt="img" />
                      </div>
                       <div className="d-flex">
                       <img src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M=" alt="img" />
                       <img src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M=" alt="img" />
                       </div>
                   </div>
                    <div className=" d-flex">
                        <button className="secondary">fb</button>
                        <button className="secondary">linkedIn</button>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default Footer
