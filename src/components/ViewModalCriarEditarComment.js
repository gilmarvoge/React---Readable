import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adicionaPost, getPostById, editPostById } from '../actions/PostsActions'

class ViewModalCriarEditarComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author: '',
        };
    }
    handleChange = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value
        });
    };


    render() {
        const { body, author } = this.state;
        return (
            <div>
                <button type="botao-novo-comment" class="comment-botao-novo-comment" data-toggle="modal" data-target="#myModal">Novo Comment</button>
                <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                               
                            </div>
                            <div class="modal-body">
                                <div >
                                    <label className='form-label-modal'>Comment</label>
                                </div>
                                <textarea className='form-input-modal' type="text" id="title" required="" placeholder="Digite o Comentário" value={body} onChange={this.handleChange('body')}></textarea>
                                <div >
                                    <label className='form-label-modal'>Autor</label>
                                </div>
                                <input className="form-input-modal" type="text" id="author" required placeholder="Digite o Autor" value={author} onChange={this.handleChange('author')}></input>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Salvar</button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewModalCriarEditarComment