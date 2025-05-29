//Icons
import desahogo_icon from "../assets/icons/deshogos_icon.png";
import rabia from "../assets/icons/rabia_y_argumento.png";
import no_es_diseño from "../assets/icons/no_es_diseño_icon.png";
import nos_vemos_en_la_calle from "../assets/icons/nos_vemos_en_calle_icon.png";
import la_banqueta from "../assets/icons/la_banqueta.png";

import { Link } from "react-router-dom";

const Aside_right = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="main_card text-gray-300 bg-black/70 p-3 rounded-3xl py-8 w-[200px]">
        <div className="">
          <Link to="/deshagos" className="flex flex-row items-end">
            <img className="w-12 h-16" src={desahogo_icon} alt="" />
            <div className="tooltip tooltip-bottom" data-tip="Notas">
              <p className="ml-2">Desahogos</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/rabia" className="flex flex-row items-end mt-5">
            <img className="w-12 h-16" src={rabia} alt="" />
            <div className="tooltip" data-tip="Ensayos">
              <p className="ml-2">Rabia y argumentos</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/diseño" className="flex flex-row items-end mt-5">
            <img className="w-12 aspect-square" src={no_es_diseño} alt="" />
            <div className="tooltip" data-tip="Ilustraciones">
              <p className="ml-2">No es diseño</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/convocatorias" className="flex flex-row items-end mt-5">
            <img
              className="w-12 aspect-square"
              src={nos_vemos_en_la_calle}
              alt=""
            />
            <div className="tooltip" data-tip="Convocatorias">
              <p className="ml-2">Nos vemos en la calle</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/banqueta" className="flex flex-row items-end mt-5">
            <img className="w-12 aspect-square" src={la_banqueta} alt="" />
            <div className="tooltip" data-tip="Discusiones">
              <p className="ml-2">La banqueta</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Aside_right;
