Ext.onReady(function() {

	Ext.define('Book', {
		extend: 'Ext.data.Model',
		fields: [
			{name: 'book'},
			{name: 'topic', type: 'string'},
			{name: 'version', type: 'string'},
			{name: 'released', type: 'boolean'},
			{name: 'releasedDate', type: 'date'},
			{name: 'value', type: 'number'},
			{name: 'author', type: 'string'}
			]
	});

	var store = Ext.create('Ext.data.Store', {
		model: 'Book',
		groupField: 'author',
		data: [
		{book: 'Ext JS 4: First Look',topic: 'Ext JS',version: '4',released: false,releasedDate: null,value: 0,author: 'Luis Bonfá'},
		{book: 'Learning Ext JS 3.2',topic: 'Ext JS',version: '3.2',released: true,releasedDate: '2010/10/01',value: 40.49,author: 'Luis Bonfá'},
		{book: 'Ext JS 3.0 Cookbook',topic: 'Ext JS',version: '3',released: true,releasedDate: '2009/10/01',value: 44.99,author: 'Alexandre Cardoso'},
		{book: 'Learning Ext JS',topic: 'Ext JS',version: '2.x',released: true,releasedDate: '2008/11/01',value: 35.99,author: 'Alexandre Cardoso'},
		{book: 'Mastering ExtJS: Raw',topic: 'Ext JS',version: '4',released: true,releasedDate: '2012/12/03',value: 38.99,author: 'Alexandre Cardoso'},
		],
		proxy: {
			type: 'ajax',
			api: {
				read: 'dao/view.php',
				create: 'dao/create.php',
				update: 'dao/update.php',
				destroy: 'dao/delete.php'
			},
			reader: {
				type: 'json',
				root: 'data',
				successProperty: 'success'
			},
			writer: {
				type: 'json',
				writeAllFields: true,
				encode: false,
				root: 'data'
			}
		}
	});

	var rowEditor = Ext.create('Ext.grid.plugin.RowEditing', {
		clicksToEdit: 1
	})

	var grid = Ext.create('Ext.grid.Panel', {
		store: store,
		width: 750,
		height: 400,
		title: 'Ext JS Books',
		renderTo: 'grid-example',
		frame: true,
		// selType: 'cellmodel',
		selType: 'rowmodel',
		features: [
			//{ftype: 'grouping',
			//	groupHeaderTpl: '{name} ({rows.length} Book{[values.rows.length > 1 ? "s" : ""]})'},
			{ftype: 'groupingsummary',
				groupHeaderTpl: 'Total {name}'},
			{ftype: 'summary'},
			{ftype: 'rowbody',
				getAdditionalData: function(data, idx, record, orig) {
					return {
						rowBody: Ext.String.format(
							'<div>->topic:<span> {0}</span></div>',
							data.topic)
					};
				}},
			{ftype: 'rowwrap'}
		],		
		selModel: Ext.create('Ext.selection.CheckboxModel'),
		plugins: rowEditor,

		dockedItems: [{
			xtype: 'toolbar',
			items: [{
				text: 'Add',
				handler: function() {
					rowEditor.cancelEdit();
					var r = Ext.ModelManager.create({
						book: 'O último garfo',
						topic: 'Fiction',
						version: '1.0',
						released: false,
						releasedDate: null,
						value: 33.90,
						author: 'George Jetsons'
					}, 'Book');
					store.insert(0, r);
					rowEditor.startEdit(0, 0);
				}
			},{
				text: 'Delete',
				handler: function() {
					var sm = grid.getSelectionModel();
					rowEditor.cancelEdit();
					store.remove(sm.getSelection());
					if (store.getCount() > 0) {
						sm.select(0);
					}
				}
			}]
		}],
		
		columns: [
			Ext.create('Ext.grid.RowNumberer'),
			{
				text: 'Book',
				flex: 1,
				dataIndex: 'book',
				summaryType: 'count',
				summaryRenderer: function(value){
					return Ext.String.format('{0} book{1}', value, value !== 1 ? 's' : '');
				}
			},{
				text: 'Author',
				flex: 1,
				dataIndex: 'author',
				editor: {
					xtype: 'textfield',
					allowBlank: false
				}
			},{
				text: 'Category',
				xtype: 'templatecolumn',
				width: 100,
				tpl: '{topic} {version}'
			},{
				text: 'Already Released?',
				xtype: 'booleancolumn',
				width: 100,
				dataIndex: 'released',
				trueText: 'Yes',
				falseText: 'No'
			},{
				text: 'Released Date',
				xtype: 'datecolumn',
				width: 100,
				dataIndex: 'releasedDate',
				format: 'm-Y'
			},{
				text: 'Price',
				xtype: 'numbercolumn',
				width: 80,
				dataIndex: 'value',
				renderer: Ext.util.Format.usMoney,
				summaryType: 'sum',
				editor: {
					xtype:'textfield',
					allowBlank: false
				}
			},{
				xtype: 'actioncolumn',
				width: 50,
				items: [{
					icon: 'images/edit.png',
					tooltip: 'Edit',
					handler: function(grid, rowIndex, colIndex) {
						var rec = grid.getStore().getAt(rowIndex);
						Ext.MessageBox.alert('Edit', rec.get('book'));
					}
				},{
					icon: 'images/delete.gif',
					tootip: 'Delete',
					handler: function(grid, rowIndex, colIndex) {
						var rec = grid.getStore().getAt(rowIndex);
						Ext.MessageBox.alert('Delete',rec.get('book'));
					}
				}]
			}
		],
	});

	grid.show();

});