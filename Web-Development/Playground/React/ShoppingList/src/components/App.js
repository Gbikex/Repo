import { useState } from "react";

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);

  function handleShoppingList(item) {
    setShoppingList((items) => [...items, item]);
  }

  return (
    <div>
      <p>Test</p>
      <Header />
      <ShoppingListForm onAddShoppingItem={handleShoppingList} />
      <ShoppingList />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <p> 🍋 Shopping list 🥩</p>
    </div>
  );
}

function ShoppingListForm({ onAddShoppingItem }) {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const shoppingList = {
      product,
      quantity,
    };

    console.log(shoppingList);

    onAddShoppingItem(shoppingList);
  }

  return (
    <div className="shopping-list-form">
      <p>This is the shopping list form area</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item to the list"
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}
        />
        <select
          className="select"
          value={quantity}
          onChange={(e) => {
            setQuantity(+e.target.value);
          }}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <button>Add to the list</button>
      </form>
    </div>
  );
}

function ShoppingList() {
  return (
    <div className="shopping-list">
      <p>Render shopping list</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>This is the footer</p>
    </div>
  );
}
