import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Login() {
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
              />
              <MDBInput
                className="w-50 mx-auto"
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
              />

              <MDBBtn className="mb-4">Login</MDBBtn>
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
