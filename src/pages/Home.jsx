//Imports
import { useState, useEffect } from "react";

//Layouts
import Sideleft from "../layouts/sideleft";
import Quick_notes from "../layouts/Quick_notes";
import Aside_right from "../layouts/Aside_right";

export default function Home() {
  //States funtions
  const [quick_note_modal, setQuick_note_modal] = useState(false);
  useEffect(() => {
    const modal = document.getElementById("quick_note");

    const handleClose = () => {
      setQuick_note_modal(false);
    };

    modal?.addEventListener("close", handleClose);

    return () => modal?.removeEventListener("close", handleClose);
  }, []);

  return (
    <div className="grid grid-cols-5 h-screen overflow-hidden">
      {quick_note_modal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-40 transition-opacity"></div>
      )}
      <aside className="col-span-1 h-full mt-3 font-roboto">
        <Sideleft quick_note_modal={setQuick_note_modal} />
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
