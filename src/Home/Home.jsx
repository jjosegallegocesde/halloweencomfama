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
                <div className="row">
                    <div className="col-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid ipsam eligendi pariatur cum enim consectetur nostrum molestiae libero modi ab obcaecati neque sit iusto ex voluptatem quae explicabo aliquam et, quis dolore nesciunt vitae! Tenetur delectus, veniam expedita veritatis ea quae doloribus voluptatibus eius? Eius eveniet delectus accusamus ex est architecto fugit numquam, inventore voluptatibus dolores deleniti illum laudantium possimus voluptatem voluptate repudiandae magnam. Quas culpa, nihil repellendus iure magnam dignissimos ullam vitae aliquam minus, sed optio enim! Nemo, ratione quos odio saepe nisi quam, quasi neque dolores voluptates velit modi voluptatum autem animi, reiciendis labore natus optio fugit?</p>
                    </div>
                </div>
            </div>
        </>
    )

}