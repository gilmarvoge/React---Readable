import React, { Component } from 'react';


class ViewEditarComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.editComentValues.body,
      author: this.props.editComentValues.author
    }
  }

  handleChange = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value
    });
  };

  editComment = e => {
    e.preventDefault();
    const comment = {
      body: this.state.body,
      author:this.state.author,
    };
    console.log("coment editado"+comment)
    this.props.editComment(comment);
  };

  render() {
    

    return (
      <form onSubmit={this.editComment}>
        <div >
          <label className='form-label-modal'>Comment</label>
        </div>
        <textarea className='form-input-modal' type="text" name="body" required value={this.state.body} onChange={this.handleChange('body')}></textarea>
        <div >
          <label className='form-label-modal' >Autor</label>
        </div>
        <div>
          <input className="form-input-modal" type="text" name="author" value={this.state.author} onChange={this.handleChange('author')}></input>
        </div>
        <button className="comment-button-editar" type="submit"> Submit </button>
      </form>
    );
  }
}


export default ViewEditarComment;
