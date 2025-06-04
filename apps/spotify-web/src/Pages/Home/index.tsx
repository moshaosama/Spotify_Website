import Library from "../../Features/Home/Components/Library";
import useSaveUser from "../../Hooks/useSaveUser";

const Home = () => {
  useSaveUser();
  return (
    <>
      <Library />
    </>
  );
};

export default Home;
