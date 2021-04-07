class FontService {
  fonts = {
    poppins: {
      name: "Poppins",
      href:
        "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
    ubuntu: {
      name: "Ubuntu",
      href:
        "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
    },
    roboto: {
      name: "Roboto",
      href:
        "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
    },
  };

  weights = ["light", "normal", "bold", "bolder"];

  localStorageName = "valhalla-font";
  localStorageWeightName = "valhalla-font-weight";

  get dynamicLink() {
    return document.querySelector("#dynamic-font");
  }

  get localFontName() {
    const local = localStorage.getItem(this.localStorageName);
    if (local != null) {
      return local;
    } else {
      return this.fonts[Object.keys(this.fonts)[0]].name;
    }
  }

  get localFont() {
    const local = localStorage.getItem(this.localStorageName);
    if (local != null) {
      let isValidFont = false;
      let font = null;
      Object.values(this.fonts).map((item, index) => {
        if (item.name === local) {
          isValidFont = true;
          font = item;
        }
        return true;
      });
      return isValidFont ? font : this.fonts[Object.keys(this.fonts)[0]];
    } else {
      return this.fonts[Object.keys(this.fonts)[0]];
    }
  }

  get localWeight() {
    const weight = localStorage.getItem(this.localStorageWeightName);
    if (weight !== null) {
      return weight;
    } else {
      localStorage.setItem(this.localStorageWeightName, "normal");
      return "normal";
    }
  }

  weightFromIndex(index) {
    return this.weights[index];
  }

  fontFromIndex(index) {
    return this.fonts[Object.keys(this.fonts)[index]];
  }

  safeFont(font) {
    switch (font) {
      case "light":
        return 100;
      case "bolder":
        return 900;
      default:
        return font;
    }
  }

  init() {
    localStorage.setItem(this.localStorageName, this.localFontName);
    localStorage.setItem(this.localStorageWeightName, this.localWeight);
    this.dynamicLink.setAttribute("href", this.localFont.href);
  }
}

export default FontService;
