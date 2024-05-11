import { NavLink } from "react-router-dom";
import logo_blue from "../assets/icons/logo_blue.svg";
import arrow_down from "../assets/icons/arrow_down.svg";

const NavBar = () => {

// const activeLink = "border-secondary-red border-b-2";

  return (

<>
<nav className="max-container fixed z-50 w-full" data-aos="fade-in" data-aos-duration="700">

  <div className=" mt-0 padding w-full nav-gradient" >

    <div className="flex flex-row gap-10 justify-between">
    
      <div className="items-center">
        <a href="/">
        <img
          src={logo_blue}
          width={170}
          height={50}      
          alt ="logo-white"
          />
      </a>
      </div>
      
      <div className="flex flex-row gap-10 text-white items-center">
        <NavLink  to='/' 

          className="hover:border-b-2 border-white transition-all 
          duration-100 ease-in"

        // className={({isActive}) =>
        //       isActive? activeLink :''}
        >
        <p>Home</p>
        </NavLink>

        <NavLink  to='/about-us'><p className="flex flex-row gap-1">About us <span><img src={arrow_down}/>
        </span></p></NavLink>

            <NavLink to='/services-page'
            className="hover:border-b-2 border-white transition-all 
              duration-100 ease-in"
            ><p>Services</p></NavLink>

            <NavLink to='/sustainability-page'
              className="hover:border-b-2 border-white transition-all 
              duration-100 ease-in"
            ><p>Sustainability</p></NavLink>

            <NavLink><p>Career</p></NavLink>

            <NavLink><p>Contact Us</p></NavLink>

            <NavLink><p>Reports</p></NavLink>
      </div>
    </div>
  </div>

  </nav>
  </>
  )
}

export default NavBar