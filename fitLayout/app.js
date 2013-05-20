Ext.onReady(function() {

	var panel1 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 1',
		html: 'Fit Content'
	});

	var fit = Ext.create('Ext.window.Window', {
		title: 'Fit Layout',
		width: 100,
		height: 150,
		layout: 'fit',
		items: [panel1]
	});

	fit.show();

});