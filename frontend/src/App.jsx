import React, { useState } from 'react';


const SLIDES = [
  {
    title: "Welcome to the Slideshow!",
    text: "This is a simple React slideshow application.",
  },
  {
    title: "How it Works",
    text: "Use the 'Next' and 'Prev' buttons to navigate.",
  },
  {
    title: "Restart Anytime",
    text: "The 'Restart' button will take you back to the first slide.",
  },
  {
    title: "Easy to Build",
    text: "This was built using React and useState for state management.",
  },
  {
    title: "The End",
    text: "You've reached the last slide. Thanks for viewing!",
  },
];

const GlobalStyles = () => (
    <style>{`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .slideshow-app {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: top;
        padding: 1rem;
        box-sizing: border-box;
      }
      .header {
        text-align: center;
        margin-bottom: 2rem;
      }
      .header h1 {
        font-size: 2.25rem;
        font-weight: 700;
        color: #32C766;
      }
      .slides-container {
        width: 100%;
        max-width: 42rem;
        margin-left: auto;
        margin-right: auto;
        background-color: #23222271;
        border-radius: 0.5rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        padding: 2rem;
      }
      .navigation {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }
      .nav-button {
        padding: 0.5rem 1.25rem;
        color: white;
        font-weight: 600;
        border-radius: 0.375rem;
        transition: background-color 300ms;
        background-color: #6366f1;
        border: none;
        cursor: pointer;
      }
      .nav-button:hover:not(:disabled) {
        background-color: #4f46e5;
      }
      .nav-button:disabled {
        background-color: #4e46e563;
        cursor: not-allowed;
      }
      .slide {
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        padding: 1.5rem;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      } 
      .slide-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #ffffffff;
        margin-bottom: 0.5rem;
      }
      .slide-text {
        color: #d8e2f6d4;
      }
    `}</style>
);

function Slides({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRestart = () => {
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;
  const currentSlide = slides[currentIndex];

  return (
    <div className="slides-container">
      <div className="navigation">
        <button
          onClick={handleRestart}
          disabled={isFirstSlide}
          className="nav-button"
        >
          Restart
        </button>
        <button
          onClick={handlePrev}
          disabled={isFirstSlide}
          className="nav-button"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={isLastSlide}
          className="nav-button"
        >
          Next
        </button>
      </div>

      <div className="slide">
        <h1 className="slide-title">{currentSlide.title}</h1>
        <p className="slide-text">{currentSlide.text}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="slideshow-app" style={{ width: '100vw' , backgroundColor: '#000000ff', alignContent: 'top' }}>
        <div className="header" style={{ width: '100%', backgroundColor: '#23222271', padding: '1rem 0' }}>
          <h1 >Slideshow App</h1>
        </div>
        <Slides slides={SLIDES} />
      </div>
    </>
  );
}

export default App;

