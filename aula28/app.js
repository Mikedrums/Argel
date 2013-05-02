Ext.onReady(function(){

	Ext.create('Ext.Button', {
		text: 'Small Button',
		scale: 'small',
		renderTo: 'btn1',
		handler: function() {
			console.log('You ve clicke me...');
		}
	});

	Ext.create('Ext.Button', {
		text: 'Medium Button',
		scale: 'medium',
		renderTo: 'btn2'
	});

	var btn = Ext.create('Ext.Button', {
		text: 'Large Button',
		scale: 'large',
		disabled: true,
		renderTo: 'btn3'
	});

	btn.setDisabled(false);

});