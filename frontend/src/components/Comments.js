import React, { Component } from 'react';
import { upVoteComment, downVoteComment, deleteComment, editComment } from '../actions/CommentsActions';
import { connect } from 'react-redux';
import ViewEditarComment from './ViewEditarComment'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { edit: false, };
    }

    editComment = () => {
        this.setState({ edit: true });
    };

    handleEditComment = (comment) => {
        this.props.editComment({
            comment
        });
    };

    upVoteComment(id) {
        this.props.upVoteComment(id);
    };

    downVoteComment = (id) => {
        this.props.downVoteComment(id);
    };

    deleteComment = (id) => {
        this.props.deleteComment(id);
    };

    render() {
        const comment = this.props.comment
        const renderComment = this.state.edit ? (
            <ViewEditarComment editComentValues={comment} editComment={this.handleEditComment} />
        ) : (
                <div className='commentario-detalhe'>
                    <p><strong>{`Author: ${comment.author}`}</strong></p>
                    <p>{comment.body}</p>
                    <p>Votos: {comment.voteScore}</p>
                </div>
            )
        return (
            <div>
                <ol className='commentario-lista'>
                    <li key={comment.id} className='commentario-lista-item'>
                        {renderComment}
                        <button className="botao-vote-down" onClick={() => this.downVoteComment(comment.id)}><i className="fa fa-thumbs-o-down"></i></button>
                        <button className="botao-vote-up" onClick={() => this.upVoteComment(comment.id)}><i className="fa fa-thumbs-o-up"></i></button>
                        <button className="post-button-editar" onClick={this.editComment}>Editar<i ></i></button>
                        <button className='post-button-remover' onClick={() => this.deleteComment(comment.id)}> Remove</button>
                    </li>
                </ol>
            </div>
        )
    }
}

export default connect(null, { upVoteComment, downVoteComment, deleteComment, editComment })(Comments);