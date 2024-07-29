function HangmanGame () {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HangMan Game</title>
      <link rel="stylesheet" href="style.css" />
      {/* script */}
      <div className="main">
        <div className="game">
          <div className="left">
            <img className="img" src="images/hangman-0.svg" />
            <h1>HANGMAN GAME</h1>
          </div>
          <div className="right">
            <ul className="word-display" />
            <h4>
              Hint:Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laborum, ipsum!
            </h4>
            <p>
              Incorrect guessess:
              <span className="chance" style={{ color: 'red' }}>0/6</span>
            </p>
            <div className="keyboard" />
          </div>
        </div>
        <div className="GameOver">
          <img className="gameoverImg" src="images/lost.gif" />
          <h3>Game Over!</h3>
          <h6>
            The Correct Word Was:<span className="answer" style={{ color: 'red' }}>Jazz</span>
          </h6>
          <button onclick="location.reload()">PLAY AGAIN</button>
        </div>
      </div>
    </div>
  );
}
export default HangmanGame;