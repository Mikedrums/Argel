Ext.onReady(function() {

	var panel1 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 1',
		html: '.25',
		columnWidth: .25 //25%
	});

	var panel2 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 2',
		html: '.25',
		columnWidth: .25 //25%
	});

	var panel3 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 3',
		html: '.50',
		columnWidth: .50 //25%
	});

	var column = Ext.create('Ext.window.Window', {
		title: 'Column Layout',
		width: 400,
		layout: 'column',
		defaults: {
			height: 60
		},
		items: [panel1, panel2, panel3]
	});

	column.show();

});