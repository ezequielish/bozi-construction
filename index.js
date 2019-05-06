"use strict";

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _react = _interopRequireDefault(require("react"));

var _index = require("./config/index");

var _cors = _interopRequireDefault(require("cors"));

var _transporter = require("./server/transporter");

var _reactRouter = require("react-router");

var _server = _interopRequireDefault(require("react-dom/server"));

var _app = require("./dist/ssr/app.js");

var _responseCache = _interopRequireDefault(require("./utils/responseCache"));

var _dnsPrefetchControl = _interopRequireDefault(require("dns-prefetch-control"));

var _frameguard = _interopRequireDefault(require("frameguard"));

var _time = require("./utils/time");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // const corsOptions = { origin: "http://localhost:3000/" };
// app.use(cors(corsOptions));
// app.use(helmet());;

app.disable('x-powered-by');
app.use((0, _dnsPrefetchControl["default"])({
    allow: true
}));
app.use((0, _frameguard["default"])({
    action: 'deny'
})); //midleware 

app.use(_bodyParser["default"].json());
app.use(express.static('dist'));

app.use('/', express.static('images'));
app.get('*', function (req, res) {
    (0, _responseCache["default"])(res, _time.SIXTY_MINUTES_IN_SECONDS);

    var html = _server["default"].renderToString(_react["default"].createElement(_reactRouter.StaticRouter, {
        location: req.url,
        context: {
            name: 'Bozi Construncciones y Reformas'
        }
    }, _react["default"].createElement(_app["default"], null)));

    res.write("\n      <!DOCTYPE html>\n        <html lang=\"es\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n          <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n          <link rel=\"icon\" type=\"image/png\" href=\"/img/favicon.png\" /> \n          <title>Bozi Construcciones y Reformas</title>\n          <link rel=\"stylesheet\" href=\"/css/app.a0a63ee1825dde494c43.css\">\n        </head>\n        <body>\n          <div id=\"app\">".concat(html, "</div>\n          <script src=\"/modules.js\"></script>\n          <script src=\"/bundle.a0a63ee1825dde494c43.js\"></script>\n\n        </body>\n      </html>\n    "));
    res.end();
});
app.post('/contactar', function (req, res) {
    var _req$body$data = req.body.data,
        nameClient = _req$body$data.nameClient,
        emailClient = _req$body$data.emailClient,
        subject = _req$body$data.subject,
        messageClient = _req$body$data.messageClient;

    if (messageClient == "" || typeof messageClient == 'string') {
        var transp = _transporter.transporter;
        var mailOptions = {
            from: emailClient,
            // TODO: email sender
            to: '',
            // TODO: email receiver
            subject: subject,
            text: "Nombre Cliente: ".concat(nameClient, " \n Email Cliente: ").concat(emailClient, " \n Asunto: ").concat(subject, " \n Mensaje: ").concat(messageClient)
        };
        transp.sendMail(mailOptions, function (err, data) {
            if (err) {
                return res.status(500).send({
                    msg: "Ha ocurrido un error al enviar el email."
                });
            }

            return res.status(200).send({
                msg: "El  email se envio con éxito"
            });
        });
    }
});
console.log("Iniciando servidor...");
var port = _index.config.dev ? 3000 : process.env.PORT;
var server = app.listen(port, function () {
    console.log("Se ha iniciado el servidor en el puerto ".concat(server.address().port));
});
