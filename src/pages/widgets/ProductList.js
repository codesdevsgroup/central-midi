import React, { useState, useEffect } from 'react';
import createWooCommerceAPI from '../../services/WooCommerceAPI';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const wooCommerceAPI = createWooCommerceAPI();
        const response = await wooCommerceAPI.get('/products', {
          params: {
            _embed: true, // Embeds additional data, including categories
          },
        });

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro ao carregar produtos: {error.message}</p>;
  }

  return (
    <div>
      <h2>Musicas do Mês</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} - Categoria(s):{' '}
            {product.categories.map((category) => category.name).join(', ')} - 
           {/*  Naturalidade: {product.acf.naturalidade || 'N/A'} - 
            Gênero: {product.acf.genero || 'N/A'} - 
            RLM: {product.acf.rlm || 'N/A'} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
