sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.app.rfapp.controller.WTQueryByHU",{onInit:function(){},onPressBackBtnPage1_WTQBYHU:function(){var e=this.getOwnerComponent().getRouter();e.navTo("Supervisor")},onBackPressHUNumbersTable:function(){var e=this.byId("idPage2HUNumberTable_WTQBYHU");var i=this.byId("idPage1ScannerFormBox_WTQBYHU");i.setVisible(true);e.setVisible(false)},onBackPressBtnWTDetails_WTQBYHU:function(){var e=this.byId("idPage3WTDetails_WTQBYHU");var i=this.byId("idPage2HUNumberTable_WTQBYHU");i.setVisible(true);e.setVisible(false)},onBackPressBtnProductDetails_WTQBYHU:function(){var e=this.byId("idPage4ProductDescription_WTQBYHU");var i=this.byId("idPage3WTDetails_WTQBYHU");i.setVisible(true);e.setVisible(false)},onSubmitPressPage1_WTQBYHU:function(){var e=this.byId("idPage1ScannerFormBox_WTQBYHU");var i=this.byId("idPage2HUNumberTable_WTQBYHU");e.setVisible(false);i.setVisible(true)},onPressWTBtnPage2_WTQBYHU:function(){var e=this.byId("idPage2HUNumberTable_WTQBYHU");var i=this.byId("idPage3WTDetails_WTQBYHU");e.setVisible(false);i.setVisible(true)},onBtnDetailPressPage3_WTQBYHU:function(){var e=this.byId("idPage3WTDetails_WTQBYHU");var i=this.byId("idPage4ProductDescription_WTQBYHU");e.setVisible(false);i.setVisible(true)}})});
//# sourceMappingURL=WTQueryByHU.controller.js.map