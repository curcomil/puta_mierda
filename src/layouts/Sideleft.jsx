//Icons
import home from "../assets/icons/home.png";
import publicar from "../assets/icons/publicar.png";
import archivo from "../assets/icons/archivo.png";

import { Link } from "react-router-dom";

const Sideleft = () => {
  return (
    <div className="h-full flex justify-center">
      <div className="card bg-black/70 w-[100px] h-[400px] rounded-3xl flex flex-col p-3 text-gray-300 items-center justify-center shadow-2xl">
        <div className="flex flex-col items-center">
          <Link className="flex flex-col items-center" to="/">
            <img src={home} alt="home_icon" className="w-12 aspect-square" />
            <p>Home</p>
          </Link>
        </div>
        <div className="flex items-center flex-col mt-4">
          <Link className="flex flex-col items-center" to="/publicar">
            <img
              src={publicar}
              alt="publicar_icon"
              className="w-12 aspect-square"
            />
            <p>Publicar</p>
          </Link>
        </div>
        <div className="flex flex-col mt-4">
          <Link to="/archivo" className="flex flex-col items-center">
            <img
              src={archivo}
              alt="archivo_icon"
              className="w-12 aspect-square"
            />
            <p>Archivo</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sideleft;
