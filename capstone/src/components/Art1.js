
import React from "react";


const Art1 = () => {

    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {

        // fetch post1 from jsonplaceholder

        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => response.json())
            // .then((json) => console.log(json));
            .then((json) => setPosts(json));
        },[])

    return (
        
        // Mapping and displaying posts 

        <div className="posts">

            <h1> Article 1 </h1>

        <div className="posts_list">
            {
               posts && posts.map((posts) => (

                    // All images

                    <div className="postCards" key={posts.id}>
                        <p>{posts.body}</p>
                    </div>

                ))
            }

        </div>

        </div>
)}

export default Art1