import React, { useState, useEffect } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function GuessLang() {
  const [btnVisible, setBtnVisible] = useState(true);
  const [languageTextPairs, setLanguageTextPairs] = useState<string[][]>([]);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("Guess the language!");
  const [inputValue, setInputValue] = useState("");
  const [gameCompleted, setGameCompleted] = useState(false);

  //used for testing
  const testFunction = async () => {
    try {
      const response = await fetch("languages.txt");
      const content = await response.text();
      const pairs = content.split("\n").map((line) => line.split("|"));

      console.log(pairs.length);
    } catch (error) {
      console.error("Error fetching or processing text file:", error);
    }
  };
  //testFunction();

  const handleButtonClick = async () => {
    setBtnVisible(false);

    try {
      const response = await fetch("languages.txt");
      const content = await response.text();
      const allPairs = content.split("\n").map((line) => line.split("|"));

      // Shuffle the array using Fisher-Yates algorithm
      for (let i = allPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allPairs[i], allPairs[j]] = [allPairs[j], allPairs[i]];
      }

      // Select the first 10 pairs from the shuffled array
      const selectedPairs = allPairs.slice(0, 10);

      setLanguageTextPairs(selectedPairs);
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
    <MDBContainer className="text-center">
      {btnVisible ? (
        <MDBBtn
          className="guesslangbtn gamesContainer"
          style={{
            background: "rgba(41, 198, 255, 0.33)",
            border: "0",
            height: "300px",
            borderRadius: "50%",
          }}
          onClick={handleButtonClick}
        >
          <h1>Play now!</h1>
        </MDBBtn>
      ) : (
        <>
          <div className="langsremaining">
            <h1
              className={`langsremainingtext text-center ${
                gameCompleted ? "blink-animation" : ""
              }`}
              style={{
                position: "fixed",
                top: "12%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {currentPairIndex + 1} / {languageTextPairs.length}
            </h1>
          </div>
          <div className="form-outline gamesContainer">
            <div>
              <h2
                style={{ paddingBottom: "65px" }}
                className="guesslangtextappear"
              >
                {displayedText}
              </h2>
            </div>
            {!gameCompleted && (
              <form onSubmit={handleGuess}>
                <input
                  type="text"
                  autoFocus
                  id="guessInput"
                  className="form-control"
                  style={{
                    position: "relative",
                    width: "400px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    outline: "none",
                    border: "none",
                  }}
                  autoComplete="off"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="submitguess" type="submit">
                  <span className="text">Submit Guess</span>
                </button>
              </form>
            )}
            {gameCompleted && (
              <button
                type="reset"
                onClick={handleResetBtnClick}
                style={{
                  background: "rgba(41, 198, 255, 0.33)",
                  border: "0",
                  height: "150px",
                  borderRadius: "50%",
                }}
              >
                <h3 style={{ color: "white" }}>Play again</h3>
              </button>
            )}
          </div>
        </>
      )}
    </MDBContainer>
  );
}

export default GuessLang;
