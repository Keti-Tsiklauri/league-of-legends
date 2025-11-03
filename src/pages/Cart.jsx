import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  if (cart.length === 0)
    return <p className="text-center mt-5 fs-4">Your cart is empty.</p>;

  return (
    <div
      className="container mt-5 d-flex flex-column"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="display-4 mb-4 text-center">Your Cart</h1>

      {/* Scrollable list */}
      <div
        className="table-responsive shadow-sm rounded mb-5"
        style={{ maxHeight: "60vh", overflowY: "auto" }}
      >
        <table className="table table-hover mb-0">
          <thead className="table-dark">
            <tr>
              <th>Hero</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="align-middle">{item.name}</td>
                <td className="align-middle">{item.price} RP</td>
                <td className="align-middle text-center">
                  <button
                    className="btn btn-outline-danger btn-sm"
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

      {/* Fixed total price at bottom */}
      <div
        className="bg-white shadow-lg rounded d-flex justify-content-between align-items-center p-3"
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "500px",
          zIndex: 1000,
          border: "1px solid #ddd",
        }}
      >
        <span className="fs-5 fw-semibold">Total Heroes: {cart.length}</span>
        <span className="fs-5 fw-bold">Total Price: {totalPrice} RP</span>
      </div>
    </div>
  );
}
