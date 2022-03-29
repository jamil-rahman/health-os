/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


function Navbar({ isSearchBar }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light px-4 py-3 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="#">
            Mano Super Market
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Payments
                </a>
              </li>

            </ul>
                            {/* render my searchbar based on the prop status */}
                            { isSearchBar && (<form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              )}
            <div>
              <a href="" className="btn btn-custom">
              <i class="fa fa-book me-1"></i>Pending Orders (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
