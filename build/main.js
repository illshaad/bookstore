require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pug__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_session__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_route__ = __webpack_require__(9);








const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const { PORT, DB_url } = process.env;

__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connect(DB_url);
var db = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Ca marche'); // c'est pour tester la connection de mangodb avec un message d'erreur //
});

//PUG//
app.set('views', __WEBPACK_IMPORTED_MODULE_6_path___default.a.join(__dirname, 'views')); // ECRIRE CETTE LIGNE EN PREMIERE AVANT DE METTRE DU PUG//
app.set('view engine', 'pug');
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_6_path___default.a.join(__dirname, "../public")));

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_3_volleyball___default.a);
app.use("/", __WEBPACK_IMPORTED_MODULE_7__routes_route__["a" /* bookRouter */]);

app.listen(PORT, () => {
    console.log(`test!:${PORT}`);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("pug");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bookRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_prods__ = __webpack_require__(10);




const bookRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

bookRouter.get('/home', (req, res) => {
    //BASE DE DONNEE//
    __WEBPACK_IMPORTED_MODULE_2__models_prods__["a" /* Book */].find({}, (err, book) => {
        if (err) res.send(err);
        res.render('home', { book: book }); // recuperation les éléments de la basee de donnée.//
    });
});
bookRouter.get('/add', (req, res) => {
    res.render('addBook');
});

bookRouter.post('/add', (req, res) => {
    //AJOUTER //
    const newBook = new __WEBPACK_IMPORTED_MODULE_2__models_prods__["a" /* Book */](req.body);
    newBook.save((err, saveBook) => {
        if (err) res.send(err);
        res.json(saveBook);
    });
});

bookRouter.get('/book:id', (req, res) => {
    let _id = req.params.id;
    __WEBPACK_IMPORTED_MODULE_2__models_prods__["a" /* Book */].findById({ _id }, (err, book) => {
        if (err) res.send(err);
        res.json(book);
    });
});

bookRouter.put('/book:id', (req, res) => {
    __WEBPACK_IMPORTED_MODULE_2__models_prods__["a" /* Book */].findById({ _id: req.params.id }, (err, book) => {
        if (err) res.send(err);
        Object.assign(book, req.body).save((err, book) => {
            // METHODE es6 permet de recuperer afficher ton Schema 
            if (err) res.send(err);
            res.json({ book });
        });
    });
});
bookRouter.delete('/book:id', (req, res) => {
    let _id = req.params.id;
    __WEBPACK_IMPORTED_MODULE_2__models_prods__["a" /* Book */].remove({ _id }, (err, result) => {
        if (err) res.send('err');
        res.send('effacer');
    });
});



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const BookSchema = new Schema({
   title: { type: String, index: true },
   author: { type: String, index: true },
   editor: String,
   genre: String,
   price: Number,
   page: Number,
   cover: String,
   users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Book = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Book', BookSchema);



//AJOUTER DES LIVRES//

/***/ })
/******/ ]);
//# sourceMappingURL=main.map