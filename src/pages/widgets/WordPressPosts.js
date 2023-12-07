import React from 'react';
import useWordPressAPI from '../../services/WordPressAPI';

const WordPressPosts = () => {
  const { data: posts, loading, error } = useWordPressAPI('posts', { per_page: 10 }); // Ajuste conforme necessário

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts do WordPress</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordPressPosts;
