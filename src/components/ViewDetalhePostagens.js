import React, { Component } from 'react';
import FormComentario from './ViewDetalheComentario';
import Comentarios from './Comentarios';
import Posts from './Posts';
import { connect } from 'react-redux';
import { getPostById  } from '../actions/PostsActions'
import { getComentsById  } from '../actions/ComentsActions'



class ViewDetalhePostagens extends Component {
   

    componentDidMount() {
        this.props.getPostById(this.props.match.params.postId);
        this.props.getComentsById(this.props.match.params.postId)
    }

    
    render() {
     
       const post = this.props.post
       const coments = this.props.coments

        return (
            <div>
            <ol className='post-list'>
                <li  className='post-list-item'>
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
                   </ol>
                   
           </div>
           
                 
        )
    }
}



const mapStateToProps = ({ post, coments }) => ({
    post,
    coments,
});


export default connect(mapStateToProps, { getPostById, getComentsById })(ViewDetalhePostagens);
