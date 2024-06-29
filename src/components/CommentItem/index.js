import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {content, likeit, deleteit} = props
  const {id, name, description, isLiked, color, date} = content

  const changelike = () => likeit(id)

  const deleteitem = () => deleteit(id)

  return (
    <li className="con">
      <div className="horizantal">
        <div className={`username-container ${color}`}>
          <p className="letter"> {name.charAt(0).toUpperCase()} </p>
        </div>
        <div className="vertical left-space">
          <div className="horizantal name-subcontainer">
            <h1 className="username">{name}</h1>
            <p className="time left-space">{formatDistanceToNow(date)}</p>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          {!isLiked && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="like-icon"
            />
          )}
          {isLiked && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="like"
              className="like-icon"
            />
          )}
          <button
            className={`user-button ${isLiked ? 'blue' : 'white'}`}
            onClick={changelike}
            type="button"
          >
            Like
          </button>
        </div>
        <button
          className="user-button"
          onClick={deleteitem}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
