sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.app.rfapp.controller.UnloadingByConsignmentOrder",{onInit:function(){const e=this.getView().byId("_IDGenColumnListItem_UBYCONORDR");e.attachBrowserEvent("dblclick",this.onRowDoubleClick.bind(this))},onRowDoubleClick:function(){debugger;var e=this.byId("idDeliveryTabl_UBYCONORDR").getSelectedItem();this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(true)},Onpresssubmit:function(){this.getView().byId("idHuDetailAESRsasPanel").setVisible(true);this.getView().byId("_IDGenButton77_UBYCONORDR").setVisible(false);this.getView().byId("_IDGenInput1_UBYCONORDR").setEditable(false);this.getView().byId("_IDGenButtonEnble_UBYCONORDR").setVisible(true);this.getView().byId("sampleBarcodeScannerButton_UBYCONORDR").setVisible(false);this.getView().byId("_IDGenButton111_UBYCONORDR").setVisible(false)},onPressBackFromDlvrs:function(){this.getView().byId("idHuDetailAESRsasPanel").setVisible(false);this.getView().byId("_IDGenButton77_UBYCONORDR").setVisible(true);this.getView().byId("_IDGenButtonEnble_UBYCONORDR").setVisible(false);this.getView().byId("_IDGenInput1_UBYCONORDR").setEditable(true);this.getView().byId("sampleBarcodeScannerButton_UBYCONORDR").setVisible(true);this.getView().byId("_IDGenButton111_UBYCONORDR").setVisible(true)},Onpressback1:function(){this.getView().byId("icon1_UBYCONORDR").setVisible(true);this.getView().byId("icon2_UBYCONORDR").setVisible(false)},onHUListPress:function(){this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(false);this.getView().byId("icon3_UBYCONORDR").setVisible(true)},Onpressback2:function(){this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(true);this.getView().byId("icon3_UBYCONORDR").setVisible(false)},onNewHUPress:function(){this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(false);this.getView().byId("icon3_UBYCONORDR").setVisible(false);this.getView().byId("icon4_UBYCONORDR").setVisible(true);this.getView().byId("icon5_UBYCONORDR").setVisible(false)},Onpressback3:function(){this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(true);this.getView().byId("icon4_UBYCONORDR").setVisible(false)},onNextEnterpress:function(){this.getView().byId("icon5_UBYCONORDR").setVisible(true);this.getView().byId("icon4_UBYCONORDR").setVisible(false);this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(false)},Onpressback4:function(){this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon5_UBYCONORDR").setVisible(false);this.getView().byId("icon4_UBYCONORDR").setVisible(true);this.getView().byId("icon3_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(false)},onGRPress:function(){this.getView().byId("icon6_UBYCONORDR").setVisible(true);this.getView().byId("icon5_UBYCONORDR").setVisible(false);this.getView().byId("icon4_UBYCONORDR").setVisible(false);this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(false)},Onpressback5:function(){this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon5_UBYCONORDR").setVisible(true);this.getView().byId("icon6_UBYCONORDR").setVisible(false);this.getView().byId("icon4_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(false)},onUnloadPress:function(){this.getView().byId("icon6_UBYCONORDR").setVisible(false);this.getView().byId("icon5_UBYCONORDR").setVisible(false);this.getView().byId("icon4_UBYCONORDR").setVisible(false);this.getView().byId("icon7_UBYCONORDR").setVisible(true);this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(false)},Onpressback6:function(){this.getView().byId("icon1_UBYCONORDR").setVisible(false);this.getView().byId("icon5_UBYCONORDR").setVisible(true);this.getView().byId("icon7_UBYCONORDR").setVisible(false);this.getView().byId("icon6_UBYCONORDR").setVisible(false);this.getView().byId("icon3_UBYCONORDR").setVisible(false);this.getView().byId("icon4_UBYCONORDR").setVisible(false);this.getView().byId("icon2_UBYCONORDR").setVisible(false)},onPressBackToHome:function(){var e=this.getOwnerComponent().getRouter();e.navTo("Supervisor")}})});
//# sourceMappingURL=UnloadingByConsignmentOrder.controller.js.map