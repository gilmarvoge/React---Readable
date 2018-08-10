import React, { Component } from 'react';
import { connect } from 'react-redux';


class ViewModalCriarEditarComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author: '',
            edit: '',
        };
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value
        });
    };

    onSubmitEditComment = e => {
    e.preventDefault();    
    const comment = {
      body: this.state.body,
      author: this.state.author,
    };
    this.props.addComment(comment);
    this.setState({
        body: '',
        author: '',
    });     
   }

    render() {
        const { body, author } = this.state;
       
        return (
            <div>
                <button type="botao-novo-comment" className="comment-botao-novo-comment" data-toggle="modal" data-target="#myModal">Novo Comment</button>
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div >
                                    <label className='form-label-modal'>Comment</label>
                                </div>
                                <textarea className='form-input-modal' type="text" id="title" required="" placeholder="Digite o Comentário" value={body} onChange={this.handleChange('body')}></textarea>
                                <div >
                                    <label className='form-label-modal'>Autor</label>
                                </div>
                                <input className="form-input-modal" type="text" id="author" required placeholder="Digite o Autor" value={author} onChange={this.handleChange('author')}></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.onSubmitEditComment}>Salvar</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ comment }) => ({
    comment,
});

export default connect(mapStateToProps)(ViewModalCriarEditarComment);

