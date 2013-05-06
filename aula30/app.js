
Ext.define('Blog.Toolbar', {
	extend: 'Ext.toolbar.Toolbar',
	alias: 'widget.minhatoolbar',
    width   : 500,
    items: [
    	'->', // mesma coisa que { xtype: 'tbfill' },
        {
            text: 'Button'
        },
        { xtype: 'tbspacer', width: 20 },
        {
            xtype: 'splitbutton',
            text : 'Split Button'
        },
        ' ', // mesma coisa que { xtype: 'tbspacer' },
        '-', // mesma coisa que { xtype: 'tbseparator' },
        ' ',
        {
        	xtype: 'button',
        	text: 'B'
        },
        {
        	xtype: 'button',
        	text: 'I'
        },
        {
        	xtype: 'button',
        	text: 'U'
        }
    ]
});

Ext.onReady(function(){

	Ext.create('Ext.panel.Panel', {
		title: 'Aula 30',
		width: 600,
		height: 400,
		renderTo: Ext.getBody(),
		html: 'algum conteudo aqui',

		dockedItems: [
		{
			xtype: 'minhatoolbar',
			dock: 'top'
		}]
	});

});
