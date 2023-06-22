// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, rightClickCount, emojiListLength} = props

  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="nav-score-text">Emoji Game</h1>
      </div>

      {rightClickCount === emojiListLength ? null : (
        <div className="score-container">
          <p className="nav-score-text">Score: {rightClickCount}</p>
          <p className="nav-score-text">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
