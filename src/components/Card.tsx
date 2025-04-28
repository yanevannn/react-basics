const Card = () => {
  const name: string = "Vann";
  const age: number = 10;
  const addres: string = "Indonesia";

  return (
    <>
      <div className="card">
        <h4>My Names {name}</h4>
        <p>{age} year</p>
        <p>from {addres}</p>
      </div>
    </>
  );
};

export default Card;
