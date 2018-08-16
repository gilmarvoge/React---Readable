import React, { Component } from 'react';
import { connect } from 'react-redux';

const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
};
// The modal "window"
const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 700,
    minHeight: 200,
    margin: '0 auto',
    padding: 30
};
const button = {
    marginLeft: 100,
    margin: 20,
};

class ViewModalCriarEditarComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author: '',
            edit: '',
            open: false,
        };
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value
        });
    };

    onSubmitNewEditComment = e => {
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
        const data1 = JSON.stringify(this.props.show)
        console.log('children '+data1)
       
        const { body, author } = this.state;
        if (!this.props.show) {
            return null;
        }
        
        //this.state.open = this.props.open;
        return (
            <form onSubmit={this.onSubmitNewEditComment}>
                
                <div style={backdropStyle}>
                    <div style={modalStyle}>
                        <div >
                            <label className='form-label-modal'>Comment</label>
                        </div>
                        <textarea className='form-input-modal' type="text" id="title" required placeholder="Digite o Comentário" value={body} onChange={this.handleChange('body')}></textarea>
                        <div >
                            <label className='form-label-modal' >Autor</label>
                        </div>
                        <div>
                            <input className="form-input-modal" type="text" id="author" required placeholder="Digite o Autor" value={author} onChange={this.handleChange('author')}></input>
                        </div>
                        <button type="submit" className="btn btn-default" style={button}>Salvar</button>
                        <button type="button" className="btn btn-default" style={button} onClick={this.props.onClose}>Fechar</button>
                    </div>
                </div >
            </form>
        )
    }
}

const mapStateToProps = ({ comment }) => ({
    comment,
});

export default connect(mapStateToProps)(ViewModalCriarEditarComment);

