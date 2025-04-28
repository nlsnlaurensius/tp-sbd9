import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardList from './components/CardList';
import Counter from './components/Counter';

function App() {
  return (
    <div className="pt-24">
      <Navbar />
      <Hero />

      <main>
        <CardList />
        <div className="container mx-auto my-12 border-t border-gray-700"></div>
        <Counter />
      </main>

      <footer className="text-center text-gray-500 p-8">
          © 2025 NelsonLaurensius. All rights reserved.
      </footer>
    </div>
  );
}

export default App;