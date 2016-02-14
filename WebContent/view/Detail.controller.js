sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {
	onInit: function(){
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRouteMatched(this.attachRouteMatched,this);
	},
	
	attachRouteMatched : function(oEvent) {
		var sName = oEvent.getParameter("Detail");
		if (oEvent.getParameter("name") === "Detail") {
			var sProductPath = "/Employees("
					+ oEvent.getParameter("arguments").EmployeeID
					+ ")";
			console
					.log(oEvent.getParameter("arguments").EmployeeID);
			var oModel = this.getView().getModel();
			var Formid = this.getView().byId("formid");
			oModel.read(sProductPath,null,null,false,
					function(oData, oResponse) {
								console.log(oData);

				Formid.setModel(new sap.ui.model.json.JSONModel({
													formModel : oData
												}));
			    Formid.bindElement("/formModel");
                   }, function(oError) {
								console.log(oError);
								});
}
	},
	
});