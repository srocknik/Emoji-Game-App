// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {rightClickCount, emojiListLength, resettingTheGame} = props

  const selectImage =
    rightClickCount === emojiListLength
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = rightClickCount === emojiListLength ? 'You Won' : 'You Lose'

  const scoreText = rightClickCount === emojiListLength ? 'Best Score' : 'Score'

  const altValue = rightClickCount === emojiListLength ? 'win' : 'lose'

  const onResetGame = () => {
    resettingTheGame()
  }

  return (
    <div className="win-loss-container">
      <div className="result-container">
        <h1 className="result">{result}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="score">{rightClickCount}/12</p>
        <button type="button" className="reset-btn" onClick={onResetGame}>
          Play Again
        </button>
      </div>
      <img src={selectImage} alt={altValue} className="win-loss-image" />
    </div>
  )
}

export default WinOrLoseCard
