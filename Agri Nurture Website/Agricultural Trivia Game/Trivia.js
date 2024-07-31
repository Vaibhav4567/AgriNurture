function Trivia() {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>MCQ Quiz</title>
            {/* Google Font */}
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
            {/* Stylesheet */}
            <link rel="stylesheet" href="style.css" />
            <div className="start-screen">
                <button id="start-button">Start</button>
            </div>
            <div id="display-container">
                <div className="header">
                    <div className="number-of-count">
                        <span className="number-of-question">Agricultural Trivia</span>
                    </div>
                </div>
                <div id="container">
                    {/* questions and options will be displayed here */}
                </div>
                <button id="next-button">Next</button>
            </div>
            <div className="score-container hide">
                <div id="user-score">Demo Score</div>
                <button id="restart">Restart</button>
            </div>
            {/* Script */}
        </div>
    );
}