const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('index', ctrl.homePage);
router.get('', ctrl.homePage);
router.get('siginIn', ctrl.siginInPage);
router.get('passwordRecovery', ctrl.passwordRecoveryPage);
router.get('passwordRecovery1', ctrl.passwordRecovery1Page);
router.get('passwordRecovery2', ctrl.passwordRecovery2Page);
router.get('siginUp', ctrl.siginUpPage);
router.get('siginUp1', ctrl.siginUp1Page);
router.get('siginUp2', ctrl.siginUp2Page);
router.get('accInfo', ctrl.accInfoPage);
router.get('personInfo', ctrl.personInfoPage);
router.get('search', ctrl.searchPage);
router.get('messenger', ctrl.messengerPage);

router.post('search',ctrl.createProfile);
router.get('search-id-:profileId',ctrl.singleProfile)
router.delete('search-id-:profileId',ctrl.deleteProfile);
router.put('search-id-:profileId',ctrl.updateProfile)

module.exports = router;
