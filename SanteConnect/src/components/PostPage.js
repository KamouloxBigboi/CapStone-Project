// Testing route and display : ok
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './page.css'
import Footer from "./Footer";
// import LongText from "./LongText";
import Comment from "./commentSection/Comment";
import AddComment from "./commentSection/AddComment";


export default function PostPage() {
    
    /* fonction qui Fetch tous les posts au premier montage du composant :useEffect  */
    
    
    // déclarer un state 'post'
    
    const [post, setPost] = useState([]);
    let params = useParams();

    const getOnePost = () => { 
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setPost(json))
            .catch((err) => console.log(err));
    }

    useEffect(() => { 
        console.log(params);
        getOnePost()
    }, [])

    // Déclare les variables state pour ajouter et supprimer commentaires

    const [comments, updateComments] = useState([]);
    const [deleteModalState, setDeleteModalState] = useState(false);

    const getData = async () => {
        const res = await fetch("./data/data.json");
        const data = await res.json();
        updateComments(data.comments);
      };

    // Montage des données fetchés avec useEffect

    useEffect(() => {
    localStorage.getItem("comments") !== null
        ? updateComments(JSON.parse(localStorage.getItem("comments")))
        : getData();
    }, []);

    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
        deleteModalState
          ? document.body.classList.add("overflow--hidden")
          : document.body.classList.remove("overflow--hidden");
      }, [comments, deleteModalState]);

    
    // Déclaration de toutes les fonctions commentaires

    // Modification du score

    let updateScore = (score, id, type) => {
    let updatedComments = [...comments];

    if (type === "comment") {
      updatedComments.forEach((data) => {
        if (data.id === id) {
          data.score = score;
        }
      });
    } else if (type === "reply") {
      updatedComments.forEach((comment) => {
        comment.replies.forEach((data) => {
          if (data.id === id) {
            data.score = score;
          }
        });
      });
    }
    updateComments(updatedComments);
  };

    // Ajout commentaires

    let addComments = (newComment) => {
    let updatedComments = [...comments, newComment];
    updateComments(updatedComments);
  };

    // Ajout des réponses

    let updateReplies = (replies, id) => {
    let updatedComments = [...comments];
    updatedComments.forEach((data) => {
      if (data.id === id) {
        data.replies = [...replies];
      }
    });
    updateComments(updatedComments);
  };

    // Modification du commentaire

    let editComment = (content, id, type) => {
    let updatedComments = [...comments];

    if (type === "comment") {
      updatedComments.forEach((data) => {
        if (data.id === id) {
          data.content = content;
        }
      });
    } else if (type === "reply") {
      updatedComments.forEach((comment) => {
        comment.replies.forEach((data) => {
          if (data.id === id) {
            data.content = content;
          }
        });
      });
    }

    updateComments(updatedComments);
  };

    // Suppression du commentaire

    let commentDelete = (id, type, parentComment) => {
    let updatedComments = [...comments];
    let updatedReplies = [];

    if (type === "comment") {
      updatedComments = updatedComments.filter((data) => data.id !== id);
    } else if (type === "reply") {
      comments.forEach((comment) => {
        if (comment.id === parentComment) {
          updatedReplies = comment.replies.filter((data) => data.id !== id);
          comment.replies = updatedReplies;
        }
      });
    }

    updateComments(updatedComments);
  };

        // retourner un article (post) et limiter longueur texte à 50 caractères
    
    return (
        <>
            <main style={{ padding: "1rem 0" }} className="post&comment_page">
            
                <h2> Votre article santé de la semaine </h2> 

                {/* Link react router vers la page principale */}
                
                <Link to="/mainpage" > <button id="return_button"> Retour aux articles </button> </Link>

                <div id="postPage_box"> {post.body} </div>

                <div id="comments">
                    {comments.map((comment) => (
                        <Comment
                        key={comment.id}
                        commentData={comment}
                        updateScore={updateScore}
                        updateReplies={updateReplies}
                        editComment={editComment}
                        commentDelete={commentDelete}
                        setDeleteModalState={setDeleteModalState}
                        />
                ))}
                </div>
                <AddComment buttonValue={"send"} addComments={addComments} />
            </main>
            <Footer />
        </>
    );
}