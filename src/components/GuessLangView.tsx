import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Game from "./GameTemplate";

function GuessLang() {
  let file = "languages.txt";
  let completionText = "You've guessed all the languages!";
  const {
    btnVisible,
    valueTextPairs,
    currentPairIndex,
    displayedValue,
    inputValue,
    setInputValue,
    gameCompleted,
    handleButtonClick,
    handleResetBtnClick,
    handleGuess,
    audio,
  } = Game(file, completionText);
  const intValue = parseInt(audio, 10); // The second argument (10) specifies the base for parsing

  //doesnt turn off if language == null pls fix jagex
  const handleSoundBtnClick = async () => {
    if (typeof intValue === "number" && "speechSynthesis" in window) {
      // Create a new SpeechSynthesisUtterance instance

      const speech = new SpeechSynthesisUtterance();

      // Set the text you want to synthesize
      speech.text = displayedValue;

      // Voices json
      const voices = speechSynthesis.getVoices();
      speech.voice = voices[intValue];
      speechSynthesis.speak(speech);
    } else {
      console.log("Speech synthesis not supported.");
    }
  };

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
              {currentPairIndex + 1} / {valueTextPairs.length}
            </h1>
          </div>
          <div className="form-outline gamesContainer">
            <div>
              <h2
                style={{ paddingBottom: "65px" }}
                className="guesslangtextappear"
              >
                {displayedValue}
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
                <div>
                  <a>
                    <img
                      onClick={handleSoundBtnClick}
                      src="/logos/earicon.png"
                      id="earlogo"
                      alt="flagImage"
                      style={{ paddingBottom: "20px", cursor: "pointer" }}
                    />
                  </a>
                </div>
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
