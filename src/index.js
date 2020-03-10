import "./sass/main.scss";
import fullpage from "fullpage.js";

var myFullPage = new fullpage("#fullPage", {
    navigation: false,
    autoScrolling: true,
    scrollingSpeed: 1000,
    anchors: ["hero", "projects", "about"],
    slidesNavigation: true,
    slidesNavPosition: "bottom"
    // navigationTooltips: ["concordville", "natours"]
    // fadingEffect: true
    // sectionsColor:['#ff5f45', '#0798ec', '#fc6c7c', 'grey']
});
