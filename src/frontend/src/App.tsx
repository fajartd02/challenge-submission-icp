import { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');
  const [catFact, setCatFact] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    fetch(`${import.meta.env.VITE_CANISTER_URL}/greet?name=${name}`)
      .then(response => response.json()).then((json) => {
        setGreeting(json.greeting)
      });
  }

  function handleCat(event: any) {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_CANISTER_URL}/custom-cat-facts`)
    .then(response => response.json()).then((json) => {
      setCatFact(json.fact)
    });
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      <br/><br/>
      <h1>Custom Frontend Challenge 1 & 2</h1>
      <form onSubmit={handleCat}>
        <button type="submit">Click for cat fact!</button>
      </form>

      <section id="greeting">{catFact}</section>

    </main >
  );
}

export default App;
