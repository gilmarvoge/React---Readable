import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adicionaPost, getPostById, editPostById } from '../actions/PostsActions'

class ViewCriarEditarPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'react',
            title: '',
            body: '',
            author: '',
        };
    }

    componentDidMount() {
        this.props.getPostById(this.props.match.params.postId);
    }

    componentWillReceiveProps(nextProps) {
        const { category, title, body, author } = nextProps.post;
        this.setState({
            // category,
            title,
            body,
            author,

        });
    }

    onSubmitEditNewPost = e => {
        e.preventDefault();
        const { category, title, author, body } = this.state;
        this.props.editPostById({
            id: this.props.post.id,
            category,
            author,
            title,
            body,
            author,
        });

    }

    onSubmitNewPost = e => {
        const isNew = this.props.match.params;

  
            const { category, title, author, body } = this.state;
            this.props.adicionaPost({
                category,
                author,
                title,
                body,
                author,
            });
        
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value
        });
    };


    render() {
        const { category, title, body, author } = this.state;

       
        return (
            <form onSubmit={this.onSubmitNewPost} className="form-new-post">
                <button className='post-botao-selecionar-categoria' name="botao" >React</button>
                <button className='post-botao-selecionar-categoria' name="botao">Redux</button>
                <button className='post-botao-selecionar-categoria' name="botao">Udacity</button>
                <div>
                    <label className='form-label'>Título</label>
                </div>
                <input className='form-input' type="text" id="title" required placeholder="Digite o Título" value={title} onChange={this.handleChange('title')}></input>
                <div >
                    <label className='form-label'>Conteúdo</label>
                </div>
                <textarea className="form-textarea" type="text" id="body" required placeholder="Digite o Conteúdo" value={body} onChange={this.handleChange('body')}></textarea>

                <div >
                    <label className='form-label'>Autor</label>
                </div>
                <input className="form-input" type="text" id="author" required placeholder="Digite o Autor" value={author} onChange={this.handleChange('author')}></input>

                <div>
                    <button className="form-botao-submit" type="submit">Submit</button>
                </div>
            </form >
        )
    }
}

const mapStateToProps = ({ post }) => ({
    post,
});


export default connect(mapStateToProps, { getPostById, editPostById, adicionaPost })(ViewCriarEditarPost);
