import { useState } from "react";

export default function App() {
  return (
    <div>
      <p>Test</p>
      <Header />
      <ShoppingListForm />
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

function ShoppingListForm() {
  const [shoppingList, setShoppingList] = useState("");

  return (
    <div className="shopping-list-form">
      <p>This is the shopping list form area</p>
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
