const requireDir = require('require-directory');
const express    = require('express');

const authorisationMiddleware = require('./middlewares/authorisationMiddleware');
const controller              = requireDir(module, './controllers');
const router                  = express.Router();

/* CLIENTS */
router.get('/clients/id/:client_id', authorisationMiddleware.can('acceptUserAndAdmin'), controller.ClientCtrl.getClientById);
router.get('/clients/name/:client_name', authorisationMiddleware.can('acceptUserAndAdmin'), controller.ClientCtrl.getClientByName);
router.get('/clients/policie/id/:policie_id', authorisationMiddleware.can('acceptAdmin'), controller.ClientCtrl.getClientByPolicyId);

/* POLICIES */
router.get('/policies/clients/name/:client_name', authorisationMiddleware.can('acceptAdmin'), controller.PolicieCtrl.getPoliciesByClientName);

module.exports = router;