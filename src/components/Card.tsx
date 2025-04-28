type ProfileCardData = {
  names: string;
  age: number;
  address?: string; //optional props add ( ? )
};

const Card = (props: ProfileCardData) => {
  return (
    <>
      <div className="card">
        <h4>My Names {props.names}</h4>
        <p>{props.age} year</p>
        {/* conditional rendering by value props 👇🏻 (if ternary)*/}
        {props.address ? <p>from {props.address}</p> : null}
      </div>
    </>
  );
};

export default Card;
