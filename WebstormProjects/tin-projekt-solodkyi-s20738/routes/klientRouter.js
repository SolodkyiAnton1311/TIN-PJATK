const express = require('express');
const router = express.Router();
const klientControler = require('../controllers/KlientControler');
router.get('/',klientControler.showKlientList);
router.get('/add',klientControler.showAddKlientForm);
router.get('/edit/:klientId',klientControler.showKlientEditForm);
router.get('/details/:klientId',klientControler.showKlientDetails);
module.exports =router;
router.post('/add',klientControler.addKlient);
router.post('/edit',klientControler.updateKlient);
router.get('/delete/:klientId',klientControler.deleteKlient);

