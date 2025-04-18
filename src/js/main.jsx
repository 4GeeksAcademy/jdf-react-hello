import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

function NavBar(){
  return <nav className=" navbar navbar-expand-lg  bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Borrachera</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Cogorza</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Melopea</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
};

function Jumbotron() {
  return <div className="jumbotron">
  <h1 className="display-4">Ey que pasa?!</h1>
  <p className="lead">Desde los que aprobaron recreo pero suspendieron en proyecto hombre llega... </p>
  
  <p>CH3-CH2OH</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
};

function Card({ title, text, image }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-center text-light py-3 mt-4">
      <p>No estoy loco, mi mamá me hizo pruebas</p>
    </footer>
  );
}


export { NavBar, Jumbotron, Card, Footer };



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
