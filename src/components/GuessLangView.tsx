import React, { useState } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

const languages = ["English", "Spanish", "French", "German"]; // List of languages
const currentlang = ""

function GuessLang() {
  const [btnVisible, setBtnVisible] = useState(true); // State to manage button visibility
  const [guessedLanguage, setGuessedLanguage] = useState<string | null>(""); // Initialize with an empty string
  const handleButtonClick = () => {
    setBtnVisible(false); // Hide the button when clicked
  };

  const handleGuess = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userGuess = event.target.value;
    if (userGuess === guessedLanguage) {
      // Correct guess
      const randomLanguage = getRandomLanguage();
      setGuessedLanguage(randomLanguage);
    }
  };

  const getRandomLanguage = () => {
    return languages[Math.floor(Math.random() * languages.length)];
  };
  return (
    <MDBContainer className="gamesContainer text-center">
      {btnVisible ? ( // Render the button only if btnVisible is true
        <MDBBtn className="guesslangbtn" onClick={handleButtonClick}>
          <h1>Play now!</h1>
        </MDBBtn>
      ) : (
        <div className="form-outline gamesContainer">
          <div>
            <p
              style={{ paddingBottom: "10px" }}
              className="guesslangtextappear"
            >
              <h2>{getRandomLanguage()}</h2>
            </p>
          </div>
          <input
            type="text"
            id="typeText"
            className="form-control"
            style={{
              position: "relative",
              width: "400px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            onChange={(e) => handleGuess(e)}
          />
          <label className="form-label guesslanginput" htmlFor="typeText">
            <p style={{ color: "#c24d2c" }}>
              <h5>Which language is displayed in the text?</h5>
            </p>
          </label>
        </div>
      )}
    </MDBContainer>
  );
}

export default GuessLang;
