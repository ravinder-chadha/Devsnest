import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateUser } from "../actions/index";


function NavbarFunction() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
  }, [])
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/img/insta.png" />
          </a>
          <div className="search">
            <input type="text" className="form-control" placeholder="Search" />
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <i className="bi bi-house-door-fill"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-chat"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-compass"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-heart"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <img src={user.profilePicture} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavbarFunction;
