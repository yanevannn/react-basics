import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Card names="Van" age={20} address="Bali"/>
      <Card names="Yan" age={15} />
    </>
  );
}

export default App;
