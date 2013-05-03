Ext.onReady(function(){

	Ext.tip.QuickTipManager.init();

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
		renderTo: 'btn2',
		listeners: {
			click: function() {
				console.log('clicked');
			},
			mouseover: function() {
				console.log('overpassed');
			}
		}
	});

	var btn = Ext.create('Ext.Button', {
		text: 'Large Button',
		scale: 'large',
		disabled: true,
		renderTo: 'btn3'
	});

	btn.setDisabled(false);

	Ext.create('Ext.Button', {
		text: 'Meu Texto',
		scale: 'small',
		iconCls: 'add',
		renderTo: 'btn4',
		handler: function() {
			console.log('só ícone - pequeno');
		}
	});

	Ext.create('Ext.Button', {
		scale: 'medium',
		iconCls: 'add',
		renderTo: 'btn5',
		handler: function() {
			console.log('só ícone - médio');
		}
	});

	Ext.create('Ext.Button', {
		scale: 'large',
		text: 'Top Text',
		iconAlign: 'bottom',
		iconCls: 'add',
		renderTo: 'btn6',
		handler: function() {
			console.log('só ícone - grande');
		}
	});

	Ext.create('Ext.Button', {
		scale: 'large',
		text: 'Top Text - testando o explorer...',
		iconAlign: 'top',
		iconCls: 'add',
		renderTo: 'btn7',
		handler: function() {
			console.log('só ícone - grande');
		}
	});

	Ext.create('Ext.Button', {
		scale: 'medium',
		iconCls: 'add',
		enableToggle: true,
		renderTo: 'btn8',
		toggleHandler: function(btn, state) {
			console.log(state);
		}
	});

	Ext.create('Ext.Button', {
		text: 'inClouds',
		scale: 'large',
		renderTo: 'btn9',
		href: 'http://www.inclouds.com.br'
	});

	Ext.create('Ext.button.Split', {
		renderTo: 'btn10',
		text: 'Split Button',
		scale: 'large',
		tooltip: 'clique agora!',
		arrowTooltip: 'mais opções...',
		handler: function() {
			console.log('Button Clicked!')
		},
		menu: Ext.create('Ext.menu.Menu', {
			items: [
				{text: 'Item 1', handler: function(){console.log('Item 1 clicked!');}},
				{text: 'Item 2', handler: function(){console.log('Item 2 clicked!');}},
				{text: 'Item 3', handler: function(){console.log('Item 3 clicked!');}}
			]
		})
	});
	
	Ext.create('Ext.button.Cycle', {
	    showText: true,
	    prependText: 'View as ',
	    renderTo: 'btn11',
	    menu: {
	        id: 'view-type-menu',
	        items: [{
	            text: 'text only',
	            iconCls: 'view-text',
	            checked: true
	        },{
	            text: 'HTML',
	            iconCls: 'view-html'
	        }]
	    },
	    changeHandler: function(cycleBtn, activeItem) {
	        console.log('Change View', activeItem.text);
	    }
	});
   

});