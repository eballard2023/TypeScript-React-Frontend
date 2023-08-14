"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Serve static files from the "public" directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Set EJS as the templating engine
app.set('view engine', 'ejs');
//importing json with information about me
const me_json_1 = __importDefault(require("../me.json"));
app.get('/', (req, res) => {
    res.render("index");
});
app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
app.get('/awesome/applicant', (req, res) => {
    res.render("awesome", me_json_1.default);
});
//# sourceMappingURL=app.js.map