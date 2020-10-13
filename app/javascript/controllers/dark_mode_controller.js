import { Controller } from "stimulus";

function initTheme(darkSwitch) {
  const darkThemeSelected =
    localStorage.getItem("darkSwitch") !== null &&
    localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected
    ? document.body.setAttribute("data-theme", "dark")
    : document.body.removeAttribute("data-theme");
}

function resetTheme(darkSwitch) {
  if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("darkSwitch", "dark");
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem("darkSwitch");
  }
}

export default class extends Controller {
  static targets = [];

  connect() {
    console.log("Connected to DarkMode Controller...");
    const darkSwitch = document.getElementById("darkSwitch");
    if (darkSwitch) {
      initTheme(darkSwitch);
      darkSwitch.addEventListener("change", () => {
        resetTheme(darkSwitch);
      });
    }
  }
}
