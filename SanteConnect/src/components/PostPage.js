// Testing route and display : ok
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './page.css';
import './post_img.css';
import Footer from "./Footer";
import Comments from "./Comments";
// import Comments from "./Comments/index";
// import LongText from "./LongText";


export default function PostPage() {
    
    /* fonction qui Fetch tous les posts au premier montage du composant :useEffect  */
    
    
    // déclarer un state 'post'
    
    const [post, setPost] = useState([]);
    let params = useParams();

    const getOnePost = () => { 
        fetch(`http://localhost:5000/posts/${params.id}`)
            .then((res) => res.json())
            // .then((json) => console.log(json));
            .then((json) => setPost(json))
            .catch((err) => console.log(err));
    }

    useEffect(() => { 
        console.log(params);
        getOnePost()
    }, [])

        // retourner un article (post) et limiter longueur texte à 50 caractères
    
    return (
        <>
            <main style={{ padding: "1rem 0" }} className="post&comment_page">
            
                <h2> Votre article santé de la semaine </h2> 

                {/* Link react router vers la page principale */}
                
                <Link to="/mainpage" > <button id="return_button"> Retour aux articles </button> </Link>

                <div id="postPage_Box_Title"> {post.title} </div>
                <img id="post_img" src={post.imgURL}></img>
                <div id="postPage_box"> {post.text} </div>
                <div id="postPage_box"> {post.author} </div>
                <div id="postPage_box"> {post.date} </div>

                <div id="comments"> 
                     <Comments />
                </div>
            </main>
            <Footer />
        </>
    );
}