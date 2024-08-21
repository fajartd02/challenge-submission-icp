import { useState } from 'react';

function App() {
  const [catFact, setCatFact] = useState('');
  function handleCat(event: any) {
    event.preventDefault();
    fetch(`${import.meta.env.VITE_CANISTER_URL}/custom-cat-facts`, { method: "POST"})
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response);
      return response.json();
    })
    .then((json) => {
      setCatFact(json.fact)
    })
    .catch((error) => {
      console.error("Error fetching cat fact:", error);
      setCatFact("Error fetching cat fact. Please try again later.");
    });
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br/><br/>
      <h1>Custom Frontend Challenge 1 & 2</h1>
      <p>Wait it 30s - 5 minutes after click. its on query....</p>
      <form onSubmit={handleCat}>
        <button type="submit">Click for cat fact!</button>
      </form>

      <section id="greeting">{catFact}</section>

    </main >
  );
}

export default App;
