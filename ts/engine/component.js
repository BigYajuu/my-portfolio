"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
class Component {
    constructor(selector, page, pageManagement) {
        this.selector = selector;
        this.page = page;
        this.pageManagement = pageManagement;
        this.page.appendComponent(this);
    }
}
exports.Component = Component;
exports.default = Component;
