import React, { useState, useEffect } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSignup = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    if (existingUsers.some(u => u.email === email)) {
      setError('Email already exists');
    } else {
      existingUsers.push({ name, email, password, mobile });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      setError('');
      setIsSignUp(false);
    }
  };

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = existingUsers.find(u => u.email === email && u.password === password);

    if (foundUser) {
      setUser({ name: foundUser.name, email: foundUser.email });
      localStorage.setItem('user', JSON.stringify({ name: foundUser.name, email: foundUser.email }));
    } else {
      setError('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {user ? (
        <div className="text-right mr-4">
          Welcome, {user.name}! <br />
          <button className="text-blue-500 cursor-pointer" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form className="p-4 bg-gray-100 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h2>
          {isSignUp && (
            <div className="mb-4">
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full border rounded py-2 px-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded py-2 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded py-2 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label className="block font-medium mb-1">Mobile Number</label>
              <input
                type="text"
                className="w-full border rounded py-2 px-3"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
          )}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            {isSignUp ? (
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            ) : (
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
          </div>
          <p className="text-center">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <span
              className="text-blue-500 cursor-pointer ml-1"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
