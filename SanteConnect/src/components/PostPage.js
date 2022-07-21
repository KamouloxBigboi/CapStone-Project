// Testing route and display : ok
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './page.css'
import Footer from "./Footer";
import LongText from "./LongText";


export default function PostPage() {
    
    /* fonction qui Fetch tous les posts au premier  montage du composant :useEffect  */
    
    
    // déclarer un state 'posts'
    
    const [posts, setPosts] = useState([]);
    let params = useParams();

    const getOnePost = (params) => { 
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setPosts(json))
            .catch((err) => console.log(err));
    }

    useEffect(() => { 
        console.log(params);
        getOnePost()
    }, [])

        // Mapper tous les posts fetchés et retourner un seul
    
    return (
        <>
            <main style={{ padding: "1rem 0" }}>
                <h2> Votre article santé de la semaine </h2> 

                {/* Link react router vers la page principale */}
                
                <Link to="/mainpage" > <button> Retour aux articles </button> </Link>
                
                <div>
                    { posts.map((post) => {
                        return (
                                <div id="postPage_box"> 
                                    <LongText content={post.body} limit = {50}/>
                                </div>
                        )
                    })}
                </div>
        </main>
        <Footer />
        </>
    );
}