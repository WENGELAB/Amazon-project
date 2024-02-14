import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import classes from "../header/Header.module.css"
import{Link} from 'react-router-dom'
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader.jsx';


// function Header() {
//   return (
//     <section>
//     <div className={classes.header__container}>
//       <div className={classes.logo__container}>
//       <a href="">
//         <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
//       </a>
//       </div>
//       {/* delivery */}
//       <div className={classes.delivery}>
//       <span>
//        {/* logo */}
//        <IoLocationOutline />
//       </span>
     
//       <div>
//         <p>delivering to DC </p> 
//         <span>Update location</span>
//         </div>  
//         </div> 
//         {/* search */}
//         <div className={classes.search}>
//           <select name="" id="">
//             <option value="">All</option>
//           </select>
//           <input type="text" placeholder='Search Amazon'/>
//           <FaSearch size={25} />
//         </div>
//         {/* right side list */}
        
//           <div className={classes.order_container}>
//             <a href="" className={classes.language}>
//             <img src="https://www.pngmart.com/files/13/American-Flag-Logo-PNG-Picture.png" alt="" />
//             {/* language */}
//             <select name="" id="">
//             <option value="">EN</option>
//             </select>
//             </a>
//           {/* acount and list */}
//           <a href="">
//           <p>Hello sign in</p>
          
//             <spam>Account & List</spam>
          
//           </a>
//           {/* order part */}
//           <a href="">
//             <p>return</p>
//             <span>& Orders</span>
//           </a>
//           {/* cart */}
//           <a href='' className={classes.cart}>
//             <BiCartAdd size={35} />
//             <span>0</span>
//           </a>
//           </div>
//     </div>
//     </section>
//     <LowerHeader />
      
//   );
// };

// export default Header;
function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* Logo section */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p> Deliver to</p>
                <span> Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Serach Section*/}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" placeholder="Search Product"></input>
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <Link to="/orders" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="American Flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* Sign in */}
            <a className={classes.sign}to="/auth">
              <p>Sign In</p>

              <select className={classes.accountList}name="" id="">
                <option value="">Account & Lists</option>
                <optgroup label="Your Account">
                  <option value="">Account</option>
                  <option value="Order">Order </option>
                </optgroup>
                <optgroup label="Your List">
                  <option value="Shoping List">Shoping List</option>
                  <option value="Wish List">Whish List </option>
                </optgroup>
              </select>
            </a>

            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* Cart */} 
            <a href='' className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
          </div>
        </div>
      </section>

      <LowerHeader/>
    </>
  );
}

export default Header;