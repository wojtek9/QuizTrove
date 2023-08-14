import React, { useState, useEffect } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function GuessLang() {
  const [btnVisible, setBtnVisible] = useState(true);
  const [languageTextPairs, setLanguageTextPairs] = useState<string[][]>([]);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("Guess the language!");
  const [inputValue, setInputValue] = useState("");
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleButtonClick = async () => {
    setBtnVisible(false);

    try {
      const response = await fetch("languages.txt");
      const content = await response.text();
      const pairs = content.split("\n").map((line) => line.split("|"));

      // Shuffle the array using Fisher-Yates algorithm
      for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
      }

      setLanguageTextPairs(pairs);
    } catch (error) {
      console.error("Error fetching or processing text file:", error);
    }
  };

  function handleResetBtnClick() {
    location.reload();
  }

  const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userGuess = event.currentTarget.guessInput.value.toLowerCase();

    if (currentPairIndex >= 0 && currentPairIndex < languageTextPairs.length) {
      const [correctLanguage] = languageTextPairs[currentPairIndex];
      if (userGuess === correctLanguage.toLowerCase()) {
        if (currentPairIndex === languageTextPairs.length - 1) {
          setGameCompleted(true); // Mark the game as completed
          console.log("You've guessed all the languages!");
          setDisplayedText("You've guessed all the languages!");
        } else {
          setCurrentPairIndex((prevIndex) => prevIndex + 1);
        }
      }
    } else {
      console.log("No more words or invalid index.");
    }
  };

  useEffect(() => {
    if (!btnVisible && currentPairIndex < languageTextPairs.length) {
      const [, text] = languageTextPairs[currentPairIndex];
      console.log(text); // Check the extracted text
      setDisplayedText(text);
      setInputValue(""); // Clear the input value when a new word appears
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
            <h2
              style={{ paddingBottom: "35px" }}
              className="guesslangtextappear"
            >
              {displayedText}
            </h2>
          </div>
          {!gameCompleted && (
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
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit">Submit Guess</button>
            </form>
          )}
          {gameCompleted && (
            <button type="reset" onClick={handleResetBtnClick}>
              Play again
            </button>
          )}
        </div>
      )}
    </MDBContainer>
  );
}

export default GuessLang;
