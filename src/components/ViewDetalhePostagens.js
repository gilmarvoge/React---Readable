import React, { Component } from 'react';
import ViewComments from './ViewComments';
import Comments from './Comments';
import { connect } from 'react-redux';
import { getPostById } from '../actions/PostsActions'
import { getCommentsById } from '../actions/CommentsActions'
import { adicionaComment } from '../actions/CommentsActions'
import ViewModalCriarEditarComment from './ViewModalCriarComment'

class ViewDetalhePostagens extends Component {

    componentDidMount() {
        this.props.getCommentsById(this.props.match.params.postId);
        this.props.getPostById(this.props.match.params.postId);
    }

    addCommentHandler = comment => {
        comment.parentId = this.props.match.params.postId;
        this.props.adicionaComment(comment);
      };

      /**  
       
        e.preventDefault();
        if (this.state.edit) {
           const { author, body } = this.state;
           this.props.editCommentById({
               id: this.props.comment.id,
               author,
               body,
          });
       } else {
           const { author, body } = this.state;
           this.props.adicionaComment({
               parentId: this.props.post_id,      
               author,
               body,
            });
        } */


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
                <ViewModalCriarEditarComment addComment={this.addCommentHandler}/>
                <Comments comments={this.props.comments}/>
                
               
            </div>


        )
    }
}


const mapStateToProps = ({ post, comments}) => ({
    post,
    comments,
  
});


export default connect(mapStateToProps,  {getPostById, getCommentsById, adicionaComment } )(ViewDetalhePostagens);
