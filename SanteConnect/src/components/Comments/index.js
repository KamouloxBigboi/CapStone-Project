import {Component, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Création composant parent

const Comments = (props) =>{
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  let params = useParams();


  const inputValue = event => {
    setName(event.target.value)
  }

  const textValue = event => {
    setText(event.target.value)
  }

  const addCommentinAPI = (event) => { 
    event.preventDefault()

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const index =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const object = {
      name: name,
      date: date,
      newClass: index,
      isFavorite: false,
    }

    fetch('http://localhost:5000/comments', {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
      method: 'post',
      body: object
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
  }

  useEffect(() => { 
    console.log(params);
    addCommentinAPI()
  }, [])


  const toggleFavorite = id => {
  
  }

  const deleteComment = id => {
    
  }

  return (
    <div className="main-container">
      <h1 className="main-heading">Commentaires</h1>
      <div className="inner-holder">
        <div className="element-holder">
          <p className="para1">Partager votre avis sur cet article avec la communauté !</p>
          <form className="element-holder" onSubmit={props.addComment}>
            <input
              type="text"
              className="name-field"
              placeholder="Nom ou Pseudonyme"
              onChange={inputValue}
              value={props.name}
            />
            <textarea
              className="comment-field"
              placeholder="Votre commentaire"
              onChange={textValue}
              value={props.comment}
            />
            <button type="submit" className="btn">
              Envoyez
            </button>
          </form>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          className="image1"
          alt="comments"
        />
      </div>
      <hr />
      <div className="comments-count">
        <span className="number-count">{props.count}</span> Commentaires
        <ul className="comment-holder">
          {props.arrayList.map(eachObject => (
            <CommentItem
              key={eachObject.id}
              arrayList={eachObject}
              deleteComment={deleteComment}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Comments