import Item from './ingredient.js';

export default function ItemList() {
  const item1 = {
  name:"chicken", "emoji": "🍗" ,
  quantity: 1,
  category: "poultry",
};
 
const item2 = {
  name: "beef", "emoji": "🥩",
  quantity: 2,
  category: "meat",
};
 
const item3 = {
  name: "salmon", "emoji": "🐟" ,
  quantity: 2,
  category: "fish",
};
 
const item4 = {
  name: "cheese", "emoji": "🧀" ,
  quantity: 6,
  category: "dairy",
};
 
const item5 = {
  name: "eggs", "emoji": "🥚" ,
  quantity: 3,
  category: "poultry",
};
 
const item6 = {
  name: "rice", "emoji": "🍚",
  quantity: 1,
  category: "carbs",
};
 
const item7 = {
  name: "tomato", "emoji": "🍅" ,
  quantity: 3,
  category: "produce",
};
 
const item8 = {
  name: "pasta", "emoji": "🍝" ,
  quantity: 2,
  category: "carbs",
};
 
const item9 = {
  name:"onions", "emoji": "🧅",
  quantity: 1,
  category: "household", 
};
 


return (
  <ul>
    <Item key="item1" name={item1.name} emoji = {item1.emoji} quantity={item1.quantity} category={item1.category} />
    <Item key="item2" name={item2.name} emoji = {item2.emoji} quantity={item2.quantity} category={item2.category} />
    <Item key="item3" name={item3.name} emoji = {item3.emoji} quantity={item3.quantity} category={item3.category} />
    <Item key="item4" name={item4.name} emoji = {item4.emoji} quantity={item4.quantity} category={item4.category} />
    <Item key="item5" name={item5.name} emoji = {item5.emoji} quantity={item5.quantity} category={item5.category} />
    <Item key="item6" name={item6.name} emoji = {item6.emoji} quantity={item6.quantity} category={item6.category} />
    <Item key="item7" name={item7.name} emoji = {item7.emoji} quantity={item7.quantity} category={item7.category} />
    <Item key="item8" name={item8.name} emoji = {item8.emoji} quantity={item8.quantity} category={item8.category} />
    <Item key="item9" name={item9.name} emoji = {item9.emoji} quantity={item9.quantity} category={item9.category} />
    {/* <Item key="item10" name={item10.name} quantity={item10.quantity} category={item10.category} />
    <Item key="item11" name={item11.name} quantity={item11.quantity} category={item11.category} />
    <Item key="item12" name={item12.name} quantity={item12.quantity} category={item12.category} /> */}
  </ul>
)
}
  