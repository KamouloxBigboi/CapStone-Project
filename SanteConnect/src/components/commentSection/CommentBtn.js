const CommentBtn = ({commentData, setReplying, setDeleting, setDeleteModalState, setEditing}) => {
  // Ajoute les réponses

  // console.log(setReplying, setDeleting, se)

  let counter = false;
  const showAddComment = () => {
    counter ? setReplying(false) : setReplying(true);
    counter = true;
  };

  // Supprime le commentaire

  const showDeleteModal = () => {
    setDeleting(true);
    setDeleteModalState(true);
  };

  // Modifie le commentaire

  const showEditComment = () => {
    setEditing(true);
  };

  return (
    <div className="comment--btn">
      <button
        className={`reply-btn ${
          !commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showAddComment}
      >
        <img src='./Assets/images/icon-reply.jpg' alt="Bouton de réponse" /> Répondre
      </button>
      <button
        className={`delete-btn ${
          commentData.currentUser ? "" : "display--none"
        }`}
        onClick={showDeleteModal}
      >
        <img src="./Assets/images/icon-delete.jpg" alt="Bouton de suppression"/> Supprimer
      </button>
      <button
        className={`edit-btn ${commentData.currentUser ? "" : "display--none"}`}
        onClick={showEditComment}
      >
        <img src="./Assets/images/icon-edit.jpg" alt=""/> Modifier
      </button>
    </div>
  );
};

export default CommentBtn;