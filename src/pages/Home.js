import React from 'react';
import WordPressPosts from './widgets/WordPressPosts';
import ProductList from './widgets/ProductList';
import '../assets/css/home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Meu Aplicativo React com WordPress</h1>
      <WordPressPosts />
      <ProductList />
    </div>
  );
}

export default Home;
