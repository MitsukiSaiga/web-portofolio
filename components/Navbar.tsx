import Link from "next/link";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#3D5656'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{fontWeight: 'bold'}}>Ilham Saputra</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link {`}" aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/education">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/organization">Organization</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/project">Project</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;