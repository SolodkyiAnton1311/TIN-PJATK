const express = require('express');
const router = express.Router();
const sklepController = require('../controllers/SklepControler');
router.get('/',sklepController.showSklepList);
router.get('/add',sklepController.showAddSkelpForm);
router.get('/details/:sklepId',sklepController.showSklepDetails);
router.get('/edit/:sklepId',sklepController.showEditSklepForm);
module.exports =router;
router.post('/add',sklepController.addSklep);
router.post('/edit',sklepController.updateSklep);
router.get('/delete/:sklepId',sklepController.deleteSklep);
