sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/Device",
  "sap/m/MessageToast" // Import MessageToast for user feedback
], function (Controller, Device, MessageToast) {
  "use strict";
      return Controller.extend("com.app.rfapp.controller.StockBinQueryByBin", {
        onInit: function() {
        },

      onPressBinBackToHome:function(){
        debugger
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("Supervisor");
      },
      onPressBinBackToBin:function(){
        this.getView().byId("page1_SBQB").setVisible(true);
        this.getView().byId("page2_SBQB").setVisible(false);
      },
      onPressBinBacktoProductDetaails:function(){
        this.getView().byId("page2_SBQB").setVisible(true);
        this.getView().byId("page3_SBQB").setVisible(false);
      },
      onPressBackfromBinList:function(){
        this.getView().byId("page2_SBQB").setVisible(true);
        this.getView().byId("page4_SBQB").setVisible(false);
      },
      onPressBinSubmit:function(){
        this.getView().byId("page1_SBQB").setVisible(false);
        this.getView().byId("page2_SBQB").setVisible(true);
      },
      onPressBinDetails:function(){
        this.getView().byId("page1_SBQB").setVisible(false);
        this.getView().byId("page2_SBQB").setVisible(false);
        this.getView().byId("page3_SBQB").setVisible(true);
      },
      onPressList:function(){
        this.getView().byId("page1_SBQB").setVisible(false);
        this.getView().byId("page2_SBQB").setVisible(false);
        this.getView().byId("page3_SBQB").setVisible(false);
        this.getView().byId("page4_SBQB").setVisible(true);
      },
      onScanSuccess: function (oEvent) {
        // Check if the scan was cancelled
        if (oEvent.getParameter("cancelled")) {
          MessageToast.show("Scan cancelled", { duration: 1000 });
        } else {
         
          var scannedText = oEvent.getParameter("text");
          if (scannedText) {
            var oInput = this.byId("_IDBinGenInput1_SBQB"); 
            oInput.setValue(scannedText); 
  
            this._generateQRCode(scannedText);
          } else {
            MessageToast.show("No data found", { duration: 1000 });
          }
        }
      },
      _generateQRCode: function (scannedText) {

        // Get the QR code container element
        var oQRCodeContainer = this.byId("qrCodePlaceholder_SBQB");
  
        // Clear previous QR code (if any)
        oQRCodeContainer.destroyItems();
  
  
      },
      });
    }
  );
  