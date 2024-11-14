"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
const router = (0, express_1.Router)();
// Defina a rota de criação de cliente
router.post('/clients', clientController_1.createClient);
exports.default = router;
