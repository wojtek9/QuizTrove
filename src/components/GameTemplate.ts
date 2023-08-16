import { useState, useEffect } from 'react';

function Game(file: string, completionText: string) {
  const [btnVisible, setBtnVisible] = useState(true);
  const [valueTextPairs, setValueTextPairs] = useState<string[][]>([]);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [displayedValue, setDisplayedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [gameCompleted, setGameCompleted] = useState(false);
  const [audio, setAudio] = useState(1);

  const handleButtonClick = async () => {
    setBtnVisible(false);

    try {
      const response = await fetch(file);
      const content = await response.text();
      const allPairs = content.split("\n").map((line) => line.split("|"));

      // Shuffle the array using Fisher-Yates algorithm
      for (let i = allPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allPairs[i], allPairs[j]] = [allPairs[j], allPairs[i]];
      }

      // Select the first 10 pairs from the shuffled array
      const selectedPairs = allPairs.slice(0, 10);

      setValueTextPairs(selectedPairs);
    } catch (error) {
      console.error("Error fetching or processing text file:", error);
    }
  };

  const handleResetBtnClick = () => {
    location.reload();
  };

  const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userGuess = event.currentTarget.guessInput.value.toLowerCase();

    if (currentPairIndex >= 0 && currentPairIndex < valueTextPairs.length) {
      const [correctLanguage] = valueTextPairs[currentPairIndex];
      if (userGuess === correctLanguage.toLowerCase()) {
        if (currentPairIndex === valueTextPairs.length - 1) {
          setGameCompleted(true); // Mark the game as completed
          console.log(completionText);
          setDisplayedValue(completionText);
        } else {
          setCurrentPairIndex((prevIndex) => prevIndex + 1);
        }
      }
    } else {
      console.log("No more values or invalid index.");
    }
  };

  useEffect(() => {
    if (!btnVisible && currentPairIndex < valueTextPairs.length) {
      const [, text] = valueTextPairs[currentPairIndex];
      setDisplayedValue(text);
      setInputValue("");
    }
  }, [btnVisible, currentPairIndex, valueTextPairs]);

  return {
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
  };
}

export default Game;
