import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Card from "./components/Card";

type PersonData = {
  name: string;
  age: number;
  address?: string;
  job?: string;
  key: number;
};

// example data array object
const PersonDatas: PersonData[] = [
  {
    name: "Van",
    age: 25,
    address: "Bali",
    job: "Programmer",
    key: 1
  },
  {
    name: "Rio",
    age: 21,
    job: "Student",
    key:2
  },
  {
    name: "Koi",
    age: 20,
    address: "Jawa",
    key:3
  },
];

function App() {
  return (
    <>
      <Header />
      <Welcome />
      {PersonDatas.map((PersonData) => {
        return (
          <Card
            names={PersonData.name}
            age={PersonData.age}
            address={PersonData.address}
            job={PersonData.job}
            key={PersonData.key}
          />
        );
      })}
    </>
  );
}

export default App;
