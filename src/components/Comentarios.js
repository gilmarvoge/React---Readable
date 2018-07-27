import React, { Component } from 'react';


const comentarios = ({ comentarios }) => {

           return (
            <div>
                <ol className='comentario-lista'>
                    {comentarios.map((coment) => (
                        <li key={coment.id} className='comentario-lista-item'>
                            <div className='comentario-detalhe'>
                            <p>{`Criado por ${coment.author} em ${new Date(coment.timestamp).toLocaleString('pt-BR', { hour12: false })}`}</p>
                          
                            <p>{coment.body}</p>
                            <p>{coment.commentCount} Comentarios</p>
                            <p>Votos: {coment.voteScore}</p>
                            </div>
                            <button className="botao-vote-down"><i class="fa fa-thumbs-o-down"></i></button>
                            <button className="botao-vote-up"><i class="fa fa-thumbs-o-up"></i></button>
                            <a className="tamanho-a-botao" href="/editar"><button className="post-button-editar">Editar<i class="fa fa-edit"></i></button></a>
                            <button className='post-button-remover'> Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }


export default comentarios
