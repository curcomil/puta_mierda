//Icons
import home from "../assets/icons/home.png";
import publicar from "../assets/icons/publicar.png";
import archivo from "../assets/icons/archivo.png";

//Componentes
import layout from "../assets/icons/layout_quick.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Sideleft = ({ quick_note_modal, user }) => {
  //Form handler
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //States
  const [user_data, setUserdata] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(true);

  const titulo = watch("titulo", "");
  const nota = watch("nota", "");

  //Effects
  useEffect(() => {
    setUserdata(user || null);
    setIsAnonymous(!user);
  }, [user]);

  //Functions
  function openmodal(dark) {
    dark((prev) => !prev);
    document.getElementById("quick_note").showModal();
  }

  const onSubmit = (data) => {
    const notaEnviada = {
      ...data,
      autor: user_data && !isAnonymous ? user_data.username : "anon",
    };
    console.log("Nota enviada:", notaEnviada);
    reset();
    setIsAnonymous(!user_data);
    document.getElementById("quick_note").close();
  };

  return (
    <div className="h-full flex justify-center">
      {/* Botonera izquierda */}
      <div className="card bg-black/70 w-[100px] h-[400px] rounded-3xl flex flex-col p-3 text-gray-300 items-center justify-center shadow-2xl">
        <div className="flex flex-col items-center">
          <Link className="flex flex-col items-center" to="/">
            <img src={home} alt="home_icon" className="w-12 aspect-square" />
            <p>Home</p>
          </Link>
        </div>

        <div
          className="flex items-center flex-col mt-4 dropdown dropdown-right"
          tabIndex={0}
          role="button"
        >
          <img
            src={publicar}
            alt="publicar_icon"
            className="w-12 aspect-square"
          />
          <p>Publicar</p>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-black/90 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => openmodal(quick_note_modal)}>Nota</button>
            </li>
            <li>
              <Link to="/publicar?tipo=ensayo">Ensayo</Link>
            </li>
            <li>
              <Link to="/publicar?tipo=ilustración">Ilustración</Link>
            </li>
            <li>
              <Link to="/publicar?tipo=convocatoria">Convocatoria</Link>
            </li>
            <li>
              <Link to="/publicar?tipo=foro">Foro</Link>
            </li>
          </ul>
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

      {/* Modal de publicación rápida */}
      <dialog id="quick_note" className="modal">
        <div className="modal-box bg-[#1e1a18] p-0 max-w-[600px] w-fit rounded-xl">
          <form method="dialog">
            <button
              onClick={() => reset()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl text-white"
            >
              ✕
            </button>
          </form>

          <p className="font-punktype text-3xl text-gray-300 text-center pt-6">
            Nueva nota
          </p>

          {/* Toggle de anonimato */}
          {user_data ? (
            <label className="flex items-center space-x-2 text-sm mx-6 mt-4">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
                className="checkbox checkbox-sm"
              />
              <span>Publicar de forma anónima</span>
            </label>
          ) : (
            <div className="bg-[#e9d7b3] text-black text-sm rounded px-4 py-2 mx-6 mt-4 shadow-inner">
              ⚠️ Estás publicando de forma anónima.{" "}
              <a href="/login" className="underline hover:text-yellow-600">
                Inicia sesión
              </a>{" "}
              si quieres firmar tu nota.
            </div>
          )}

          {/* Formulario */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative w-[550px] h-[240px] mx-auto mt-4 mb-6"
            id="nota"
          >
            <img src={layout} className="w-full h-full" alt="layout" />

            <div className="absolute top-0 left-0 w-full h-full py-9 px-10 flex flex-col">
              <input
                {...register("titulo", {
                  required: "Título requerido",
                  maxLength: 50,
                })}
                placeholder="Título"
                className="bg-transparent text-xl font-bold text-black placeholder-gray-500 outline-none"
              />
              <div className="text-xs text-right text-gray-600">
                {titulo.length}/50
              </div>
              {errors.titulo && (
                <p className="text-xs text-red-500">{errors.titulo.message}</p>
              )}

              <textarea
                {...register("nota", {
                  required: "La nota no puede estar vacía",
                  maxLength: 350,
                })}
                placeholder="Escribe tu nota..."
                className="bg-transparent text-black placeholder-gray-500 outline-none resize-none mt-2 flex-1"
              />
              <div className="text-xs text-right text-gray-600">
                {nota.length}/350
              </div>
              {errors.nota && (
                <p className="text-xs text-red-500">{errors.nota.message}</p>
              )}
            </div>
          </form>
          <button
            type="submit"
            className="w-full text-center font-punktype text-2xl underline mb-3 text-gray-300"
            form="nota"
          >
            Publicar
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Sideleft;
