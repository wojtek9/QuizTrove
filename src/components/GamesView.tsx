import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdb-react-ui-kit";

function Games() {
  return (
    <MDBContainer className="gamesContainer">
      <MDBRow className="g-5">
        {/* col-md-3 determines the size of the column */}
        <MDBCol className="gamesCol col-md-3 mb-4 d-flex align-items-stretch">
          <MDBCard className="gamesCard text-center">
            <MDBCardImage
              src="/loginimage.jpg"
              position="top"
              className="gamesImage"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>Guess the language</MDBCardTitle>
              <MDBCardText>
                Put your language skills to the test and identify the language
                spoken in the text.
              </MDBCardText>
              <MDBBtn href="/guessthelanguage">Play</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="gamesCol col-md-3 mb-4 d-flex align-items-stretch">
          <MDBCard className="gamesCard text-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              position="top"
              className="gamesImage"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="gamesCol col-md-3 mb-4 d-flex align-items-stretch">
          <MDBCard className="gamesCard text-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              position="top"
              className="gamesImage"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="gamesCol col-md-3 mb-4 d-flex align-items-stretch">
          <MDBCard className="gamesCard text-center">
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
              position="top"
              className="gamesImage"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn href="#">Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Games;
