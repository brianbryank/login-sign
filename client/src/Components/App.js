import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Landing from './Landing';
import Home from './Home'; // Make sure this import is correct
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/session')
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error('Error fetching session:', error));
  }, []);

  return (
    <div>
      <Routes>
        <Route element={<Landing user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
