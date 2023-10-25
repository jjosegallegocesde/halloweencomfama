import './Home.css'
export function Home() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Link
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">
                                        Disabled
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>

            </header>
            <div className="banner text-white fw-bold">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, consequuntur numquam aperiam recusandae qui explicabo? Eos temporibus voluptatum veniam maiores est, deleniti repellat fuga consequuntur earum quos distinctio optio maxime.</p>
                <button className='btn btn-warning'>Conocenos</button>
            </div>
            <div className="container">
                <div className="row p-5 justify-content-center">
                    <div className="col-4 align-self-center text-center">
                        <h5>LA CASITA DEL HORROR</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut ipsam nulla sequi accusantium, unde facilis voluptatibus ratione nisi sunt tenetur? Laborum nisi assumenda sunt, dignissimos consequatur nulla explicabo tempora?</p>
                        <img src="../../src/assets/img/foto2.jpg" alt="foto" className='img-fluid' />
                    </div>
                </div>
                <div className="row"></div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <img src="../../src/assets/img/banner3.png" alt="" className='img-fluid w-100'/>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 my-5">
                    <div className="col text-center">
                        <div className="card h-100 p-3 shadow">
                            <img src="../../src/assets/img/tarjeta1.webp" alt="" className='img-fluid w-100'/>
                            <h3>SERVICIO 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga enim earum dolores a animi atque nemo et asperiores, non expedita. Nam autem laboriosam obcaecati possimus eaque a corporis saepe!</p>
                            <hr />
                            <h5 className='fw-bold text-success'>$500.000 COP</h5>
                            <button className='btn btn-primary'>
                                Ampliar  <i className="bi bi-shop-window"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                    <div className="col text-center">
                        <div className="card h-100 p-3 shadow">
                            <img src="../../src/assets/img/tarjeta2.webp" alt="" className='img-fluid w-100'/>
                            <h3>SERVICIO 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga enim earum dolores a animi atque nemo et asperiores, non expedita. Nam autem laboriosam obcaecati possimus eaque a corporis saepe!</p>
                            <hr />
                            <h5 className='fw-bold text-success'>$500.000 COP</h5>
                            <button className='btn btn-primary'>
                                Ampliar  <i className="bi bi-shop-window"></i>
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="col text-center">
                        <div className="card h-100 p-3 shadow">
                            <img src="../../src/assets/img/tarjeta3.jpg" alt="" className='img-fluid w-100'/>
                            <h3>SERVICIO 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga enim earum dolores a animi atque nemo et asperiores, non expedita. Nam autem laboriosam obcaecati possimus eaque a corporis saepe!</p>
                            <hr />
                            <h5 className='fw-bold text-success'>$500.000 COP</h5>
                            <button className='btn btn-primary'>
                                Ampliar  <i className="bi bi-shop-window"></i>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container-fluid bg-dark text-white">
                    <div className="row p-5">
                        <div className="col-6 text-end border-end">
                            <h3>Pollos tenis de Mesa doña Angelica con pasarela y blood</h3>
                            <h5>Medellin-Colombia</h5>
                            <h5>Todos los derechos reservados &copy;</h5>
                        </div>
                        <div className="col-6 align-self-center">
                            <i className="bi bi-instagram p-2 fs-4"></i>
                            <i className="bi bi-whatsapp p-2 fs-4"></i>
                            <i className="bi bi-tiktok p-2 fs-4"></i>
                        </div>
                    </div>
                </div>
            </footer>
            
        </>
    )

}