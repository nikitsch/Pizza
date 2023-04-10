import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

const initState = {
  title: '',
  price: '',
  img: ''
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit()
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({
      ...editPizza,
      [name]: value
    })
  }

  console.log('edit pizza:', editPizza);

  return (
    <form
      className="edit-form"
      onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Цена"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изабражение"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">
        Сonfirm
      </button>
    </form>
  )
}

export default EditPizzaForm;