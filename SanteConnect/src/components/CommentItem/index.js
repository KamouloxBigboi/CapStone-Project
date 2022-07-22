import './index.css'

const CommentItem = props => {
  const {arrayList, deleteComment, toggleFavorite} = props
  const {
    id,
    firstName,
    name,
    comment,
    newClass,
    date,
    isFavorite,
  } = arrayList
  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const addClass = isFavorite ? 'sky-blue' : ''
  const favButton = () => {
    toggleFavorite(id)
  }
  const delButton = () => {
    deleteComment(id)
  }
  return (
    <li className="comment-item" key={id}>
      <div className="content-holder">
        <p className={`user-icon ${newClass}`}>{firstName}</p>
        <div className="sub-holder">
          <div className="name-holder">
            <h1 className="username">{name}</h1>
            <p className="time-now">{date}</p>
          </div>
          <p className="comment-line">{comment}</p>
        </div>
      </div>
      <div className="icons-holder">
        <button type="button" className="like-btn" onClick={favButton}>
          <img src={imgUrl} className="image2" alt="like" />
        </button>
        <p className={`icon-name ${addClass}`}> Liker </p>
        <button
          type="button"
          className="del-btn"
          onClick={delButton}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="del-image"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem