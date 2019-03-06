"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = (app) => {
    // define a route handler for the default home page
    app.get("/", (req, res) => {
        const user = {
            isAuthenticated: true,
            name: "foo"
        };
        res.render("index", { user });
    });
    // define a secure route handler for the guitars page
    app.get("/page-1", (req, res) => {
        const user = {
            isAuthenticated: true,
            name: "foo"
        };
        res.render("page-1", { user });
    });
};
//# sourceMappingURL=index.js.map