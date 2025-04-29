import { Link } from "react-router";

function Header() {
  return (
    <header className="h-20 flex justify-between items-center bg-gray-900 px-6">
      <h1 className="text-2xl font-bold">Belajar Basic React</h1>
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/profiles"}>Profiles</Link>
      </div>
    </header>
  );
}

export default Header;
