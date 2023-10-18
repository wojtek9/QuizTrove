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

function Create() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    let item = { username, password };
    console.warn(item);

    try {
      let result = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (result.ok) {
        result = await result.json();
        console.warn("result", result);
      } else {
        console.error("Request failed with status: " + result.status);
        // Log more details about the response, if needed.
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
              <h2 className="fw-bold mb-5">Sign up</h2>

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

              <MDBBtn onClick={signUp} className="mb-4">
                Create account
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Create;
