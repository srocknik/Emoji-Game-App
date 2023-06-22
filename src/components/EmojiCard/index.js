// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmojiItems, emojiClicked} = props
  const {emojiUrl, id, emojiName} = eachEmojiItems

  const shuffleTheEmoji = () => {
    emojiClicked(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="emoji-btn" onClick={shuffleTheEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
