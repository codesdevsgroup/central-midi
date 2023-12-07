import React from 'react';
import useWordPressAPI from '../../services/WordPressAPI';

const WordPressPosts = () => {
  const { data: posts, loading, error } = useWordPressAPI('posts', { per_page: 10 });
  
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
          <li key={post.id} class="p-2">
            <h3>{post.title.rendered}</h3>
            {post.content.rendered && <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />}          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordPressPosts;
