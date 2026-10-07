import {useState} from "react";


function App() {

  
  const [availableItems,setAvailableItems] = useState([
  {
    id: 1,
    name: "Black T shirt",
    price: 5
  },
  {
    id: 2,
    name: "Hanger Set",
    price: 8
  },
  {
    id: 3,
    name: "Thoub",
    price: 12
  },
  {
    id: 4,
    name: "Computer Bag",
    price: 20
  },
  {
    id: 5,
    name: "Couch",
    price: 50
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 70
  }
])


  const [shoppingCart,setShoppingCart] = useState([])
  const [availableBalance,setAvailableBalance] = useState(100)
  const [warningMessage,setWarningMessage] = useState(null)

  const handleAddToCart = (item) => {

    if(availableBalance < item.price){
      setWarningMessage("Insufficient funds. Your balance is too low to purchase this item")

      setTimeout(() => {
        setWarningMessage(null);
      }, 4000);

      return;
    }

    const newAvailableItems = availableItems.filter(
      (availableItem) => availableItem.id !== item.id)

      setAvailableItems(newAvailableItems)
      setShoppingCart([...shoppingCart,item])
      setAvailableBalance(availableBalance - item.price)

    }


    const handleRemoveFromShoppingCart = (item) => {

      const newShoppingCart = shoppingCart.filter(
      (cartItem) => cartItem.id !== item.id)

      setShoppingCart(newShoppingCart)
      setAvailableItems([...availableItems,item])
      setAvailableBalance(availableBalance+item.price)

    }


  return (
    <div>

      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>

      <p>{warningMessage}</p>
 
      <h2>Available Items</h2>

      {availableItems.map((item)=>(
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>Price:{item.price}</p>

        <button onClick={() => handleAddToCart(item)}>
          Add to Cart
        </button>

      </div>
      ))}

      <h2>Shopping Cart</h2>

      {shoppingCart.map((item)=>(
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>Price:{item.price}</p>

      <button onClick={() => handleRemoveFromShoppingCart(item)}>
          Remove
        </button>

      </div>
      ))}

      
    </div>

  );
}

export default App
