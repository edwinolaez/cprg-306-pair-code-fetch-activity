import { useState, useEffect, use } from "react";
import React from "react";

export default function ingredientSelector({ ingredient }) {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('');

  //ingredient object
  const ingedient = {
    id: id,
    name: name.trim(),
    emoji: emoji,
  }

  function clickableCard() {
    const handleClick = () => {
      alert('Card Clicked');
      console.log(ingredient);
    }
  }

  return (
    <div onClick={handleClick}>
      <h3> Ingredient </h3>
      <text>Name: {name} {emoji} </text>
    </div>
  )
}