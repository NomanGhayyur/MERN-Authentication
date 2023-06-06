import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = user;

    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      if (res.status === 4000 || !res) {
        window.alert("Already registered");
      } else {
        window.alert("Registration successful");
        navigate.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Welcome</h1>
            <p className="lead text-center">Enter Your Details To Register</p>
            <h5 className="mb-5">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">Register</h1>
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary w-100 mt-4 rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
