import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Check if the current route is "/cart"
  if (location.pathname === "/cart") {
    return null; // Don't render the Header component on the "Cart" page
  }
  return (
    <>
      <div
       
      >
        
        <button
         
        >
          
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          
        >
          
          <span className="visually-hidden">Next</span>
        </button>
      </div>

     
    </>
  );
};

export default Header;
