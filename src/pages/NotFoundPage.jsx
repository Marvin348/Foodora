import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-xl">
      <h1>Hoppla! Diese Seite gibt es nicht.</h1>
      <p>Sorry, wir konnten diese Seite nicht finden</p>
      <Link className="bg-black text-white p-2 mt-2 rounded-2xl" to="/"> Foodora Home</Link>
    </div>
  );
};
export default NotFoundPage;
