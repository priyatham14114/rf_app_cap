sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/Device","sap/ui/model/json/JSONModel","sap/m/Popover","sap/m/Button","sap/m/library","sap/m/MessageBox"],function(e,i,t,s,a,n,p){"use strict";return e.extend("com.app.rfapp.controller.MaintainHU",{onInit:function(){},Onpressback0:function(){var e=this.getOwnerComponent().getRouter();e.navTo("Supervisor")},Onpresssubmit:function(){this.getView().byId("page1MaintainHU_MHU").setVisible(false);this.getView().byId("page2MaintainHU_MHU").setVisible(true)},Onpressback2:function(){this.getView().byId("page1MaintainHU_MHU").setVisible(true);this.getView().byId("page2MaintainHU_MHU").setVisible(false)},OnpressWorkCenter:function(){this.getView().byId("page1MaintainHU_MHU").setVisible(false);this.getView().byId("page2MaintainHU_MHU").setVisible(false);this.getView().byId("page3MaintainHU_MHU").setVisible(true)},Onpressback3:function(){this.getView().byId("page1MaintainHU_MHU").setVisible(false);this.getView().byId("page2MaintainHU_MHU").setVisible(true);this.getView().byId("page3MaintainHU_MHU").setVisible(false)},onClosePutawayHUpress:function(){this.getView().byId("page1MaintainHU_MHU").setVisible(false);this.getView().byId("page2MaintainHU_MHU").setVisible(true);this.getView().byId("page3MaintainHU_MHU").setVisible(false)},onDeletePutawayHUpress:function(){this.getView().byId("page1MaintainHU_MHU").setVisible(false);this.getView().byId("page2MaintainHU_MHU").setVisible(true);this.getView().byId("page3MaintainHU_MHU").setVisible(false)},onSavepress:function(){p.information("please enter all the data!!!")}})});
//# sourceMappingURL=MaintainHU.controller.js.map