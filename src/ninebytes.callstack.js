
Ninebytes.Callstack = function(callback) {
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

/**
 * WorkItem represents a URL target with a parameters object
 */
Ninebytes.Callstack.WorkItem = function(target, parameters) {
	this.target = target;
	this.parameters = parameters;
}

Ninebytes.Callstack.Static = {};

Ninebytes.Callstack.Static.callback = null;
Ninebytes.Callstack.Static.workItems = new Array();
Ninebytes.Callstack.Static.responseArray = new Array();

Ninebytes.Callstack.Static.addWorkItem = function(target, parameters) {
	Ninebytes.Callstack.Static.workItems.push(new Ninebytes.Callstack.WorkItem(target, parameters));
};

Ninebytes.Callstack.Static.execute = function() {
	if (Ninebytes.Callstack.Static.workItems.length <= 0) {
		Ninebytes.Callstack.Static.callback(this);
		return;
	}
	var workItem = Ninebytes.Callstack.Static.workItems.shift();
	$.getJSON(workItem.target, workItem.parameters, function(response) {
		Ninebytes.Callstack.Static.responseArray.push(response);
		Ninebytes.Callstack.Static.execute();
	});	
};
