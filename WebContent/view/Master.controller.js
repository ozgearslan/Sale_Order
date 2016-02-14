sap.ui.controller("sap.ui.demo.myFiori.view.Master", {
	onInit: function(){
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
	},
	
	onSearch : function (oEvt) {

		
		//	var aFilters = [];
			
			var sQuery = oEvt.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new sap.ui.model.Filter("EmployeeID", sap.ui.model.FilterOperator.EQ, sQuery);
				var filter2 = new sap.ui.model.Filter("LastName", sap.ui.model.FilterOperator.EQ, sQuery);
				var filter3= new sap.ui.model.Filter("HomePhone", sap.ui.model.FilterOperator.EQ, sQuery);
				var aFilters = new sap.ui.model.Filter([filter, filter2,filter3 ], false); // (ÝKÝ FÝLTRE ARASINDA) FALSE: OR, TRUE: AND
			//	aFilters.push(filter);
			//	aFilters.push(filter2);
			}

			// update list binding
			var list = this.getView().byId("listid");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},
		
		onListItemPress: function(Evt) {

			var oContext = Evt.getSource().getBindingContext();
			console.log(oContext);// denemek için yaparýz
			this.router.navTo("Detail", {
				EmployeeID : oContext.getProperty("EmployeeID")
				
			});
			
		},
});