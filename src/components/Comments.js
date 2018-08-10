import React, { Component } from 'react';
import { upVoteComment, downVoteComment } from '../actions/CommentsActions';
import { connect } from 'react-redux';


class Comments extends Component {

    upVoteComment (id) {
        this.props.upVoteComment(id);
      };
    downVoteComment = (id) => {
       this.props.downVoteComment(id);
      };

    render() {
        const comment = this.props.comment
        return (

            <div>
                <ol className='commentario-lista'>
                  
                        <li key={comment.id} className='commentario-lista-item'>
                            <div className='commentario-detalhe'>
                                <p><strong>{`Author: ${comment.author}`}</strong></p>
                                <p>{comment.body}</p>
                                <p>Votos: {comment.voteScore}</p>
                            </div>
                            <button className="botao-vote-down" onClick={() => this.downVoteComment(comment.id)}><i className="fa fa-thumbs-o-down"></i></button>
                            <button className="botao-vote-up" onClick={() => this.upVoteComment(comment.id)}><i className="fa fa-thumbs-o-up"></i></button>
                            <a className="tamanho-a-botao" href={`/${comment.id}`}><button className="post-button-editar">Editar<i className="fa fa-edit"></i></button></a>
                            <button className='post-button-remover'> Remove</button>
                        </li>
                  
                </ol>

            </div>
        )
    }
}
export default connect(null, { upVoteComment, downVoteComment  })(Comments);