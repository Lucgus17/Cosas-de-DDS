import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Álbumes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to="/albumes">Listar Albumes</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu;