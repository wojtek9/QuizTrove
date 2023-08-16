import React, { useState, useEffect } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Game from "./GameTemplate";

function GuessFlag() {
  let file = "flags.txt"
  let completionText = "You've guessed all the flags!"
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
  } = Game(file, completionText);

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
                    src={displayedValue}
                    alt="flagImage"
                    style={{ paddingBottom: "100px" }}
                  />
                </div>
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
