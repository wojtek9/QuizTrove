import React, { useState, useEffect } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function GuessLang() {
  const [btnVisible, setBtnVisible] = useState(true);
  const [languageTextPairs, setLanguageTextPairs] = useState<string[][]>([]);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  const handleButtonClick = async () => {
    setBtnVisible(false);

    // Fetch the text file and process its content
    try {
      const response = await fetch("languages.txt");
      const content = await response.text();
      const pairs = content.split("\n").map((line) => line.split("|"));
      setLanguageTextPairs(pairs);
    } catch (error) {
      console.error("Error fetching or processing text file:", error);
    }
  };

  const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userGuess = event.currentTarget.guessInput.value.toLowerCase();
    const [correctLanguage] = languageTextPairs[currentPairIndex];
    if (userGuess === correctLanguage.toLowerCase()) {
      // Correct guess
      setCurrentPairIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (!btnVisible && currentPairIndex < languageTextPairs.length) {
      // Display the language text in the <h2> element
      const [, text] = languageTextPairs[currentPairIndex];
      document.getElementById("languageText").textContent = text;
    }
  }, [btnVisible, currentPairIndex, languageTextPairs]);

  return (
    <MDBContainer className="gamesContainer text-center">
      {btnVisible ? (
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
              <h2 id="languageText">Guess the language!</h2>
            </p>
          </div>
          <form onSubmit={handleGuess}>
            <input
              type="text"
              id="guessInput"
              className="form-control"
              style={{
                position: "relative",
                width: "400px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <button type="submit">Submit Guess</button>
          </form>
        </div>
      )}
    </MDBContainer>
  );
}

export default GuessLang;
