

import React from 'react';
import Accordion from './Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end JavaScript library for building user interfaces.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite among developers for its simplicity and flexibility.',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components. Components are the building blocks of a React application.',
  },
];

const App = () => {
  return (
    <div className="ui container">
      <h2>REACT INFORMATION</h2>
      <Accordion items={items} />
    </div>
  );
};

export default App;

