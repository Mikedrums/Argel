Ext.onReady(function() {

	var store = Ext.create('Ext.data.TreeStore', {
		/*
		root: {
			expanded: true,
			children: [
				{ text: 'Menu Option 1', leaf: true },
				{ text: 'Menu Option 2', expanded: true,
					children: [
						{ text: 'Sub Menu Option 2.1', leaf: true },
						{ text: 'Sub Menu Option 2.2', leaf: true }
					]},
				{ text: 'Menu Option 3', leaf: true }
			]
		},
		*/
		proxy: {
			type: 'ajax',
			api: {
				read: 'drag-drop.json',
				create: 'create.php'
			}
		},
		writer: {
			type: 'json',
			writeAllFields: true,
			encode: false
		},
		autoSync: true,
		folderSort: true,
		sorters: [{
			property: 'text',
			direction: 'ASC'
		}]
	});

	var tree = Ext.create('Ext.tree.Panel', {
		title: 'Simple Tree',
		width: 200,
		renderTo: 'tree-example',
		store: store,
		rootVisible: false,
		viewConfig: {
			plugins: {
				ptype: 'treeviewdragdrop'
			}
		}
	});

	tree.show();

});