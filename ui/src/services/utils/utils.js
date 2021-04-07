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
}
