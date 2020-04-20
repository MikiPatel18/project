var express = require('express');
var router = express.Router();

const ctrlhome = require('../controllers/home');
const ctrlabout = require('../controllers/about');
const ctrllistdisplay = require('../controllers/listdisplay');
const ctrldisplay = require('../controllers/display');
/* GET home page. */
const index = (req, res) => {
res.render('index', { title: 'Express' });
};
/* GET homepage. */

router.get('/', ctrlhome.home);
router.get('/list', ctrllistdisplay.listdisplay);
router.get('/about', ctrlabout.about);
router.get('/display', ctrldisplay.display);

module.exports = router;
