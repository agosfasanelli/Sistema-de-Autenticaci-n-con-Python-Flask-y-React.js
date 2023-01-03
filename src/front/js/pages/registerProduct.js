import React, { useState } from "react";

const RegisterProduct = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container col-8 mt-5">
      <h2>Registro de Producto</h2>
      <div className="mb-3 row">
        <label htmlFor="inputName" className="col-sm-2 col-htmlForm-label">
          Nombre
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="htmlForm-control"
            id="inputName"
            name="name"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputName" className="col-sm-2 col-htmlForm-label">
          Precio
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="htmlForm-control"
            id="inputPrice"
            name="price"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputName" className="col-sm-2 col-htmlForm-label">
          Categoria
        </label>
        <div className="col-sm-10">
          <select
            className="htmlForm-select"
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputName" className="col-sm-2 col-htmlForm-label">
          Stock
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="htmlForm-control"
            id="inputStock"
            name="stock"
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="button" className="btn btn-primary">
        Registrar
      </button>
    </div>
  );
};

export default RegisterProduct;
