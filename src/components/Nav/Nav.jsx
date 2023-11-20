import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from "react-icons/io";
import club_logo from "../../Assets/Logo/club-logo-2.png"
import "./Nav.css";

const url="http://coding-junction.in";

export default function Nav() {

  const [showMenu, setShowMenu] = useState(false);
  const hideMenu = ()=>{
    setShowMenu(false);
  }

  return (
    <>
    <div className="nav">
      <div className="logo">
        <Link to={url +"/"}>
          <img src={club_logo} />
        </Link>
      </div>
      <div className="nav-buttons">
        <ul>
          <li>
            <Link to={url +'/'}>
              <button>HOME</button>
            </Link>
          </li>
          <li>
            <Link to={url +'/download-app'}>
              <button>APP</button>
            </Link>
          </li>
          <li>
            <Link to={url +'/team'}>
              <button>OUR TEAM</button>
            </Link>
          </li>
          <li>
              <Link to={url +'/contact-us'}>
              <button>CONTACT US</button>
            </Link>
          </li>
          <li>
            <Link to={url +'/register'}>
              <button className="register-btn">REGISTER</button>
            </Link>
          </li>
          <li>
            <Link to={url +'/login'}>
              <button className="login-btn">LOGIN</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-burger-switch">
        <button onClick={()=>{
          setShowMenu(!showMenu);
        }}>
          {showMenu ? <IoMdClose /> : <HiMenu /> }
        </button>
      </div>
    </div>
    <div className="nav-burger">
        {showMenu ?
          <>
            <div className="burger-menu">
              <ul>
                <li>
                  <Link to={url +'/'}>
                    <button onClick={hideMenu}>HOME</button>
                  </Link>
                </li>
                <li>
                  <Link to={url +'/download-app'}>
                    <button onClick={hideMenu}>APP</button>
                  </Link>
                </li>
                <li>
                  <Link to={url +'/team'}>
                    <button onClick={hideMenu}>OUR TEAM</button>
                  </Link>
                </li>
                <li>
                  <Link to={url +'/underConstruction'}>
                    <button onClick={hideMenu}>CONTACT US</button>
                  </Link>
                </li>
                <li>
                  <Link to={url +'/underConstruction'}>
                    <button className="register-btn" onClick={hideMenu}>REGISTER</button>
                  </Link>
                </li>
                <li>
                  <Link to={url +'/login'}>
                    <button className="login-btn" onClick={hideMenu}>LOGIN</button>
                  </Link>
                </li>
              </ul>
            </div>
          </>
          :
          <></>
        }
    </div>
    </>
  );
}
