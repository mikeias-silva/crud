
import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import CadastrarLivros from './CadastrarLivros';

export const EditarLivros = ({ livros, editarLivro }) => {


 
    const { isbnLivro } = useParams();
    const livro = livros.find(
        livro => livro.isbn === isbnLivro
    );
    if (livro) {
        return (
            <CadastrarLivros editarLivro={editarLivro} livro={livro} />
        )
    } else {
        return <Navigate to="/" />
    }
}
