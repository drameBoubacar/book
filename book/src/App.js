import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
        this.state = {
            book : []
        }
}
componentDidMount() {
    fetch('http://localhost:3333/simplonBook')
    .then(res => res.json())
    .then(body =>{
      this.setState({
          book : body
      })
    })
    .catch(err => {throw err})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form method="POST" action="http://localhost:3333/simplonBook/add">
          <input type="text" name="titre"/>
          <input type="text" name="auteur"/>
          <input type="text" name="année_de_publication"/>
          <input type="text" name="pages"/>
          <input type="text" name="date_de_creation"/>
          <button type="submit">Go</button>
          </form>

          {this.state.book.map(book => {
                return  <ul>
                          <li>titre{book.titre}</li>
                          <li>{book.auteur}</li>
                          <li>{book.année_de_publication}</li>
                          <li>{book.pages}</li>
                          <li>{book.date_de_creation}</li>
                       </ul>
                      
              }
            )}  
      </div>
    );
  }
}

export default App;
