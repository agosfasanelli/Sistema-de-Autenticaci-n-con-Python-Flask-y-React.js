import React, { useState, useEffect } from "react";

const RegisterUser = () => {
  const [dataUser, SetDataUser] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/user")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
      });
  }, []);

  const handleChange = (event) => {
    SetDataUser({ ...dataUser, [event.target.email]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/user", {
      methods: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="container col-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
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
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterUser;
