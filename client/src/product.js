import React, { useState, useEffect } from "react";

function Products() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("/vehicle")
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data);
      })
      .catch((error) => {
        console.error("Error fetching vehicles:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Our Products</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Vehicle Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id}>
              <td>{vehicle.name}</td>
              <td>{vehicle.price}</td>
              <td>{vehicle.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
