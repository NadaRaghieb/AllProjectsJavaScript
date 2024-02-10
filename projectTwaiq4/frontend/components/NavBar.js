import {Nav,NavDropdown} from 'react-bootstrap'
import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  // console.log(router);
  return (
    <>
    
    <Nav className="navbar navbar-expand-lg " style={{backgroundColor:"#7B5E74",padding:"20px"}}>
      <div className=" container">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center">
            <span className="nav1 ms-2" style={{color:"white", fontFamily:"cursive"}}> Artist IN Najran </span>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="nav1 navbar-nav ms-auto">
         
           

            <li className="nav-item">
              <Link href="/cart">
                <a
                  className={
                    "nav1 nav-link " + `${router.pathname === "/cart" ? "active" : ""}`
                  }
                  aria-current="page"
                  style={{color:"white",fontFamily:"cursive"}}
                >
              Paintings of all Artist
                </a>
              </Link>
            </li>


            {/* <li className="nav-item">
              <Link href="/login">
                <a
                  className={
                    "nav1 nav-link " +
                    `${router.pathname === "/login" ? "active" : ""}`
                  }
                  style={{color:"white", fontFamily:"cursive"}}
                >
                  SignIn
                </a>
              </Link>
            </li> */}

            
            {/* <li className="nav-item">
              <Link href="/profileArtist">
                <a
                  className={
                    "nav1 nav-link " +
                    `${router.pathname === "/profileArtist" ? "active" : ""}`
                  }
                  style={{color:"white", fontFamily:"cursive"}}
                >
                  Profile
                </a>
              </Link>
            </li> */}
           
            {/* <li className="nav-item">
              <Link href="/login">
                <a
                  className={
                    "nav1 nav-link " +
                    `${router.pathname === "/login" ? "active" : ""}`
                  }
                  style={{color:"white",fontFamily:"cursive"}}
                >
                  Logout
                </a>
              </Link>
              
            </li> */}
            
             
          </ul>
          <ul className=" text-sm-right social-icon social mb-0">
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-github" style={{color:"white"}} title="Github"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" style={{color:"white"}} title="Instagram"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" style={{color:"white"}} title="Twitter"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-snapchat" style={{color:"white"}} title="Google +"></i></a></li>
                          <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" style={{color:"white"}} title="Linkedin"></i></a></li>
                      </ul>
          {/* <ul class="header-menu-left">
                    <li class="mode">
                        <a class="dark-mode" style={{display:"block"}}><i class="far fa-moon"></i></a>
                        <a class="light-mode" style={{display:"none"}}><img src="/assets/images/topnav/sun.png?v=fEidFB0e4rEMamKtEAXeYSit_InQ-02pCmdhwAb9BX4"/></a>
                    </li>
                    </ul> */}
        </div>
      </div>
    </Nav>
    
    </>
  );
};

export default NavBar;