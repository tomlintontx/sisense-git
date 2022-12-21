window.addEventListener('message',(payload) => {
	
	if(payload.data.sender == 'sisense') {
		prism.activeDashboard.widgets.$$widgets[0].metadata.panels[0].items[0].jaql.level = payload.data.value
		prism.activeDashboard.widgets.$$widgets[0].changesMade('tomsAppEvent',['metadata'])
		prism.activeDashboard.widgets.$$widgets[0].refresh()
	}
	
});