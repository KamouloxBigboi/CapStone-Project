// Testing route and display : ok
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./mainpage.css"
import PostCard from "./PostCard";

// import id from "./PageArticle/:id"


const linkStyle = {
    margin: "3rem",
    textDecoration: "none",
    color: 'blue'
  };


export default function MainPage() {
    
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

        // Mapper tous les posts fetchés et afficher tous les liens
    
    return (
        
        <main style={{ padding: "1rem 0" }}>

            <h2> Retrouvez tous les articles du mois </h2>
            
            <div id="test">
                { posts.map((post) => {
                    return (
                        <Link to={`/posts/${post.id}`} style={linkStyle}>
                            <PostCard post={post} />
                        </Link>
                    )
                })}
            </div>
        </main>
            );
    }
