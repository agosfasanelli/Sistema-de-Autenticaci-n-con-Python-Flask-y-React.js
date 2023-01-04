import React, { useState, useEffect } from "react";

const RegisterProduct = () => {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/category")
      .then((response) => response.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.BACKEND_URL + "/api/product", {
      methods: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="container col-8 mt-5">
      <h2>Registro de Producto</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="inputPrice" className="col-sm-2 col-htmlForm-label">
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
          <label
            htmlFor="inputCategory"
            className="col-sm-2 col-htmlForm-label"
          >
            Categoria
          </label>
          <div className="col-sm-10">
            <select
              className="htmlForm-select"
              aria-label="Default select example"
              name="category"
              onChange={handleChange}
            >
              <option disabled selected>
                select a category
              </option>
              {categories.map((value, index) => {
                return (
                  <option key={index} value={value.id}>
                    {value.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputStock" className="col-sm-2 col-htmlForm-label">
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
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterProduct;
