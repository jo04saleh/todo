const Header = () => {
  return (
    <header className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary fs-4" href="/">
          FickleFlight
        </a>

        <nav className="navbar-nav mx-auto d-none d-lg-flex">
          <a className="nav-link px-3" href="/explore">Explore</a>
          <a className="nav-link px-3" href="/search">Search</a>
          <a className="nav-link px-3" href="/hotels">Hotels</a>
          <a className="nav-link px-3" href="/offers">Offers</a>
        </nav>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary px-3">Login</button>
          <button className="btn btn-primary px-3">Sign up</button>
        </div>
      </div>
    </header>
  )
}

export default Header