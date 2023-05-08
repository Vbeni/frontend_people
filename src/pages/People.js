import React from 'react';


import { useState } from 'react'

function People(props) {

	// The return contains the rest of your component logic

 const loaded = () => {
    return people?.map((person) => {
      return (
        <div key={person._id}>
          <h1>{person.name}</h1>
          <img src={person.image} />
          <h3>{person.title}</h3>
        </div>
      );
    });
  };

  const loading = () => (
    <section className="people-list">
      <h1>
        Loading...
        <span>
          <img
            className="spinner"
            src="https://freesvg.org/img/1544764567.png"
          />{" "}
        </span>
      </h1>
    </section>
  );

  return (
    <section className="people-list">{people && people.length ? loaded() : loading()}</section>
  );
}

export default People
