sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,i){"use strict";return e.extend("com.app.rfapp.controller.SerialNumberLocation",{onInit:function(){},onSNLfirxtBackBtnPress:function(){var e=this.getOwnerComponent().getRouter();e.navTo("Supervisor")},onSNLproductLiveChange:function(){this.getView().byId("idSNLFirstSC").setVisible(false);this.getView().byId("idSNLsecondSC").setVisible(true);var e=this.getView().byId("idSNLproductInput").getValue();this.getView().byId("idSNLProInput").setValue(e);this.getView().byId("idSNLProInput").setEditable(false);this.getView().byId("idSNLSecondBackBtn").setVisible(true);this.getView().byId("idSNLfirstBackBtn").setVisible(false)},onSNLSecondBackBtnPress:function(){this.getView().byId("idSNLFirstSC").setVisible(true);this.getView().byId("idSNLsecondSC").setVisible(false);this.getView().byId("idSNLSecondBackBtn").setVisible(false);this.getView().byId("idSNLfirstBackBtn").setVisible(true)},onSNLsnoLiveChange:function(){this.getView().byId("idSNLthirdSC").setVisible(true);this.getView().byId("idSNLsecondSC").setVisible(false);var e=this.getView().byId("idSNLsnoInput").getValue();this.getView().byId("idSNLsnoInput1").setValue(e);var i=this.getView().byId("idSNLproductInput").getValue();this.getView().byId("idSNLProInput1").setValue(i);this.getView().byId("idSNLProInput1").setEditable(false);this.getView().byId("idSNLsnoInput1").setEditable(false);this.getView().byId("idSNLSecondBackBtn").setVisible(false);this.getView().byId("idSNLthirdBackBtn").setVisible(true)},onSNLthirdBackBtnPress:function(){this.getView().byId("idSNLSecondBackBtn").setVisible(true);this.getView().byId("idSNLthirdBackBtn").setVisible(false);this.getView().byId("idSNLthirdSC").setVisible(false);this.getView().byId("idSNLsecondSC").setVisible(true)},onSNLPreDePress:function(){this.getView().byId("idSNLthirdSC").setVisible(false);this.getView().byId("idSNLfourthSC").setVisible(true);this.getView().byId("idSNLfourthBackBtn").setVisible(true);this.getView().byId("idSNLthirdBackBtn").setVisible(false)},onSNLfourthBackBtnPress:function(){this.getView().byId("idSNLthirdSC").setVisible(true);this.getView().byId("idSNLfourthSC").setVisible(false);this.getView().byId("idSNLfourthBackBtn").setVisible(false);this.getView().byId("idSNLthirdBackBtn").setVisible(true)},onSNLBinDePress:function(){this.getView().byId("idSNLthirdSC").setVisible(false);this.getView().byId("idSNLFifthSC").setVisible(true);this.getView().byId("idSNLfifthBackBtn").setVisible(true);this.getView().byId("idSNLthirdBackBtn").setVisible(false)},onSNLfifthBackBtnPress:function(){this.getView().byId("idSNLthirdSC").setVisible(true);this.getView().byId("idSNLFifthSC").setVisible(false);this.getView().byId("idSNLfifthBackBtn").setVisible(false);this.getView().byId("idSNLthirdBackBtn").setVisible(true)}})});
//# sourceMappingURL=SerialNumberLocation.controller.js.map