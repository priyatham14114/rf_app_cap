sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,i){"use strict";return e.extend("com.app.rfapp.controller.StockBinQueryByProduct",{onInit:function(){},onSBQPfirstBackBtnPress:function(){var e=this.getOwnerComponent().getRouter();e.navTo("Supervisor")},onSBQProductLiveChange:function(){this.getView().byId("idSBQPFirstSC").setVisible(false);this.getView().byId("idSBQPsecondSC").setVisible(true);this.getView().byId("idSBQPfirstbackbtn").setVisible(false);this.getView().byId("idSBQPSecondbackbtn").setVisible(true);var e=this.getView().byId("idSBQProductInput").getValue();this.getView().byId("idSBQProductInput2").setValue(e);this.getView().byId("idSBQProductInput2").setEditable(false)},onSBQPSecondBackBtnPress:function(){this.getView().byId("idSBQPFirstSC").setVisible(true);this.getView().byId("idSBQPsecondSC").setVisible(false);this.getView().byId("idSBQPfirstbackbtn").setVisible(true);this.getView().byId("idSBQPSecondbackbtn").setVisible(false)},onSBQPPreDePress:function(){this.getView().byId("idSBQPsecondSC").setVisible(false);this.getView().byId("idSBQPThirdSC").setVisible(true);this.getView().byId("idSBQPSecondbackbtn").setVisible(false);this.getView().byId("idSBQPThirdbackbtn").setVisible(true)},onSBQPThirdBackBtnPress:function(){this.getView().byId("idSBQPsecondSC").setVisible(true);this.getView().byId("idSBQPThirdSC").setVisible(false);this.getView().byId("idSBQPSecondbackbtn").setVisible(true);this.getView().byId("idSBQPThirdbackbtn").setVisible(false)},onSBQPBinDePress:function(){this.getView().byId("idSBQPsecondSC").setVisible(false);this.getView().byId("idSBQPFourthSC").setVisible(true);this.getView().byId("idSBQPFourthbackbtn").setVisible(true);this.getView().byId("idSBQPThirdbackbtn").setVisible(false);this.getView().byId("idSBQPSecondbackbtn").setVisible(false)},onSBQPFourthBackBtnPress:function(){this.getView().byId("idSBQPFourthbackbtn").setVisible(false);this.getView().byId("idSBQPThirdbackbtn").setVisible(true);this.getView().byId("idSBQPsecondSC").setVisible(true);this.getView().byId("idSBQPFourthSC").setVisible(false)}})});
//# sourceMappingURL=StockBinQueryByProduct.controller.js.map