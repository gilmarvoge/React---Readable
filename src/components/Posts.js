import React, { Component } from 'react';

const  editOrNew =''

const Posts = ({ posts }) => {


    return (
        <div>
            <ol className='post-list'>
                {posts.map((post) => (
                    <li key={post.id} className='post-list-item'>
                        <div className='post-details'>
                            <a href={`/${post.category}/${post.id}`} >
                                <p><strong>{post.title}</strong></p></a>
                            <p>{`Criado por ${post.author} em ${new Date(post.timestamp).toLocaleString('pt-BR', { hour12: false })}`}</p>
                            <p>{post.category}</p>
                            <p>{post.body}</p>
                            <p>{post.commentCount} Comentarios</p>
                            <p>Votos: {post.voteScore}</p>
                        </div>
                        <button className="botao-vote-down"><i class="fa fa-thumbs-o-down"></i></button>
                        <button className="botao-vote-up"><i class="fa fa-thumbs-o-up"></i></button>
                        <a className="tamanho-a-botao" href={`/${post.category}/${post.id}/editar`}><button className="post-button-editar">Editar<i class="fa fa-edit"></i></button></a>
                        <button className='post-button-remover'> Remove</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Posts
