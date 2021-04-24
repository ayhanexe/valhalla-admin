import * as themeDatas from "./themeDatas/";

class ThemeService {
  localStorageName = "valhalla-theme";
  themes = [
    ...Object.keys(themeDatas).map((themeData) => {
      return {
        name: themeDatas[themeData].themeName ?? "",
        data: themeDatas[themeData].data ?? {},
      };
    }),
  ];

  setTheme(index) {
    localStorage.setItem(this.localStorageName, index);
  }

  getCurrentThemeIndex() {
    if (localStorage.getItem(this.localStorageName)) {
      this.setTheme(localStorage.getItem(this.localStorageName));
      return localStorage.getItem(this.localStorageName);
    } else {
      this.setTheme(0);
      return 0;
    }
  }

  getCurrentTheme() {
    const index = this.getCurrentThemeIndex();
    return this.themes[index];
  }

  getTheme(index) {
    return this.themes[index] ? this.themes[index].data : this.themes[0].data;
  }

  getAndSetTheme(index) {
    const theme = this.getTheme(index);
    localStorage.setItem("valhalla-theme", index);
    return theme;
  }
}

export default ThemeService;
