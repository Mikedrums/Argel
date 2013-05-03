Ext.onReady(function() {

	Ext.tip.QuickTipManager.init();

	Ext.create('Ext.menu.Menu', {
	    width: 200,
	    margin: '0 0 10 0',
	    floating: false,
	    renderTo: 'btn1',
	    items: [{
	        text: 'regular item 1'
	    },{
	        text: 'regular item 2'
	    },{
	        text: 'regular item 3'
	    }]
	});

	Ext.create('Ext.menu.Menu', {
	    width: 200,
	    plain: true,
	    floating: false,
	    renderTo: 'btn2',
	    items: [{
	        text: 'plain item 1',
	        xtype: 'menucheckitem'
	    },{
	    	xtype: 'menuseparator'
	    },{
	        text: 'plain item 2',
	        iconCls: 'icone'
	    },{
	        text: 'plain item 3',
	        menu: Ext.create('Ext.menu.Menu', {
	        	items: [{
	        		text: 'sub 1',
	        		handler: function() {
	        			console.log('sub 1');
	        		}
	        	},{
	        		text: 'sub 2'
	        	}]
	        })
	    },{
	    	text: 'Escolha uma data:',
	    	menu: Ext.create('Ext.menu.DatePicker', {
	    		handler: function(dp, date) {
	    			console.log('Date Selected', 'You selected ' + Ext.Date.format(date,'M j, Y'));
	    		}
	    	})
	    },{
	    	text: 'Escolha uma cor:',
	    	menu: Ext.create('Ext.menu.ColorPicker',{
	    		value: '000000',
	    		listeners: {
	    			select: {
	    				fn: function(menu, color, opt) {
	    					console.log('cor selecionada ' + color); 
	    				}
	    			}
	    		}
	    	})
	    }]
	});

})