// Testing route and display : ok
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './page.css'
import Footer from "./Footer";
import LongText from "./LongText";


export default function PostPage() {
    
    /* fonction qui Fetch tous les posts au premier  montage du composant :useEffect  */
    
    
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

        // retourner un article (post) et limiter longueur texte à 50 caractères
    
    return (
        <>
            <main style={{ padding: "1rem 0" }}>
            
                <h2> Votre article santé de la semaine </h2> 

                {/* Link react router vers la page principale */}
                
                <Link to="/mainpage" > <button id="return_button"> Retour aux articles </button> </Link>

                <div id="postPage_box"> {post.body} </div>
            </main>
            <Footer />
        </>
    );
}