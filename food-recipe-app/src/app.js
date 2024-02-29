import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import RecipeList from './components/Recipe/recipelist';
import Header from './components/Shared/Header';

// Import the background images
import backgroundImage1 from './assets/backgroundImage1.jpg';
import backgroundImage2 from './assets/backgroundImage2.jpg';
import backgroundImage3 from './assets/backgroundImage3.jpg';
import backgroundImage4 from './assets/backgroundImage4.jpg';
import backgroundImage5 from './assets/backgroundImage5.jpg';

function App() {
  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerStyle = {
    backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  // Function to change the background image
  const changeBackgroundImage = () => {
    // Cycle to the next image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  return (
    <Router>
      <div style={containerStyle}>
        <Header title="Food Recipe App" />

        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/signin"
            element={<SignIn changeBackgroundImage={changeBackgroundImage} />}
          />
          <Route
            path="/signup"
            element={<SignUp changeBackgroundImage={changeBackgroundImage} />}
          />
          <Route
            path="/recipes"
            element={<RecipeList changeBackgroundImage={changeBackgroundImage} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

