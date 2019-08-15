// 2019-08-16
// 1) "Provide an ability to delete items from the cart on the frontend checkout page":
// https://github.com/clinessentials/core/issues/47
// 2) https://magento.stackexchange.com/a/261369
define(['Magento_Checkout/js/view/summary/abstract-total', 'mage/url'], function(parent, url) {return parent.extend({
	defaults: {displayArea: 'after_details', template: 'ClinEssentials_Core/subtotal/delete'}
	,getDataPost: function(gp) {
		var r = {data: {}};
		var id = gp.item_id;
		var itemsData = window.checkoutConfig.quoteItemData;
		itemsData.forEach(function (item) {
			if (id == item.item_id) {
				var mainlinkUrl = url.build('checkout/cart/delete/');
				var baseUrl = url.build('checkout/');
				r.action = mainlinkUrl;
				r.data.id= item.item_id;
				r.data.uenc = btoa(baseUrl);
			}
		});
		return JSON.stringify(r);
	}
	,test: function() {
		debugger;
		//console.log(this.parent.parent.item_id);
	}
});});