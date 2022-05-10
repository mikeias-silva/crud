import React from 'react'
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <>
            <h1>404!</h1>
            <p>
                Lamento: mas esta página não existe ou foi removida
                <Link to="/">Voltar para a tabela de livros</Link>
            </p>
        </>
    )
}
