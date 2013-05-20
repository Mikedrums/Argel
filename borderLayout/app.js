Ext.onReady(function() {

	var border = Ext.create('Ext.window.Window', {
		width: 700,
		height: 500,
		title: 'Border Layout',
		layout: 'border',
		defaults: {
			xtype: 'panel'
		},
		items: [{
			title: 'North Region is resizable',
			region: 'north',
			height: 100,
			split: true
		},{
			title: 'South Region is resizable',
			region: 'south',
			height: 100,
			split: true
		},{
			title: 'West Region is collapsible',
			region : 'west',
			width: 200,
			collapsible: true,
			layout: 'fit'
		},{
			title: 'East Region is collapsible',
			region : 'east',
			width: 200,
			collapsible: true,
			layout: 'fit'
		},{
			title: 'Center Region',
			region: 'center',
			layout: 'fit'
		}]
	});

	border.show();

});