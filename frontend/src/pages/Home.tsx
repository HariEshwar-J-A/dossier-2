import React from 'react';
import InteractiveCanvas from '../components/InteractiveCanvas';

const Home: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
      <InteractiveCanvas />
      <p className="mt-4">Explore my work, learn about my skills, and get in touch!</p>
    </div>
  );
};

export default Home;
