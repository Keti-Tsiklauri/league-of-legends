import { useEffect, useState } from "react";
import "./Cart.css";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [cart]);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) {
      setFooterHeight(footer.offsetHeight + 20);
    }
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0)
    return <p className="status-message">Your cart is empty.</p>;

  return (
    <div
      className="cart-container"
      style={{ paddingBottom: `${footerHeight + 70}px` }}
    >
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-table-wrapper">
        <table className="cart-table">
          <thead>
            <tr className="cart-table-header">
              <th>Hero</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price} RP</td>
                <td className="action-cell">
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-bar" style={{ bottom: footerHeight }}>
        <span>Total Heroes: {cart.length}</span>
        <span>Total Price: {totalPrice} RP</span>
      </div>
    </div>
  );
}
