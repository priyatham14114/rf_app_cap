sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.app.rfapp.controller.PutawayByWO",{onInit:function(){},onAfterRendering:function(){this.byId("idPage1ScannerFormBox").setVisible(true)},onPressBackBtnScanerFormBox:function(){var e=this.getOwnerComponent().getRouter();e.navTo("Supervisor")},onBackPressHUDetails:function(){var e=this.byId("idPage1ScannerFormBox");var i=this.byId("idPage2HUDetails_PBYWO");e.setVisible(true);i.setVisible(false)},onBackPressHUListTable:function(){var e=this.byId("idPage3HUListTable_PBYWO");var i=this.byId("idPage2HUDetails_PBYWO");i.setVisible(true);e.setVisible(false)},onBackBtnPressNewHUNumber:function(){var e=this.byId("idPage4NewHUNumber_PBYWO");var i=this.byId("idPage3HUListTable_PBYWO");i.setVisible(true);e.setVisible(true)},onBackPressVerifyHUNumber:function(){var e=this.byId("idPage5VerifyHUNumber_PBYWO");var i=this.byId("idPage4NewHUNumber_PBYWO");i.setVisible(true);e.setVisible(false)},onBackPressGoodsReceipt:function(){var e=this.byId("idPage6GoodsReceiptGR_PBYWO");var i=this.byId("idPage5VerifyHUNumber_PBYWO");i.setVisible(true);e.setVisible(false)},onBackPressUnLoadPage:function(){var e=this.byId("idPage7UnLoadPage_PBYWO");var i=this.byId("idPage5VerifyHUNumber_PBYWO");i.setVisible(true);e.setVisible(false)},onSubmitPress:function(){var e=this.byId("idPage1ScannerFormBox");var i=this.byId("idPage2HUDetails_PBYWO");e.setVisible(false);i.setVisible(true)},onPressHUListTable:function(){var e=this.byId("idPage2HUDetails_PBYWO");var i=this.byId("idPage3HUListTable_PBYWO");e.setVisible(false);i.setVisible(true)},onPressNewHUNumberBtn:function(){var e=this.byId("idPage4NewHUNumber_PBYWO");var i=this.byId("idPage3HUListTable_PBYWO");i.setVisible(false);e.setVisible(true)},onEnterNewHUNUmberPress:function(){var e=this.byId("idPage5VerifyHUNumber_PBYWO");var i=this.byId("idPage4NewHUNumber_PBYWO");i.setVisible(false);e.setVisible(true)},onGRBtnPressVerifyHUNumber:function(){var e=this.byId("idPage5VerifyHUNumber_PBYWO");var i=this.byId("idPage6GoodsReceiptGR_PBYWO");e.setVisible(false);i.setVisible(true)},onUnloadPressVerifyHUNumber:function(){var e=this.byId("idPage5VerifyHUNumber_PBYWO");var i=this.byId("idPage7UnLoadPage_PBYWO");e.setVisible(false);i.setVisible(true)}})});
//# sourceMappingURL=PutawayByWO.controller.js.map