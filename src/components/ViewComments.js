import React, { Component } from 'react';



class ViewComments extends Component {
    render() {
        const comments = this.props.comments
        return (
            
            <div>
              
                  <ol className='commentario-lista'>
                    {comments.map((comment) => (
                        <li key={comment.id} className='commentario-lista-item'>
                            <div className='commentario-detalhe'>
                                <p><strong>{`Author: ${comment.author}`}</strong></p>
                                <p>{comment.body}</p>
                                <p>Votos: {comment.voteScore}</p>
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
}

export default ViewComments
