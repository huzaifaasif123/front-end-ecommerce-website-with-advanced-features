import React, { useContext, useState } from "react";
import CartPage from "./CartPage";
import { Context } from "./Applayout";

const Contact = () => {
  const [Fname, setFname] = useState("");
  const [Femail, setFemail] = useState("");
  const [Fmsg, setFmsg] = useState("");
  const {isCartOpen}= useContext(Context)
  return (
    <>
      <div className="w-screen h-screen bg-palette3 flex items-center justify-center">
      {isCartOpen && <CartPage/>}
        <div className="card w-2/4 h-4/5 rounded-3xl shadow-inner shadow-palette1 bg-palette8 flex flex-col items-center justify-evenly">
          <h1 className="p-3 rounded-3xl text-palette9 bg-palette1 shadow-inner shadow-palette1 hover:text-palette1 mt-4 overflow-hidden font-bold hover:bg-palette6 text-lg ">Contact US</h1>
          <form
            onSubmit={(e) => {
              
              alert('Form has been submited')
            }}
            className="inputs w-4/5 h-4/5 flex flex-col items-center justify-center gap-4  "
          >
            <input
              className="w-full border-2 p-2 rounded-3xl bg-palette5 shadow-inner shadow-palette1 placeholder:text-palette1 outline-none"
              type="text"
              placeholder="Your Name "
              value={Fname}
              required
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              className="w-full border-2 p-2 rounded-3xl bg-palette5 shadow-inner shadow-palette1 placeholder:text-palette1 outline-none"
              type="email"
              placeholder="Your Email "
              value={Femail}
              required
              onChange={(e) => setFemail(e.target.value)}
            />
            <input
              className="w-full border-2 p-2 rounded-3xl bg-palette5 shadow-inner shadow-palette1 h-24 placeholder:text-palette1 outline-none"
              type="text"
              placeholder="Your Message "
              value={Fmsg}
              required
              onChange={(e) => setFmsg(e.target.value)}
            />
            <button className="p-3 rounded-3xl text-palette9 bg-palette1 shadow-inner shadow-palette1 hover:text-palette1 mb-1 min-w-full overflow-hidden font-bold hover:bg-palette6 text-lg">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
