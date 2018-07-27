import React, { Component } from 'react';



class FormComentario extends Component {
    render() {
        return (
            <form className="form-novo-comentario ">
                
                <div>
                    <label className='form-label-comentario'>Comentário</label>
                </div>
                <input className='form-input' type="text" id="title" required="" placeholder="Digite o Comentário" value=""></input>
                <div>
                 <label className='form-label-comentario'>Autor</label>
                </div>
                <input className="form-input" type="text" id="author" required="" placeholder="Digite o Autor" value=""></input>

                <div>
                    <button className="form-botao-submit" type="submit">Adicionar Comentário</button>
                </div>
            </form >
        )
    }
}
export default FormComentario;