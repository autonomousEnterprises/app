import { defineStore } from "pinia";
import { Icon } from "../base-components/Lucide/Lucide.vue";

export interface Menu {
  icon: Icon;
  title: string;
  pageName?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

export const useSideMenuStore = defineStore("sideMenu", {
  state: (): SideMenuState => ({
    menu: [
      {
        icon: "Activity",
        pageName: "AI",
        title: "AI",
      },
      {
        icon: "Airplay",
        pageName: "Hub",
        title: "Hub",
      },
      {
        icon: "Calculator",
        pageName: "Calculator",
        title: "Calculator",
      },
      {
        icon: "Coins",
        pageName: "Exchange",
        title: "Exchange",
      },
      {
        icon: "LayoutGrid",
        pageName: "Businesses",
        title: "Businesses",
      },
      {
        icon: "Network",
        pageName: "Pro",
        title: "Pro",
      },
    ],
  }),
});
