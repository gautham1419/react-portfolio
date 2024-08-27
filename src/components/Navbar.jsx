import { FaInstagram, FaGithub,FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/logogb.jpeg"
const Navbar = () => {
    return (
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="#">
          <img className='mx-5 w-11 rounded-lg' src={logo} alt="logo" />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/gautham-binu-60920524b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
          </a>
          <a href="https://github.com/gautham1419" target="_blank" rel="noopener noreferrer">
              <FaGithub />
          </a>
          <a href="https://www.instagram.com/gauth.a_m/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
          </a>
          <a href="https://x.com/ga_u_th_am" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
          </a>               
        </div>
     </nav>
    );
  };
  
  export default Navbar;
  