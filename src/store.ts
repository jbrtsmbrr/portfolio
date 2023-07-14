import { create } from "zustand";
import { TMenuItem } from "./types";

type Ref = { ref: any };
type TStore = {
  currentSection: TMenuItem,
  setCurrentSection: (section: TMenuItem, flag?: Boolean) => any
}

const useStore = create<TStore>((set) => ({
  currentSection: { name: "Home" },
  setCurrentSection: (section: TMenuItem, flag: Boolean = true) => {
    let element: any = document.querySelector(`#${section.name}`);
    let headerOffset: any = document.getElementById("header-navigation")?.offsetHeight;
    let elementYOffset = element?.getBoundingClientRect().top;
    let yOffsetPosition = elementYOffset + window.pageYOffset - (headerOffset + 18);

    if (flag)
      window.scrollTo({
        behavior: 'smooth',
        top: element ? yOffsetPosition : 0
      });

    if (element)
      set(() => ({ currentSection: section }))
  }
}))

export default useStore;