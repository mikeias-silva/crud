import React from 'react'
import { Link } from 'react-router-dom';

const TabelaLivros = ({ livros, removerLivro }) => {
    return (
        <div className="livros">
            <h1>Tabela de livros</h1>
            {livros.length === 0 && <h2>Nenhum livro cadastrado!</h2>}
            {livros.length > 0 && (
                <table className="tabela">
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th width="7%"></th>
                            <th width="9%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(item => (
                            <tr key={item.isbn}>
                                <td>{item.isbn}</td>
                                <td>{item.titulo}</td>
                                <td>{item.autor}</td>
                                <td>
                                    <button className='botao editar'><Link to={`editar/${item.isbn}`}>Editar</Link></button>
                                </td>
                                <td>
                                    <button className="botao remover" onClick={() => {
                                        removerLivro(item);
                                    }}>Remover</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default TabelaLivros