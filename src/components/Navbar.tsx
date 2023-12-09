import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Navigation() {
  const [showNavColor, setShowNavColor] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <MDBNavbar
      expand="lg"
      dark
      style={{ backgroundColor: "rgba(26, 38, 57, 0.3)" }}
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">QuizTrove</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavColor(!showNavColor)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColor} navbar>
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            {isLoggedIn ? (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/games">Games</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/">Account</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem></MDBNavbarItem>
                <MDBNavbarItem style={{ position: "absolute", right: "0" }}>
                  <MDBBtn
                    onClick={logout}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "rgba(255, 255, 255, 0.55)",
                    }}
                  >
                    log out
                  </MDBBtn>
                </MDBNavbarItem>
              </>
            ) : (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login">Log in</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/signup">Sign up</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/games">Games</MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
