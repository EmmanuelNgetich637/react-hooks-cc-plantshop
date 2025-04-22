import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    
    const newPlant = {
      name: formData.name,
      image: formData.image || "https://via.placeholder.com/400",
      price: parseFloat(formData.price).toFixed(2)
    };
    
    onAddPlant(newPlant);
    setFormData({ name: "", image: "", price: "" });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL (optional)"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          min="0"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm