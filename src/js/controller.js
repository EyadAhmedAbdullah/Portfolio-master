import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "./model.js";
import { async } from "regenerator-runtime";
import View from "./views/view.js";
import ProjectsLangsView from "./views/projectsLangsView.js";

function controlMenu() {
    View.handleMenu();
}

function controllInjecting() {
    View.ingectNavbar();
    View.injectFooter();
}

function controlCollapse() {
    View.handleCollapseLangs();
}

function controlFilterProjects() {
    ProjectsLangsView.eventHandler();
}

function init() {
    controllInjecting();
    controlMenu();
    controlCollapse();
    controlFilterProjects();
}
init();
