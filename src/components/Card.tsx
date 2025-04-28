type ProfileCardData = {
  names: string;
  age: number;
  address?: string; //optional props add ( ? )
  job?: string;
};

const Card = (props: ProfileCardData) => {
  const { names, age, address, job = "Not Working" } = props;
  return (
    <>
      <div className="border-1 p-5 rounded-xl inline-block h-40 m-3">
        <div className="flex flex-col">
          <h4 className="font-bold">My Names {names}</h4>
          <p>{age} year</p>
          {/* conditional rendering by value props 👇🏻 (if ternary)*/}
          {address ? <p>from {address}</p> : null}
          <p>{job}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
