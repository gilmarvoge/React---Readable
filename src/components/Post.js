import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVotePost, downVotePost, deletePost } from '../actions/PostsActions';
import { Link } from 'react-router-dom'

class Post extends Component {

    upVotePost(id) {
        this.props.upVotePost(id);
    };
    downVotePost = (id) => {
        this.props.downVotePost(id);
    };
    deletePost = (id) => {
        this.props.deletePost(id);
    };

    render() {
        const post = this.props.post;
        return (
            <div>
                <ol className='post-list'>
                    <li className='post-list-item'>
                        <div className='post-details'>
                            <Link to={`/${post.category}/${post.id}`} >
                                <p><strong>{post.title}</strong></p></Link>
                            <p>{`Criado por ${post.author} em ${new Date(post.timestamp).toLocaleString('pt-BR', { hour12: false })}`}</p>
                            <p>{post.category}</p>
                            <p>{post.body}</p>
                            <p>{post.commentCount} Comentarios</p>
                            <p>Votos: {post.voteScore}</p>
                        </div>
                        <button className="botao-vote-down" onClick={() => this.downVotePost(post.id)}><i className="fa fa-thumbs-o-down"></i></button>
                        <button className="botao-vote-up" onClick={() => this.upVotePost(post.id)}><i className="fa fa-thumbs-o-up"></i></button>
                        <Link className="tamanho-a-botao" to={`/${post.category}/${post.id}/editar`}><button className="post-button-editar">Editar<i className="fa fa-edit"></i></button></Link>
                        <button className='post-button-remover' onClick={() => this.deletePost(post.id)}> Remove</button>
                    </li>
                </ol>
            </div>
        )
    }
}



export default connect(null, { upVotePost, downVotePost, deletePost })(Post);
