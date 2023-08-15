import React, { useState, useEffect } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function GuessFlag() {
  const [btnVisible, setBtnVisible] = useState(true);
  const [flagTextPairs, setflagTextPairs] = useState<string[][]>([]);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [displayedFlag, setdisplayedFlag] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleButtonClick = async () => {
    setBtnVisible(false);

    try {
      const response = await fetch("flags.txt");
      const content = await response.text();
      const allPairs = content.split("\n").map((line) => line.split("|"));

      // Shuffle the array using Fisher-Yates algorithm
      for (let i = allPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allPairs[i], allPairs[j]] = [allPairs[j], allPairs[i]];
      }

      // Select the first 10 pairs from the shuffled array
      const selectedPairs = allPairs.slice(0, 10);

      setflagTextPairs(selectedPairs);
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

    if (currentPairIndex >= 0 && currentPairIndex < flagTextPairs.length) {
      const [correctFlag] = flagTextPairs[currentPairIndex];
      if (userGuess === correctFlag.toLowerCase()) {
        if (currentPairIndex === flagTextPairs.length - 1) {
          setGameCompleted(true); // Mark the game as completed
          console.log("You've guessed all the flags!");
        } else {
          setCurrentPairIndex((prevIndex) => prevIndex + 1);
        }
      }
    } else {
      console.log("No more words or invalid index.");
    }
  };

  useEffect(() => {
    if (!btnVisible && currentPairIndex < flagTextPairs.length) {
      const [, text] = flagTextPairs[currentPairIndex];
      console.log(text); // Check the extracted text
      setdisplayedFlag(text);
      setInputValue(""); // Clear the input value when a new word appears
    }
  }, [btnVisible, currentPairIndex, flagTextPairs]);

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
              {currentPairIndex + 1} / {flagTextPairs.length}
            </h1>
          </div>
          <div className="form-outline gamesContainer">
            {gameCompleted && (
              <div>
              <h2
                style={{ paddingBottom: "65px" }}
                className="guesslangtextappear"
              >
                You've guessed all the flags!
              </h2>
            </div>
            )}
            
            {!gameCompleted && (
              <>
                <div>
                  <img
                    src={displayedFlag}
                    alt="flagImage"
                    style={{ paddingBottom: "100px" }}
                  />
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
              </>
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

export default GuessFlag;
