//Layouts
import Sideleft from "../layouts/sideleft";
import Quick_notes from "../layouts/Quick_notes";
import Aside_right from "../layouts/Aside_right";

export default function Home() {
  return (
    <div className="grid grid-cols-5 h-screen overflow-hidden">
      <aside className="col-span-1 h-full mt-3 font-roboto">
        <Sideleft />
      </aside>
      <main className="feed_main col-span-3 h-full overflow-y-auto mt-3">
        <Quick_notes />
      </main>
      <aside className="col-span-1 h-full font-roboto">
        <div className="mt-3 w-full flex">
          <Aside_right />
        </div>
      </aside>
    </div>
  );
}
