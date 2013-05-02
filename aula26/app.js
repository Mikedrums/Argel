Ext.onReady(function(){
	Ext.create('Ext.panel.Panel',{
		title: 'Meu primeiro Panel',
		width: 300,
		height: 100,
		html: '<p>Isso aqui é o corpo do Panel.</p>',
		renderTo: 'myPanel1'
	});

	Ext.create('Ext.data.Store', {
		storeId: 'myStore',
		fields: ['name', 'email', 'phone'],
		data: {'items': [
			{"name": "Luis", "email": "l@email.com", "phone": "19 9999-0000" },
			{"name": "Alexandre", "email":"a@email.com", "phone":"19 9999-0001" },
			{"name": "Bonfá", "email":"b@email.com", "phone":"19 9999-0002" },
			{'name': 'Cardoso', 'email':'c@email.com', 'phone':'19 9999-0003' }
		]},
		proxy: {
			type: 'memory',
			reader: {
				type: 'json',
				root: 'items'
			}
		}
	});

	var grid = Ext.create('Ext.grid.Panel', {
		title: 'Store',
		store: Ext.data.StoreManager.lookup('myStore'),
		columns: [
			{header: 'Name', dataIndex: 'name'},
			{header: 'e-mail', dataIndex: 'email'},
			{header: 'Phone', dataIndex: 'phone'}
		],
		width: 300,
		height: 300
	});

	var panel = Ext.create('Ext.panel.Panel',{
		title: 'Meu segundo Panel',
		width: 500,
		height: 600,
		items: [
			{
				xtype: 'displayfield',
				fieldLabel: 'Nome',
				name: 'nome',
				value: 'Alexandre'
			},
			grid

		],
		renderTo: 'myPanel2'
	});

	var store = Ext.create('Ext.data.TreeStore', {
		root: {
			expanded: true,
			children: [
				{text: 'detention', leaf: true },
				{text: 'homework', expande: true, children: [
					{text: "book report", leaf: true },
					{text: "alegrbra", leaf: true }
				]},
				{text: "buy lottery tickets", leaf: true }
			]
		}
	});

	var tree = Ext.create('Ext.tree.Panel', {
		title: 'Simple Tree',
		width: 200,
		height: 150,
		store: store,
		rootVisible: false
	});

	panel.add(tree);

	// panel.remove(grid);


});