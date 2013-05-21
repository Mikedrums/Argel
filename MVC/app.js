Ext.require('Ext.container.Viewport')/

Ext.application({
	name: 'App',
	appFolder: 'app',
	controllers: ['Books'],
	launch: function() {
		console.log('called function launch - application');
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [{
				xtype: 'bookList'
			}]
		});
	}
});