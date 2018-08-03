import React, { Component } from 'react';
import FormComentario from './ViewDetalheComentario';
import ViewComments from './ViewComments';
import Posts from './Posts';
import { connect } from 'react-redux';
import { getPostById } from '../actions/PostsActions'
import { getCommentsById } from '../actions/CommentsActions'
import ViewModalCriarEditarComment from './ViewModalCriarEditarComment'

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random.toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': 'token'
}

class ViewDetalhePostagens extends Component {

    componentDidMount() {
        this.props.getPostById(this.props.match.params.postId);
        this.props.getCommentsById(this.props.match.params.postId)
    }

    render() {

        const post = this.props.post
       
        return (
            <div>
                <ul className='post-list'>
                    <li className='post-list-item'>
                        <div className='post-details'>
                            <a href={`/${post.category}/${post.id}`} >
                                <p><strong>{post.title}</strong></p></a>
                            <p>{`Criado por ${post.author} em ${new Date(post.timestamp).toLocaleString('pt-BR', { hour12: false })}`}</p>
                            <p>{post.category}</p>
                            <p>{post.body}</p>
                            <p>{post.commentCount} Comentarios</p>
                            <p>Votos: {post.voteScore}</p>
                        </div>
                        <button className="botao-vote-down"><i className="fa fa-thumbs-o-down"></i></button>
                        <button className="botao-vote-up"><i className="fa fa-thumbs-o-up"></i></button>
                        <a className="tamanho-a-botao" href={`/${post.category}/${post.id}/editar`}><button className="post-button-editar">Editar<i class="fa fa-edit"></i></button></a>
                        <button className='post-button-remover'> Remove</button>
                    </li>
                </ul>
                <ViewModalCriarEditarComment post_id={post.id}/>
                <ViewComments comments={this.props.comments} />
             </div>


        )
    }
}



const mapStateToProps = ({ post, comments }) => ({
    post,
    comments,
});


export default connect(mapStateToProps, { getPostById, getCommentsById })(ViewDetalhePostagens);
