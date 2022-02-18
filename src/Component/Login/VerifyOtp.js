import React from "react";
import { useForm } from "react-hook-form";

function VerifyOtp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      console.log(data, "this is data");
  };

  console.log(watch("example"));
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center ">
        <div style={{width:"30em"}} className=" border  border-secondary  p-3 rounded">
            <div className="">
                <img style={{width:"100%"}} src="https://storecdn.webkul.com/wysiwyg/mega-menu/Website-otp.png" alt="otp img" />
            </div>
          <h3>Please enter your One Time <br /> Password</h3>
          <p>
            You entered the correct PIN or password.But now you also need to
            enter a valid One Time Password as the second factor.
          </p>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span className="text-danger">**</span>}
              <input style={{border:"1px solid darkGray",outline:'none'}} className="w-100 rounded p1 bg-transparent text-white "  {...register("exampleRequired", { required: true })} placeholder="enter your otp code" />
              
                <br /> <br />
            <div className="d-flex justify-content-center">
                <div className="">
                <input className="w-100 btn btn-primary" type="submit" />
                </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
