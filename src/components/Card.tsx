type ProfileCardData = {
  names: string;
  age: number;
  address?: string; //optional props add ( ? )
  job?: string
};

const Card = (props: ProfileCardData) => {
  const { names, age, address, job = "Not Workking" } = props;
  return (
    <>
      <div className="card">
        <h4>My Names {names}</h4>
        <p>{age} year</p>
        {/* conditional rendering by value props 👇🏻 (if ternary)*/}
        {address ? <p>from {address}</p> : null}
        <p>{job}</p>
      </div>
    </>
  );
};

export default Card;
