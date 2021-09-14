import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./index.css";

const App = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const removeAll = () => {
    setPeople([]);
  };
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Enter a Name Please!")
    } else if(!age){
      alert("Enter Age Please!")
    }
  else {
      const newPerson = { name, age, id: Math.random().toString() };
      setPeople([newPerson, ...people]);
      setName("");
      setAge("");
    }
  };
  return (
    <main>
      <section className="container">
        <form onSubmit={submitHandeler}>
          <p>Add A New Person</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Person Name "
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Person Age"
          />
        
          <button className="add-btn" type="submit">
            Add Person
          </button>
        </form>
        <h2> {people.length} Persons Birthday Remaining</h2>
        <List people={people} removeItem={removeItem} />
        {people.length > 1 ? (
          <button onClick={removeAll}>Clear All</button>
        ) : null}
      </section>
    </main>
  );
};
export default App;
