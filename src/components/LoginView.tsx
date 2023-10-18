import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    let item = { username, password };
    console.log(item);
    try {
      let result = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (result.ok) {
        console.log("success");
        result = await result.json();
        console.log("result", result);
        navigate("/games");
      } else {
        console.error("Request failed with status: " + result.status);
        console.error(await result.text());
      }
    } catch (error) {
      console.error("Error while making the request:", error);
    }
  }

  return (
    <MDBContainer className="my-5" style={{ width: "800px" }}>
      <MDBRow className="g-0 align-items-center">
        <MDBCol col="6">
          <MDBCard
            className="my-5 cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <MDBCardBody className="p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign in</h2>

              <MDBInput
                className="w-50 mx-auto"
                wrapperClass="mb-4"
                label="Username"
                id="form3"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                className="w-50 mx-auto"
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBBtn onClick={handleLogin} className="mb-4">
                Login
              </MDBBtn>
              <div>
                <a href="!#">Forgot password?</a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
