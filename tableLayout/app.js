Ext.onReady(function() {

	var table = Ext.create('Ext.window.Window', {
		title: 'Table Layout',
		width: 250,
		height: 200,
		layout: {
			type: 'table',
			columns: 3,
			tableAttrs: {
				style: {
					width: '100%',
					height: '100%'
				}
			}
		},

		items: [{
			html: 'Cell 1',
			rowspan: 3
		},{
			html: 'Cell 2'
		},{
			html: 'Cell 3'
		},{
			html: 'Cell 4'
		},{
			html: 'Cell 5'
		},{
			html: 'Cell 6',
			colspan: 2
		},{
			html: 'Cell 7'
		},{
			html: 'Cell 8'
		},{
			html: 'Cell 9'
		}]
	});

	table.show();

});