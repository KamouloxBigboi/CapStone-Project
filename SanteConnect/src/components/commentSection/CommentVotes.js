const CommentVotes = ({
  vote,
  setVoted,
  score,
  setScore,
  updateScore,
  commentData,
}) => {
  // Liker (upVote) ou vote négatif (downVote)

  let upVote = () => {
    if (vote === false) {
      let n = score + 1;
      setScore(n);
      updateScore(n, commentData.id, "reply");
      setVoted(true);
    }
  };

  let downVote = () => {
    if (vote === true) {
      let n = score - 1;
      setScore(n);
      updateScore(n, commentData.id, "reply");
      setVoted(false);
    }
  };

  return (
    <div className="comment--votes">
      <button className="plus-btn" onClick={upVote} aria-label="plus-btn">
        <img src="./Assets/images/icon-plus.jpg" alt="Voter pour" />
      </button>
      <div className="votes-counter">{commentData.score}</div>
      <button className="minus-btn" onClick={downVote} aria-label="minus-btn">
        <img src="./Assets/images/icon-minus.jpg" alt="Voter contre"/>
      </button>
    </div>
  );
};

export default CommentVotes;