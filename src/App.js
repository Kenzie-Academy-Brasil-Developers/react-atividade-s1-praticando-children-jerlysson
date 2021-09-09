import CenteredCard from "./components/CenteredCard";
import "./App.css";

function App() {
  const eu = ["exemplo 1", "exemplo 2", "exemplo 3"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercicios de Childr</h1>
      </header>
      {eu.map((ex, key) => (
        <CenteredCard key={key}>{ex}</CenteredCard>
      ))}
    </div>
  );
}

export default App;
