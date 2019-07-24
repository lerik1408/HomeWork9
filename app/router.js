const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('index', ctrl.homePage);
router.get('', ctrl.homePage);
router.get('sigin-in', ctrl.siginInPage);
router.get('password-recovery', ctrl.passwordRecoveryPage);
router.get('password-recovery1', ctrl.passwordRecovery1Page);
router.get('password-recovery2', ctrl.passwordRecovery2Page);
router.get('sigin-up', ctrl.siginUpPage);
router.get('sigin-up1', ctrl.siginUp1Page);
router.get('sigin-up2', ctrl.siginUp2Page);
router.get('acc-info', ctrl.accInfoPage);
router.get('person-info', ctrl.personInfoPage);
router.get('search', ctrl.searchPage);
router.get('messenger', ctrl.messengerPage);

router.post('search', ctrl.createProfile);
router.get('profile/:profileId', ctrl.singleProfile);
router.delete('profile/:profileId', ctrl.deleteProfile);
router.put('profile/:profileId', ctrl.updateProfile);

module.exports = router;
