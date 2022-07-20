// Testing route and display : ok
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MainPage from "./MainPage";
import './postpage.css'


export default function PostPage() {
    
    /* fonction qui Fetch tous les posts au premier  montage du composant :useEffect  */
    
    
    // déclarer un state 'posts'
    
    const [posts, setPosts] = useState([]);
    let params = useParams();
    
    const getAllPosts = () => { 
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setPosts(json))
            .catch((err) => console.log(err));
    }

    useEffect(() => { 
        
        console.log(params);
        getAllPosts()
    }, [])

        // Mapper tous les posts fetchés et retourner un seul
    
    return (
        
        <main style={{ padding: "1rem 0" }}>

            <h2> Votre article santé de la semaine </h2>

            <div>
                { posts.map((post) => {
                    return (
                            <p> {post.body} </p>
                    )
                })}
            </div>
        </main>
            );
    }