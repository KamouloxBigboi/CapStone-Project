// Testing route and display : ok
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./page.css"
import PostCard from "./PostCard";
import NavBar from "./Navbar";
import Footer from "./Footer"
import Navbar from './Navbar'
import useSticky from './hooks/useSticky.js'

// import id from "/posts/:id"

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

    // Déclare la variable isSticky

    const { isSticky, element } = useSticky()

        // Mapper tous les posts fetchés et afficher tous les liens
    
    return (

        <>
            <Navbar sticky={isSticky} />
                
            <main style={{ padding: "1rem 0"}}>

                <h2> Retrouvez tous les articles du mois </h2>
    
                <div id="posts_box">
                    { posts.map((post) => {
                        return (
                            <>
                                <Link to={`/posts/${post.id}`} style={linkStyle}>
                                    <PostCard post={post} />
                                </Link>
                            </>
                        )
                    })}
                </div>
                <Footer />
            </main>
        </>
    );
}
