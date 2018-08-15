import React, { Component } from 'react';


class ViewEditarComment extends Component {
  constructor(props) {
    super(props);
    this.state = {      
    body:this.props.editComentValues.body,
    author:this.props.editComentValues.author
  }}

  handleChange = (propertyName) => (event) => {
    this.setState({
        [propertyName]: event.target.value
    });
};

  editComment = e => {
    e.preventDefault();
    this.props.editComment(this.state.comment);
  };

  render() {
    const body=this.props.editComentValues.body
    const author=this.props.editComentValues.author
    return (
      <form onSubmit={this.editComment}>
        <div >
          <label className='form-label-modal'>Comment</label>
        </div>
        <textarea className='form-input-modal' value={body} type="text" id="title" required placeholder="Digite o Comentário" value={body} onChange={this.handleChange('body')}></textarea>
        <div >
          <label className='form-label-modal' >Autor</label>
        </div>
        <div>
          <input className="form-input-modal" value={author} type="text" id="author" required placeholder="Digite o Autor" value={author} onChange={this.handleChange('author')}></input>
        </div>
        <button  type="submit"> Submit </button>
      </form>
    );
  }
}


export default ViewEditarComment;
