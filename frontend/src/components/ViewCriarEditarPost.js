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
            edit: '',
        };
    }

    componentDidMount() {
        this.fetchPostById() //fetch to take a post Id if have one to edit
    }

    fetchPostById() {
        const edit = this.props.match.params.postId; //if have post id, then have post to edit
        this.setState({ edit })

        if (edit) {
            this.props.getPostById(this.props.match.params.postId);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { title, body, author } = nextProps.post;
        this.setState({
            title,
            body,
            author,
        });
    }

    onSubmitEditPost = e => {
        e.preventDefault()
        if (this.state.edit) {
            const { category, title, author, body } = this.state;
            this.props.editPostById({
                id: this.props.post.id,
                category,
                author,
                title,
                body,
            });
            this.props.history.push("/");
        } else {
            const { category, title, author, body } = this.state;
            this.props.adicionaPost({
                category,
                author,
                title,
                body,
            });
            this.props.history.push("/");
        }
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value
        });
    };

    handleChangeCategory = (category) => (event) => {
        this.setState({
            category
        });
    };


    render() {
        const { title, body, author } = this.state;
        return (
            <div className="form-new-post">
                <div required>
                    <button className='post-botao-selecionar-categoria' name='category' onClick={this.handleChangeCategory('react')} required>React</button>
                    <button className='post-botao-selecionar-categoria' name='category' onClick={this.handleChangeCategory('redux')}>Redux</button>
                    <button className='post-botao-selecionar-categoria' name='category' onClick={this.handleChangeCategory('udacity')}>Udacity</button>
                </div>
                <form onSubmit={this.onSubmitEditPost} >
                    <div>
                        <label className='form-label'>Título</label>
                    </div>
                    <input className='form-input' type="text" id="title" placeholder="Digite o Título" value={title} onChange={this.handleChange('title')} required></input>
                    <div >
                        <label className='form-label'>Conteúdo</label>
                    </div>
                    <textarea className="form-textarea" type="text" id="body" placeholder="Digite o Conteúdo" value={body} onChange={this.handleChange('body')} required></textarea>

                    <div >
                        <label className='form-label'>Autor</label>
                    </div>
                    <input className="form-input" type="text" id="author" placeholder="Digite o Autor" value={author} onChange={this.handleChange('author')} required></input>
                    <div>
                        <button className="form-botao-submit" type="submit">Submit</button>
                    </div>
                </form >
            </div>
        )
    }
}

const mapStateToProps = ({ post }) => ({
    post,
});


export default connect(mapStateToProps, { getPostById, editPostById, adicionaPost })(ViewCriarEditarPost);
