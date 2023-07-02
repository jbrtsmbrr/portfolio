import { create } from "zustand";
import { TMenuItem } from "./types";

// const handlePageNavigation = (section: TMenuItem) => {
//   let element: any = document.getElementById(section.name);
//   let headerOffset: any = document.getElementById("header-navigation")?.offsetHeight;
//   let elementYOffset = element?.getBoundingClientRect().top;
//   let yOffsetPosition = elementYOffset + window.pageYOffset - (headerOffset + 18);
//   window.scrollTo({
//     behavior: 'smooth',
//     top: element ? yOffsetPosition : 0
//   });

//   setSelected(!element ? { name: "Home" } : section)
// }

const useStore = create<{ currentSection: TMenuItem, setCurrentSection: (section: TMenuItem) => any }>((set) => ({
  currentSection: { name: "Home" },
  setCurrentSection: (section: TMenuItem, flag: Boolean = true) => {
    let element: any = document.getElementById(section.name);
    let headerOffset: any = document.getElementById("header-navigation")?.offsetHeight;
    let elementYOffset = element?.getBoundingClientRect().top;
    let yOffsetPosition = elementYOffset + window.pageYOffset - (headerOffset + 18);

    if (flag)
      window.scrollTo({
        behavior: 'smooth',
        top: element ? yOffsetPosition : 0
      });

    // set(() => !element ? ({ currentSection: section }) : ({ currentSection: section }))
    if (element)
      set(() => ({ currentSection: section }))
  }
}))

export default useStore;