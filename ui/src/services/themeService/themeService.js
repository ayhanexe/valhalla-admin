class ThemeService {
  localStorageName = "valhalla-theme";

  dark = {
    body: {
      backgroundColor: "#0D101E",
      color: "whitesmoke",
    },
    header: {
      background: "#161B32",
    },
    hellaComponents: {
      select: {
        background: "#0B0D19",
        itemBackground: "#111628",
        color: "whitesmoke",
        dropdownIconColor: "whitesmoke",
      },
      button: {
        background: "#0B0D19",
        itemBackground: "#111628",
        color: "whitesmoke",
      },
    },
    userArea: {
      background: "transparent",
      profileBackground: "#090B14",
      dropdownBackground: "#090B14",
      dropdownItemBackground: "#0E111E",
    },
    rightSidebar: {
      backgroundColor: "#161B32",
      rightSidebarItemBackground: "#0B0D19",
      rightSidebarItemColor: "white",
      rightSidebarItemChildBackground: "#111628",
      rightSidebarItemChildColor: "whitesmoke",
    },
    leftSidebar: {
      backgroundColor: "#161B32",
      leftSidebarItemBackground: "#0B0D19",
      leftSidebarItemColor: "white",
      leftSidebarItemChildBackground: "#111628",
      leftSidebarItemChildColor: "whitesmoke",
    },
  };

  light = {
    body: {
      backgroundColor: "#EBEBD9",
      color: "black",
    },
    header: {
      background: "#161B32",
    },
    hellaComponents: {
      select: {
        background: "#0B0D19",
        itemBackground: "#111628",
        color: "whitesmoke",
        dropdownIconColor: "whitesmoke",
      },
      button: {
        background: "#0B0D19",
        itemBackground: "#111628",
        color: "whitesmoke",
      },
    },
    userArea: {
      background: "transparent",
      profileBackground: "#090B14",
      dropdownBackground: "#090B14",
      dropdownItemBackground: "#0E111E",
    },
    rightSidebar: {
      backgroundColor: "#161B32",
      color: "whitesmoke",
      rightSidebarItemBackground: "#0B0D19",
      rightSidebarItemColor: "white",
      rightSidebarItemChildBackground: "#111628",
      rightSidebarItemChildColor: "whitesmoke",
    },
    leftSidebar: {
      backgroundColor: "#161B32",
      color: "whitesmoke",
      leftSidebarItemBackground: "#0B0D19",
      leftSidebarItemColor: "white",
      leftSidebarItemChildBackground: "#111628",
      leftSidebarItemChildColor: "whitesmoke",
    },
  };

  themes = [
    {
      name: "Dark Night",
      data: this.dark,
    },
    {
      name: "Light Side",
      data: this.light,
    },
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
