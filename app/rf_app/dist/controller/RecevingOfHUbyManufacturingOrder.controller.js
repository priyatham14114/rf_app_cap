sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.app.rfapp.controller.RecevingOfHUbyManufacturingOrder",{onInit:function(){const e=this.getView().byId("idROHMTable");e.attachBrowserEvent("dblclick",this.onRowDoubleClick.bind(this))},onRowDoubleClick:function(){debugger;var e=this.byId("idROHMTable").getSelectedItem();this.getView().byId("idROHMScanManufacturingorder").setVisible(false);this.getView().byId("idROHMDeliverydetailsPage2").setVisible(true)},onAfterRendering:function(){this.byId("idROHMScanManufacturingorder").setVisible(true)},onPressROHMScanManubackbtn:function(){var e=this.getOwnerComponent().getRouter();e.navTo("Supervisor");this.getView().byId("idROHMPanel").setVisible(false)},OnpressManuDelDetailsBackbutton:function(){var e=this.byId("idROHMScanManufacturingorder");var i=this.byId("idROHMDeliverydetailsPage2");e.setVisible(true);i.setVisible(false)},OnpressROHMHUlistBackbtn:function(){var e=this.byId("idROHMHUListPage3");var i=this.byId("idROHMDeliverydetailsPage2");i.setVisible(true);e.setVisible(false)},OnpressROHMNewHuBackbutton:function(){var e=this.byId("idROHMNewHUPage4");var i=this.byId("idROHMDeliverydetailsPage2");i.setVisible(true);e.setVisible(true)},OnpressAfterNextBackbutton:function(){var e=this.byId("idROHMnextOrEnterpage5");var i=this.byId("idROHMNewHUPage4");i.setVisible(true);e.setVisible(false)},OnpressROHMGRBackbutton:function(){var e=this.byId("idROHMGRpage6");var i=this.byId("idROHMnextOrEnterpage5");i.setVisible(true);e.setVisible(false)},OnpressROHMUnloadBackbutton:function(){var e=this.byId("idROHMUnloadpage7");var i=this.byId("idROHMnextOrEnterpage5");i.setVisible(true);e.setVisible(false)},onPressROHMSubmitbtn:function(){var e=this.byId("idROHMScanManufacturingorder");var i=this.byId("idROHMPanel");i.setVisible(true)},onPressROHMHUListPress:function(){var e=this.byId("idROHMDeliverydetailsPage2");var i=this.byId("idROHMHUListPage3");e.setVisible(false);i.setVisible(true)},onPressROHMNewHU:function(){var e=this.byId("idROHMNewHUPage4");var i=this.byId("idROHMDeliverydetailsPage2");i.setVisible(false);e.setVisible(true)},onPressROHMEnter:function(){var e=this.byId("idROHMnextOrEnterpage5");var i=this.byId("idROHMNewHUPage4");i.setVisible(false);e.setVisible(true)},onPressEnterROHMGRButton:function(){var e=this.byId("idROHMnextOrEnterpage5");var i=this.byId("idROHMGRpage6");e.setVisible(false);i.setVisible(true)},onPressEnterROHMUnloadButton:function(){var e=this.byId("idROHMnextOrEnterpage5");var i=this.byId("idROHMUnloadpage7");e.setVisible(false);i.setVisible(true)}})});
//# sourceMappingURL=RecevingOfHUbyManufacturingOrder.controller.js.map