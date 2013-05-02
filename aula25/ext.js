Ext.onReady(function(){
	
	Ext.create('Ext.Button',{
		text: 'Alert',
		renderTo: 'btnAlert',
		handler: function() {
			Ext.MessageBox.alert('Alert','It works!', function(btn) {
				console.log('Button pressed ' + btn)
			})
		}
	});

	Ext.create('Ext.Button',{
		text: 'Confirmação',
		renderTo: 'btnConfirm',
		handler: function() {
			Ext.MessageBox.confirm('Confirmação','Deseja mesmo deletar o cliente?', function(btn) {
				console.log('Button pressed ' + btn);
				if (btn == 'yes') {
					Ext.MessageBox.alert('Alert', 'Registro Deletado com Sucesso!')
				} else {
					console.log('Ação Cancelada')
				}
			})
		}
	});

	Ext.create('Ext.Button',{
		text: 'Prompt',
		renderTo: 'btnPrompt',
		handler: function() {
			Ext.MessageBox.prompt('Prompt','Qual o seu nome?', function(btn, text) {
				console.log('Button pressed: ' + btn);
				console.log('Texto: ' + text);
				if (btn == 'ok') {
					Ext.MessageBox.alert('Alert', 'Bem vindo ' + text)
				} else {
					console.log('Ação Cancelada')
				}
			})
		}
	});

	Ext.create('Ext.Button',{
		text: 'Prompt Multiline',
		renderTo: 'btnPromptMulti',
		handler: function() {
			Ext.MessageBox.prompt('Prompt','O que você gosta de fazer?', function(btn, text) {
				console.log('Button pressed: ' + btn);
				console.log('Texto: ' + text);
				if (btn == 'ok') {
					Ext.MessageBox.alert('Mensagem', text)
				} else {
					console.log('Ação Cancelada')
				}
			}, this, true, 'teste')
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - ERROR',
		renderTo: 'btnError',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Erro',
				msg: 'Algo deu errado',
				icon: Ext.MessageBox.ERROR
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - INFO',
		renderTo: 'btnInfo',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Info',
				msg: 'Algo aconteceu',
				icon: Ext.MessageBox.INFO
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - QUESTION',
		renderTo: 'btnQuest',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Question',
				msg: 'Tem certeza',
				icon: Ext.MessageBox.QUESTION
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - WARNING',
		renderTo: 'btnWarn',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Warning',
				msg: 'Cuidado com isso..',
				icon: Ext.MessageBox.WARNING,
				buttons: Ext.MessageBox.CANCEL,
				fn: function(btn) {
					console.log('deu ' + btn);
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Show - Prompt',
		renderTo: 'btnShowPrompt',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Show Prompt',
				msg: 'Qual a Boa hoje?',
				prompt: true,
				width: 400,
				icon: Ext.MessageBox.WARNING,
				buttons: Ext.MessageBox.OK,
				fn: function(btn, text) {
					console.log('deu ' + btn + ' / ' + text);
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Show - Progresso',
		renderTo: 'btnProg',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Concluindo...',
				msg: 'Carregando os dados...',
				progressText: 'vai menina!',
				progress: true,
				closable: false,
				width: 300
			});

			var f = function(v) {
				return function() {
					if (v==12) {
						Ext.MessageBox.hide();
						Ext.MessageBox.alert('Pronto!', 'Acabou tudo!');
					} else {
						var i = v/11;
						Ext.MessageBox.updateProgress(i, Math.round(100*i)+'%');
					}
				};
			}

			for (var i=1; i<13; i++) {
				setTimeout(f(i), i*500);
			}
		}
	});


	Ext.create('Ext.Button', {
		text: 'Show - Wait',
		renderTo: 'btnWait',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Espere...',
				msg: 'Salvando os dados...',
				wait: true,
				waitConfig: {interval: 200},
				closable: false,
				width: 300
			});
			
			setTimeout(function(){
				Ext.MessageBox.hide();
				Ext.MessageBox.alert('Pronto','Dados salvos com sucesso');
			}, 8000);
		}
	});

	Ext.create('Ext.Button', {
		text: 'Botão Customizado',
		renderTo: 'btnCustom',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Botão Customizado',
				msg: 'Cuidado com isso..',
				icon: Ext.MessageBox.WARNING,
				buttons: Ext.MessageBox.YESNOCANCEL,
				buttonText: {
					yes: 'Sim',
					no: 'Não',
					cancel: 'Cancelar'
				},
				fn: function(btn) {
					console.log('deu ' + btn);
					if (btn == 'yes') {
						Ext.MessageBox.alert('alert', 'sim');
					} else if (btn == 'no') {
						Ext.MessageBox.alert('alert', 'no');
					} else if (btn == 'cancel') {
						Ext.MessageBox.alert('alert', 'cancel');
					}
				}
			});
		}
	});

	Ext.create('Ext.Button', {
		text: 'Icone - Custom',
		renderTo: 'btnIconCustom',
		handler: function() {
			Ext.MessageBox.show({
				title: 'Meu Ícone',
				msg: 'Tem certeza',
				icon: Ext.MessageBox.QUESTION
			});
		}
	});



});
