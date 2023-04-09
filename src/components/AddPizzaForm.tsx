import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";

const initState = {
  title: '',
  price: '',
  img: ''
}

const AddPizzaForm: FC = () => {
  const [newPizza, setNewPizza] = useState<{ title: string, price: string, img: string }>(initState)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('handle submit >> ', e.target);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewPizza({
      ...newPizza,
      [name]: value
    })
  }

  console.log('new pizza:', newPizza);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Цена"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изабражение"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">
        + Дабавить пиццу в меню
      </button>
    </form>
  )
}

export default AddPizzaForm;