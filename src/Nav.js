import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
//   const [show, handleShow] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll");
//     };
//   }, []);

  return (
    // <div className={`nav ${show && "nav_black"}`}>
     <div className="nav"> 
      <img
        className="nav_logo"
        src="https://lh3.googleusercontent.com/-sxzADHZ6nSVDzs-itmtjHk87CkG-Crzl4T6-RwMkMYmeaajtNksyAB1YYgxbK00uBioNQg5IbWI4f50FaXGi1yvjFWl5bq7S9svz6Nk"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSSxxcMv5ISqqEJsJOA0h4VMsPtCrbe0GsA&usqp=CAU"
        alt="Image Logo"
      />
    </div>
  );
}

export default Nav;
