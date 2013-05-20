Ext.onReady(function() {

	var navHandler = function(btn) {
		var activeItem = card.layout.activeItem;
		var active = card.items.indexOf(activeItem);

		if (btn.id == 'nextButton') {
			active += 1;
		} else if (btn.id == 'prevButton') {
			active -= 1;
		}

		card.layout.setActiveItem(active);

		var prev = card.dockedItems.items[1].items.items[0];
		var next = card.dockedItems.items[1].items.items[2];

		if (active == 0) {
			prev.setDisabled(true);
		} else if (active == 1) {
			prev.setDisabled(false);
			next.setDisabled(false);
		} else if (active == 2) {
			next.setDisabled(true);
		}
	};

	var card = Ext.create('Ext.window.Window', {
		title: 'Card Layout',
		width: 400,
		height: 200,
		layout: 'card',
		activeItem: 0,
		bodyStyle: 'padding: 70 50 0 150',
		defaults: {
			border: false
		},
		bbar: [{
			id: 'prevButton',
			text: 'Previous Step',
			handler: navHandler,
			disabled: true
		},
		'->',
		{
			id: 'nextButton',
			text: 'Next Step',
			handler: navHandler
		}],
		items: [{
			html: '<p>Step 1 of 3</p>'
		},{
			html: '<p>Step 2 of 3</p>'
		},{
			html: '<p>Step 3 of 3</p>'
		}]
	});

	card.show();

});