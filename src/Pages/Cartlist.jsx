import React from 'react';

const Cartlist = ({ cartItems, user, handleRemoveFromCart }) => {
  const handleClearCart = () => {
    // Clear the entire cart by setting cartItems to an empty array
    handleRemoveFromCart(-1); // Call the same remove function with a special index
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    alert("Checkout functionality will be implemented here.");
  };

  // Calculate total price of cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="">
      <h2 className='text-center text-2xl font-bold'>Your Cart</h2>
      <p className='text-center text-2xl font-bold'>Welcome,  {user ? user.name : 'Guest'}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className='flex space-x-10 justify-center m-10 items-center'>
            <div className='font-bold text-xl'>{item.name}</div>
            <div className='text-xl'>${item.price}</div>
            <div>
              <img src={item.image} alt={`${item.name} - ${item.color}`} className="w-[10rem]" />
            </div>
            <button onClick={() => handleRemoveFromCart(index)} className='bg-red-500 p-2 px-3 text-white rounded-lg mr-2' >Remove</button>
          </li>
        ))}
      </ul>

      <div className="flex justify-end mt-4">
        <div className="font-bold text-xl">Total Price: ${totalPrice}</div>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={handleClearCart} className='bg-yellow-500 p-2 px-3 text-white rounded-lg mr-2' >Clear Cart</button>
        <button onClick={handleCheckout} className='bg-blue-500 p-2 px-3 text-white rounded-lg' >Checkout</button>
      </div>
    </div>
  );
};

export default Cartlist;
