//Icons
import like from "../assets/icons/like.png";
import comment from "../assets/icons/comment.png";

import layout from "../assets/icons/layout_quick.png";

const PaperLayout = () => (
  <div
    className="w-[550px] h-[240px] bg-no-repeat bg-contain bg-center text-black flex flex-col py-9 px-10 font-roboto mb-6 shadow-2xl"
    style={{ backgroundImage: `url(${layout})` }}
  >
    <h1 className="text-xl font-bold">Hola mundo</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro soluta
      doloremque nesciunt molestias. Harum dolorum alias iusto neque temporibus
      ad asperiores rerum optio.
    </p>
    <div className="mt-3 flex flex-row">
      <div className="flex flex-row justify-center items-center">
        <img src={comment} alt="like_icon" className="w-10 aspect-square" />
        <span>43</span>
      </div>
      <div className="flex flex-row justify-center items-center ml-3">
        <img src={like} alt="like_icon" className="w-10 aspect-square" />
        <span>15</span>
      </div>
    </div>
  </div>
);

export default PaperLayout;
