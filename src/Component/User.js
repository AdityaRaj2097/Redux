// let resp = await fetch("https://react-backend101.herokuapp.com/genres");

import React, { useState, useEffect } from "react";

function User() {
  console.log(" in users");
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);
  useEffect(async () => {
    try {
      console.log("try block");

      let resp = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await resp.json();
      console.log(users);
      setloading(false);
      setUser(users);
    } catch (err) {
      setloading(false);
      setError(err.message);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <h2> loading...</h2>
      ) : error ? (
        <h2> {error.message} </h2>
      ) : (
        <div>
          <h2>user fech form databse</h2>

          <ul>
            {user.map((person) => {
              return <li key={person.id}>{person.name} </li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default User;
