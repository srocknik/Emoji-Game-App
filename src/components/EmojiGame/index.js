/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    isPrevEmojiClicked: false,
    rightClickCount: 0,
    gameIsRunning: true,
    topScore: 0,
  }

  emojiClicked = id => {
    const {clickedEmojiList, rightClickCount} = this.state
    const {emojisList} = this.props

    if (clickedEmojiList.includes(id)) {
      this.setState({isPrevEmojiClicked: true, gameIsRunning: false})
    } else {
      if (rightClickCount === emojisList.length - 1) {
        this.renderWinOrLoseCard()
        this.setState({gameIsRunning: false})
      }
      this.setState({isPrevEmojiClicked: false})
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
        rightClickCount: prevState.rightClickCount + 1,
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderShuffleEmojiList = () => {
    const {isPrevEmojiClicked} = this.state
    const newList = this.shuffledEmojisList()

    if (isPrevEmojiClicked === false) {
      return (
        <ul className="list-container">
          {newList.map(each => (
            <EmojiCard
              eachEmojiItems={each}
              key={each.id}
              emojiClicked={this.emojiClicked}
            />
          ))}
        </ul>
      )
    }
    return this.setState({gameIsRunning: false})
  }

  resettingTheGame = () => {
    const {rightClickCount, topScore} = this.state

    const {emojisList} = this.props

    if (rightClickCount === emojisList.length) {
      this.setState({topScore: 0})
    } else {
      if (topScore < rightClickCount) {
        this.setState(prevState => ({topScore: prevState.rightClickCount}))
      }
      this.setState(prevState => ({topScore: prevState.topScore}))
    }

    this.renderShuffleEmojiList()

    this.setState({
      isPrevEmojiClicked: false,
      clickedEmojiList: [],
      rightClickCount: 0,
      gameIsRunning: true,
    })
  }

  renderWinOrLoseCard = () => {
    const {rightClickCount} = this.state

    const {emojisList} = this.props

    return (
      <WinOrLoseCard
        rightClickCount={rightClickCount}
        emojiListLength={emojisList.length}
        resettingTheGame={this.resettingTheGame}
      />
    )
  }

  render() {
    const {gameIsRunning, rightClickCount, topScore} = this.state
    const {emojisList} = this.props
    return (
      <div>
        <NavBar
          topScore={topScore}
          rightClickCount={rightClickCount}
          emojiListLength={emojisList.length}
        />
        <div className="bg-container">
          <div className="list-bg-container">
            {gameIsRunning
              ? this.renderShuffleEmojiList()
              : this.renderWinOrLoseCard()}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
