import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="contact-1 ">
        <div className="bg-base-100 p-5 rounded">
          <h1 className="logo text-4xl">I’d love to tell your story.</h1>
          <hr className="border-primary my-2  w-2/4 mx-auto" />
          <h3 className="head text-2xl">Contact Me</h3>
        </div>
      </div>
      <div className="">
        <form action="">
          <div className="form-control mx-auto w-5/6  lg:w-2/6">
            <label className="label">
              <span className="label-text">YOUR NAME *</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">EMAIL ADDRESS *</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">PHONE</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
            />
            <p className="text-start py-2">
              WHAT TYPE OF SESSION ARE YOU LOOKING FOR?
            </p>

            <span className="flex justify-start py-2">
              <input type="radio" value='Engagement'   name="radio-1" className="radio" checked />
              <p className="px-2">Engagement</p>
            </span>
            <span className="flex justify-start py-2">
              <input type="radio" value='Fashion/Lifestyle' name="radio-1" className="radio" checked />
              <p className="px-2">Fashion/Lifestyle</p>
            </span>
            <span className="flex justify-start py-2">
              <input type="radio" value='Family' name="radio-1" className="radio" checked />
              <p className="px-2">Family</p>
            </span>
            <span className="flex justify-start py-2">
              <input type="radio" value='Maternity' name="radio-1" className="radio" checked />
              <p className="px-2">Maternity</p>
            </span>
            <span className="flex justify-start py-2">
              <input type="radio" value='Graduation' name="radio-1" className="radio" checked />
              <p className="px-2">Graduation</p>
            </span>

            <label className="label">
              <span className="label-text">MESSAGE *</span>
            </label>
            <textarea className="textarea textarea-bordered w-full h-24" placeholder="Message"></textarea>
            <input className="btn my-5" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
