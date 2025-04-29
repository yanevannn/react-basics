import { useParams } from "react-router";
import Header from "../components/Header";

const ProfileDetailPage = () => {
  const params = useParams<string>();
  const username:string = params.username!;
  return (
    <>
      <Header />
      <div className="px-6 text-center">
        <p className="mt-10">Profile @{username.toLocaleUpperCase()}</p>
      </div>
    </>
  );
};

export default ProfileDetailPage;
