import React from 'react';
import './Card.scss'

const Card= ({article }) => {
    return (
      
        <article className='card'>
          
            <p><b>Título:</b> {article.title}</p>
            <p><b>Autor:</b> {article.author}</p>
            <p><b>Contenido:</b> {article.content}</p> 
            <img className="foto" src={article.urlToImage} alt=""/>
          </article>
    )
}

   

export default Card