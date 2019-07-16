import React, { useState, useContext, useEffect } from 'react';
import Row from './Row';

export default function Greeting() {
 const [name, setName] = useState('Tom');

 function handleNameChange(e) {
   setName(e.target.value)
 }

  return (
    <section >
      <Row label="Name">
        <input value = {name} onChange={handleNameChange} />
      </Row>
    </section>
  );

}

