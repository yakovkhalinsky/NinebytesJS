var ninebyt_es_callstack = function(callback) {
	this.callback = callback;
	
	this.targetArray = new Array();
	this.parametersArray = new Array();
	this.responseArray = new Array();
	
	this.addWorkItem = function(target, parameters) {
		this.targetArray.push(target);
		this.parametersArray.push(parameters);
	}
	
	this.execute = function() {
		if (this.targetArray.length <= 0) {
			this.callback(this);
			return;
		}
		var self = this;
		var target = this.targetArray.shift();
		var parameters = this.parametersArray.shift();
		$.getJSON(target, parameters, function(response) {
			self.responseArray.push(response);
			self.execute();
		});
	}
	
};
