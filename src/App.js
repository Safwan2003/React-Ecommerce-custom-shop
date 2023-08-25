import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cartlist from './Pages/Cartlist';

import greenshirt from './assets/green-shirt.png';
import blackshirt from './assets/black-shirt.png';
import iceshirt from './assets/ice-shirt.png';
import bluehoodie from './assets/blue-hoodie.png';

const App = () => {
  const tShirts = [
    {
      name: "T-shirt 1",
      price: 10,
      images: [
        { color: "teal", image: greenshirt },
        { color: "black", image: blackshirt },
        { color: "skyblue", image: iceshirt }
      ]
    },
    {
      name: "T-shirt 2",
      price: 25,
      images: [
        { color: "blue", image: bluehoodie }
      ]
    }
  ];

  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(indexToRemove, 1);
    setCartItems(updatedCartItems);
  };
  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={<Layout user={user} handleLogout={handleLogout} />}>
        <Route index element={<Home />} />
        <Route
          path="products"
          element={<Products tShirts={tShirts} />} />
        <Route
          path="product/:productId"
          element={<ProductDetail tShirts={tShirts} addToCart={addToCart} user={user} />} />
        <Route
          path="cartlist"
          element={<Cartlist cartItems={cartItems} user={user} handleRemoveFromCart={handleRemoveFromCart} />
        } />
        <Route
          path="login"
          element={<Login setUser={setUser} />} />
      </Route>
    </Routes>
  </Router>
  );
};

export default App;
