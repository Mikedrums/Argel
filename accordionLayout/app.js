Ext.onReady(function(){

	var panel1 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 1',
		html: '<b>Panel 1</b>'
	})

	var panel2 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 2',
		html: '<b>Panel 2</b>'
	})

	var panel3 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 3',
		html: '<b>Panel 3</b>'
	})

	var panel4 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 4',
		html: '<b>Panel 4</b>'
	})

	var panel5 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 5',
		html: '<b>Panel 5</b>'
	})

	var accordion = Ext.create('Ext.window.Window', {
		title: 'Accordion Layout',
		margins: '5 0 5 5',
		split: true,
		width: 210,
		height: 250,
		layout: 'accordion',
		items: [panel1, panel2, panel3, panel4, panel5]
	});

	accordion.show();

});