import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Card names="Van" age={20} address="Bali" job="programmer"/>
      <Card names="Rio" age={15} job="student"/>
      <Card names="Koi" age={20} address="Bali"/>
    </>
  );
}

export default App;
