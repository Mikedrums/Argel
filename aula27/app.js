Ext.onReady(function() {

	/*
	Ext.create('Ext.window.Window', {
		title: 'Hello',
		width: 400,
		height: 200,
		layout: 'fit',
		items: {
			xtype: 'grid',
			border: false,
			columns: [{header: 'World'}],
			store: Ext.create('Ext.data.ArrayStore', {})
		},
		autoShow: true,
		closeAction: 'hide'
	});
	*/

	Ext.create('Ext.window.Window', {
		width: 500,
		height: 300,
		maximizable: false,
		modal: true,
		loader: {
			url: "content.html",
			loadMask: false,
			autoLoad: true,
			renderer: 'html'
		},
		title: "My First Extjs 4 windows",
		autoShow: true
	});

});