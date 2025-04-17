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
  return <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
};

function Jumbotron() {
  return <div class="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
};

function Card () {
   <div className="card" style="width: 18rem;">
   <img src="..." class="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">Card title</h5>
     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" className="btn btn-primary">Go somewhere</a>
   </div>
 </div>
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
