type ProfileCardData = {
  username: string;
  name: string;
  age?: number;
  description: string; //optional props add ( ? )
};

const Card = (props: ProfileCardData) => {
  const { username, name, age, description } = props;
  return (
    <>
      <div className="border-1 p-5 rounded-xl inline-block h-40 m-3">
        <div className="flex flex-col text-center">
          <h4 className="font-bold">{name}</h4>
          <p>@{username}</p>
          {age ? <p className="font-semibold text-sm">{age} Years</p> : <p className="font-semibold text-sm text-red-500">Private</p>}
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
