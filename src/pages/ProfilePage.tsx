import { Link } from "react-router";
import Card from "../components/Card";
import Header from "../components/Header";

type DataAccount = {
  username: string;
  name: string;
  age?: number;
  description: string;
};

// example data array object
const Accounts: DataAccount[] = [
  {
    username: "xmadejay",
    name: "Made Jaya",
    age: 20,
    description: "Life is Easy",
  },
  {
    username: "kiroki",
    name: "Kiro Kinan",
    description: "keep it simple",
  },
  {
    username: "joysweat",
    name: "Komina Sweat",
    age: 23,
    description: "just do it",
  },
];

const ProfilePage = () => {
  return (
    <>
      <Header />
      {Accounts.map((Account) => {
        return (
          <Link to={"/profile/" + Account.username}>
            <Card
              key={Account.username}
              username={Account.username}
              name={Account.name}
              age={Account.age}
              description={Account.description}
            />
          </Link>
        );
      })}
    </>
  );
};

export default ProfilePage;
