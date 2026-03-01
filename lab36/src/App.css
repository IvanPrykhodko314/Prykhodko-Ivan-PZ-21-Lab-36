import React from 'react';

function UserCard(props) {
  return (
    <div>
      <h2>User</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

function StyledText() {
  const textStyle = {
    color: 'red',
    fontSize: '18px',
    fontWeight: 'bold'
  };

  return (
    <p style={textStyle}>
      Stylized text that was reproduced by JSX in ReactJS
    </p>
  );
}

function BookList() {
  const books = [
    'Ring of water and fire',
    'Hobbit',
    'Odysseas',
    'Illiad'
  ];

  return (
    <div>
      <h2>Book list:</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
}

function TodoList({ tasks }) {
  return (
    <div>
      <h2>Todo list:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const myTasks = [
    'Finish homework',
    'Read a book',
    'Practice React',
    'Go for a walk'
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Homework</h1>

      <UserCard name="Ivan" age={16} />

      <StyledText />

      <BookList />

      <TodoList tasks={myTasks} />
    </div>
  );
}

export default App;
