import React, { useState} from 'react';
import Row from './Row';

export default function Greeting() {
 const [name, setName] = useState('Tom');

 function handleNameChange(e) {
   setName(e.target.value)
 }

  return (
    <section >
      <h1>* React Hook Demo *</h1>
      <Row label="Name">
        <input value = {name} onChange={handleNameChange} />
      </Row>
    </section>
  );

}

