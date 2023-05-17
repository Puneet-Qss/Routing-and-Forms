import React, { useEffect, useState } from "react";
import MainNavigation from "../components/MainNavigation";
import Footer from "./Footer";

export const Contact = () => {
  const [intial, setinitial] = useState();

  const mySubmit = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e, item) => {
    setinitial({...intial,[item]: e.target.value});
  };


  useEffect(() => {
    console.log(intial);
  });

  //  approach -2
  // [e.target.name]: e.target.value,
  // [e.target.male]: e.target.value,
  // [e.target.female]: e.target.value,
  // [e.target.country]: e.target.value,

  return (
    <>
      <div>
        <MainNavigation />
        
        <h3>Contact Page</h3>
        <form onSubmit={mySubmit}>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            onChange={(e) => {
              changeHandler(e, "name");
            }}
          />
          <br></br>
          <label htmlFor="test">Country:</label>
          <select
            name="country"
            style={{ color: "black" }}
            id="test"
            onChange={(e) => {
              changeHandler(e, "country");
            }}
          >
            <option style={{ color: "black" }} value="India">
              India
            </option>
            <option style={{ color: "black" }} value="USA">
              USA
            </option>
          </select>
          <br></br>
          <label htmlFor="css">Gender : </label>
          <input
            type="radio"
            id="css"
            name="gender"
            value="Male"
            onChange={(e) => {
              changeHandler(e, "gender");
            }}
          />
          Male
          <input
            type="radio"
            id="css"
            name="gender"
            value="Female"
            onChange={(e) => {
              changeHandler(e, "gender");
            }}
          />
          Female
          <br></br>
          <label htmlFor="message">Your message : </label>
          <textarea
            cols="20"
            rows="6"
            name="message"
            onChange={(e) => {
              changeHandler(e, "your message");
            }}
          ></textarea>
          <br></br>
          <br></br>
          <button style={{ color: "black" }} type="submit">
            Submit here
          </button>
        </form>
        <Footer />
      </div>
    </>
  );
};
export default Contact;
