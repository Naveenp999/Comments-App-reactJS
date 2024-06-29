import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', description: ''}

  namechange = event => this.setState({name: event.target.value})

  commentchange = event => this.setState({description: event.target.value})

  changelike = id => {
    const {commentsList} = this.state
    const newlist = commentsList.map(element => {
      if (element.id === id) {
        return {...element, isLiked: !element.isLiked}
      }
      return element
    })
    this.setState({commentsList: newlist})
  }

  userchange = event => {
    event.preventDefault()
    const {commentsList, name, description} = this.state
    const newuser = {
      id: uuidv4(),
      name,
      description,
      isLiked: false,
      color:
        initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)],
      date: new Date(),
    }

    this.setState({
      commentsList: [...commentsList, newuser],
      name: '',
      description: '',
    })
  }

  deleteitem = id => {
    const {commentsList} = this.state
    const newlist = commentsList.filter(element => element.id !== id)
    this.setState({commentsList: newlist})
  }

  render() {
    const {commentsList, name, description} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Comments</h1>
          <div className="comment-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-icon"
            />
            <form
              className="comment-section"
              onSubmit={this.userchange}
              id="comment-bag"
            >
              <p className="note">Say something about 4.0 Technology</p>
              <input
                className="name"
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={this.namechange}
              />
              <textarea
                className="comment"
                placeholder="Your Comment"
                onChange={this.commentchange}
                type="text"
                value={description}
              />
              <button
                className="button"
                type="submit"
                data-testid="add-comment"
              >
                Add Comment
              </button>
            </form>
          </div>
          <hr className="line" />
          <p className="comment-count">
            <span className="count">{commentsList.length}</span> Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(element => (
              <CommentItem
                content={element}
                key={element.id}
                likeit={this.changelike}
                deleteit={this.deleteitem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
