jQuery.sap.declare("sap.ui.demo.myFiori.Component");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.require("sap.ui.demo.myFiori.MyRouter");
sap.ui.core.UIComponent.extend(
				"sap.ui.demo.myFiori.Component",
				{

					metadata : {
						name : "Northwind App",
						version : "1.0",
						includes : [],
						dependencies : {
							libs : [ "sap.m" ],
							components : []
						},
						rootView : "sap.ui.demo.myFiori.view.RootApp", // içinde
						// app
						// tagi
						// bulunan
						// controllersýz
						// bir
						// view
						// oluþtur.

						config : {
						//	resourceBundle : "i18n/messageBundle.properties",
							serviceConfig : {
								name : "Northwind",
								serviceUrl : "proxy/http/services.odata.org/Northwind/Northwind.svc/"
							}
						},

						// routing olmalý
						routing : {
							config : {
								routerClass : sap.ui.demo.myFiori.MyRouter,
								viewType : "XML",
								viewPath : "sap.ui.demo.myFiori.view",
							//  targetAggregation : "pages",
								clearTarget : false
							},
							routes : [ {
								pattern : "",
								name : "RootSplitApp",
								view : "RootSplitApp",
								targetAggregation : "pages",
								targetControl : "RootAppId",

								subroutes : [ {
									pattern : "",
									name : "Master",
									view : "Master",
									preservePageInSplitContainer : true,
									targetAggregation : "masterPages",
									targetControl : "RootSplitAppId",
									subroutes : [ {
										pattern : "Detail/{EmployeeID}",
										name : "Detail",
										view : "Detail",
										targetAggregation : "detailPages"
									},
									],

								} ],
							},

							
							]

						},

					},

					init : function() {
						// initializes createContent
						sap.ui.core.UIComponent.prototype.init.apply(this,
								arguments);
						var mConfig = this.getMetadata().getConfig();
						var rootPath = jQuery.sap
								.getModulePath("sap.ui.demo.myFiori.");
						
						var sServiceUrl = mConfig.serviceConfig.serviceUrl;
						var oModel = new sap.ui.model.odata.ODataModel(
								sServiceUrl, true);
						oModel.setCountSupported(false);
						this.setModel(oModel);

						this.getRouter().initialize();
					},

					
				});
