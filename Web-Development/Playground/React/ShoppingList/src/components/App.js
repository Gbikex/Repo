import { useState } from "react";

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  function handleShoppingList(item) {
    setShoppingList((items) => [...items, item]);
  }

  function handleErrorMessage(error) {
    setErrorMessage(error);
  }

  function handleErrorReset() {
    setErrorMessage("");
  }

  return (
    <div>
      <p>Test</p>
      <Header />
      <ShoppingListForm
        onAddShoppingItem={handleShoppingList}
        onValidation={handleErrorMessage}
        error={errorMessage}
        onSuccessfulAdd={handleErrorReset}
      />
      <ShoppingList shoppingList={shoppingList} />
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

function ShoppingListForm({
  onAddShoppingItem,
  onValidation,
  error,
  onSuccessfulAdd,
}) {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  function validation({ product }) {
    const validations = [
      {
        valid: product.trim(),
        message: "Product shall have some name for the list",
      },
    ];

    for (const validation of validations) {
      if (!validation.valid) return validation.message;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      product,
      quantity,
      id: Date.now(),
    };

    const errorMessage = validation(newItem);

    if (errorMessage) {
      onValidation(errorMessage);
      return;
    }

    console.log(newItem);

    onAddShoppingItem(newItem);

    setProduct("");
    onSuccessfulAdd("");
  }

  return (
    <div className="shopping-list-form">
      <p>This is the shopping list form area</p>
      {error && <p>{error}</p>}
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

function ShoppingList({ shoppingList }) {
  return (
    <div className="shopping-list">
      <p>Render shopping list</p>

      {shoppingList.map((items) => (
        <Item
          product={items.product}
          quantity={items.quantity}
          key={items.id}
        />
      ))}
    </div>
  );
}

function Item({ product, quantity }) {
  return (
    <div>
      <ul>
        <li>{product}</li>
        <li>{quantity}</li>
      </ul>
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
