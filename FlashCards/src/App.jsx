import React, { useState , useRef } from 'react';
import "./App.css"; // Import the CSS file for styling
import song from './assets/opening.mp3';
import LoadingScreen from "./LoadingScreen";





function MusicPlayer() {
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
  };

  const pauseMusic = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <audio src={song} ref={audioRef} />
      <button class ="pos" onClick={playMusic}>Play</button>
      <button class ="pos2" onClick={pauseMusic}>Pause</button>

    </div>
  );
}









const Card = ({ card, showAnswer, toggleAnswer }) => {
  return (
    <div className="card" onClick={toggleAnswer}>
      <div className="card-content">
        <h3>{showAnswer ? `Answer: ${card.answer}` : `Question: ${card.question}`}</h3>
      </div>
    </div>
  );
};

const CardSet = () => {
  const cardPairs = [
    { question: "What was the first Pokémon ever created?", answer: 'Rhydon' },
    { question: "Which Pokémon is known as the “Eon Pokémon”?", answer: 'Latios and Latias' },
    { question: "What type is the Pokémon “Garchomp”?", answer: 'Dragon/Ground' },
    { question: "In which generation was the Fairy-type introduced?”?", answer: 'Generation VI' },
    { question: "What is the name of the region in Pokémon Sun and Moon?", answer: 'Alola' },
    { question: "Which Pokémon can evolve into multiple different forms depending on certain conditions?", answer: 'Eevee' },
    { question: "Which Pokémon is known for having the signature move “Spacial Rend”?", answer: 'Palkia' },
    { question: "Who is the current champion of the Galar region in Pokémon Sword and Shield?", answer: 'Leon' },
    { question: "What is the maximum number of Pokémon that can be held in a party?", answer: '6' },
    { question: "Which Pokémon is known as the “Guardian of the Sea”?", answer: 'Lugia' },
    { question: "What item is required to evolve Sneasel into Weavile?", answer: 'Razor Claw' },
    { question: "Which Pokémon has the ability “Wonder Guard”?", answer: 'Shedinja' },
    { question: "What is Ash Ketchum’s first Pokémon?", answer: 'Pikachu' },
    { question: "Which Pokémon is known as the “Time Travel Pokémon”?", answer: 'Celebi' },
    

    // Add more cards as needed
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardPairs.length);
    setShowAnswer(false); // Reset to question view for next card
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer); // Toggle the showAnswer state
  };


  const checkAnswer = () => {
    if (userGuess.trim().toLowerCase() === cardPairs[currentCardIndex].answer.toLowerCase()) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect. Try again!");
    }
  };

  const resetState = () => {
    setShowAnswer(false);
    setUserGuess("");
    setFeedback(null);
  };

  return (
    <div className="card-set">
      <Card 
        card={cardPairs[currentCardIndex]} 
        showAnswer={showAnswer} 
        toggleAnswer={toggleAnswer}
      />
      
      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button class='newButton' onClick={checkAnswer}>Submit</button>
      <button class="newButton" onClick={handleNextCard}>Next Card</button>
      <br></br>
      {feedback && <p>{feedback}</p>}

    </div>
  );
};

function App() {

  /*
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  */

  return (
    <div className="App">
      <MusicPlayer></MusicPlayer>
      <h1>Pokémon Quizlet</h1>
      <h2>Fun Fact: There were 151 original Pokémon</h2>
      <CardSet />
    </div>
  );
}


export default App;
