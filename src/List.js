import React from "react";
import defaultImg from "./images/default.png";
const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <article key={person.id} className="person">
            <img src={person.image || defaultImg} alt="people" />
            <div className="info">
              <h3>{person.name}</h3>
              <h4>{person.age} years</h4>
              <button onClick={() => removeItem(person.id)}>Remove</button>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default List;
