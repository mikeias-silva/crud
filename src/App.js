import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import CadastrarLivros from "./components/CadastrarLivros";
import { NotFound } from "./components/NotFound";
import { EditarLivros } from "./components/EditarLivros";


class App extends Component {


  state = {
    livros: []
  };

  inserirLivro = (livro) => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro]
    });

    const newLivro = JSON.stringify([...this.state.livros, livro])
    console.log(newLivro);
    localStorage.setItem('livros', newLivro);

    // let localStorageLivros = JSON.parse(localStorage.getItem("livros"));
    // if (localStorageLivros) {

    //   // console.log(localStorageLivros);
    //   // localStorageLivros = JSON.stringify(localStorageLivros)
    //   // console.log(localStorageLivros);
    //   const newLivro = [...{ titulo: 'starwars' }, JSON.stringify(livro)];
    //   console.log(newLivro);
    //   localStorage.setItem('livros', newLivro);
    // } else {
    //   localStorage.setItem('livros', JSON.stringify(livro));
    // }

    // this.localLivros();
  };


  // componentWillUpdate(nextProps, nextState) {
  //   console.log(nextState);
  //   localStorage.setItem('livros', JSON.stringify(nextState.livros))
  // }
  // componentWillMount() {
  //   localStorage.getItem('livros') && this.setState({ livros: JSON.parse(localStorage.getItem('livros')) })
  // }


  editarLivro = (livro) => {
    const index = this.state.livros.findIndex(p => p.id === livro.id);
    const livros = this.state.livros
      .slice(0, index)
      .concat(this.state.livros.slice(index + 1));
    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id);

    this.setState({
      livros: newLivros
    })
  }

  removerLivro = livro => {
    if (window.confirm('Remover esse livro?')) {
      const livros = this.state.livros.filter(p => p.isbn !== livro.isbn)
      this.setState({ livros })
    }
  }



  render() {
    return (
      <div className="app">
        <Router>
          <Menu />
          <Routes>
            <Route path="/" element={<TabelaLivros livros={JSON.parse(localStorage.getItem('livros'))} removerLivro={this.removerLivro} />} />
            <Route path="/cadastrar" element={<CadastrarLivros inserirLivro={this.inserirLivro} livro={{ id: 0, isbn: "", titulo: "", autor: "" }} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/editar/:isbnLivro"
              element={<EditarLivros livros={this.state.livros} editarLivro={this.editarLivro} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
