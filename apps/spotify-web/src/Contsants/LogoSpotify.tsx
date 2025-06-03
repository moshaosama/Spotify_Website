import { ImSpotify } from "react-icons/im";
import { Link } from "react-router";

export const LogoSpotify = () => {
  return (
    <Link to={"/"}>
      <ImSpotify className="text-white text-4xl w-fit cursor-pointer" />
    </Link>
  );
};
