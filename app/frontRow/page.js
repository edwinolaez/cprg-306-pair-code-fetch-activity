'use client'
import { useState } from 'react';
import ItemList from './ingredient-list.js';
import Item from './ingredient.js';
import ingredientSelector from './IndgredientSelector.js';

export default function Page () {
  const [items, setItems] = useState(ItemList);

    function handleAddItem(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  return (
    <main className='min-h-screen flex flex-cols items-center justify-center p-5 bg-amber-50 '>
      <div className='w-full max-w-2xl'>
      <h1 className='text-5xl font-sans  text-left text-blue-700 mb-2 mt-0'>Shopping List</h1>
      <ingredientSelector ingredient={items}/>
      </div>
    </main>
  ); 
}