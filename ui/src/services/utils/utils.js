export default class ValhallaUtils {
  fixedLeftSidebarLocalName = "valhalla-fixed-left-sidebar";

  setLocal(item, data) {
    localStorage.setItem(item, data);
  }

  closest(element, query) {
    while (element && element.parentNode) {
      element = element.parentNode;
      const q = element.querySelector(query);

      if (q) {
        return q;
      }
    }

    return null;
  }

  calculateDropdown(dropdown) {
    const dropdownStyles = window.getComputedStyle(dropdown);
    const children = dropdown.children;
    let height = 0;
    if (children) {
      Array.prototype.slice.call(children).forEach((item, index) => {
        const itemStyles = window.getComputedStyle(item);
        height +=
          parseInt(itemStyles.height) +
          parseInt(itemStyles.marginTop) +
          parseInt(itemStyles.marginBottom);
      });
      height +=
        parseInt(dropdownStyles.paddingTop) +
        parseInt(dropdownStyles.paddingBottom);
    }
    return height;
  }

  clearStyles(element) {
    return element.setAttribute("style", "");
  }

  generateBackground(options) {
    const gradients = [
      ["#FF3254", "rgba(255,123,0, 0.25)"],
      ["#FF622D", "rgba(255,224,50, 0.25)"],
      ["#BCFF05", "rgba(65,255,100, 0.25)"],
      ["#41FF64", "rgba(0,242,255, 0.25)"],
      ["#00F2FF", "rgba(30,97,2550, 0.25)"],
      ["#1E61FF", "rgba(128,10,255, 0.25)"],
      ["#800AFF", "rgba(213,5,255, 0.25)"],
      ["#D505FF", "rgba(255,75,147, 0.25)"],
      ["#FF4B93", "rgba(255,50,64, 0.25)"],
    ];
    if (!options?.gradientBackground) {
      if (options?.fill) {
        return this.props.options.fill;
      } else {
        return "whitesmoke";
      }
    } else {
      const color = gradients[Math.floor(Math.random() * gradients.length)];
      return color;
    }
  }

  validateChartData(data) {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        if (isNaN(parseInt(data[i]))) {
          throw new Error(
            'Data\'s content must be only number! or string number like "321"'
          );
        }
      }
      return true;
    } else {
      throw Error("Data's type must be array!");
    }
  }
}
