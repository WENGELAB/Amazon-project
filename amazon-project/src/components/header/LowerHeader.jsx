import React from 'react'
import { IoIosMenu } from "react-icons/io";
import classes from "../header/Header.module.css"
// import "../header/Lower.css"
function LowerHeader() {
  return (
    <div className={classes.lower_container}> 
      <ul>
      <li>
      <IoIosMenu />
      </li>
      <li>All</li>
      <li>Todays's Deals</li>
      <li>Costumer service</li>
      <li>Registry</li>
      <li>Gift Card</li>
      <li>Sell</li>
      <li>prime</li>
      <li>fasion</li>
      <li>Amazon Basics</li>
      <li>Customer Service</li>
      <select name="" id="">
        <option value="">Registry</option>
      </select>
      </ul>
    </div>
  )
}

export default LowerHeader;
