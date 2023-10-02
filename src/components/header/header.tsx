import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { mainPages } from "../../pages/pages-config";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className="pt-3 pb-3 bg-dark">
      <Container>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start m-1">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {Object.keys(mainPages).map((pageId: string) => {
              return (
                <li key={pageId}>
                  <NavLink
                    to={mainPages[pageId].path}
                    className={({ isActive }: { isActive: boolean }) => {
                      return `nav-link px-2 text-white ${
                        isActive ? styles.active : ""
                      }`;
                    }}
                  >
                    {mainPages[pageId].name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

