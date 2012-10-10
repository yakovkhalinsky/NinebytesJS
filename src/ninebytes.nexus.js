var Ninebytes = { };

Ninebytes.Nexus = {};

/**
 * Console is the name space used for Ninebytes console logging
 */
Ninebytes.Nexus.console = {};

Ninebytes.Nexus.console.DEBUG = { level : 0, name : 'DEBUG' };
Ninebytes.Nexus.console.INFO = { level : 1, name : 'INFO' };
Ninebytes.Nexus.console.WARN = { level : 2, name : 'WARN' };
Ninebytes.Nexus.console.ERROR = { level : 3, name : 'ERROR' };
Ninebytes.Nexus.console.FATAL = { level : 4, name : 'FATAL' };

/**
 * This is the minimum logging level, anything below this logging level is ignored
 */
Ninebytes.Nexus.console.LOGGING_LEVEL = Ninebytes.Nexus.console.WARN;

/**
 * Base method for Ninebytes logging, takes LEVEL argument and message
 */
Ninebytes.Nexus.console.message = function(LEVEL, message) {
	if (LEVEL.level >= Ninebytes.Nexus.console.LOGGING_LEVEL.level) {
		try {
			var output = '['+new Date()+']['+LEVEL.name+'] ';
			if (message instanceof Object) {
				console.log(output+='Object Output Follows:');
				console.log(message);
			} else {
				console.log(output += message);
			}
		} catch (e) {
			//
		}
	}
};

/**
 * Shortcut to do logging at DEBUG level
 */
Ninebytes.Nexus.console.debug = function(message){
	Ninebytes.Nexus.console.message(Ninebytes.Nexus.console.DEBUG, message);
};

/**
 * Shortcut to do logging at INFO level
 */
Ninebytes.Nexus.console.info = function(message){
	Ninebytes.Nexus.console.message(Ninebytes.Nexus.console.INFO, message);
};

/**
 * Shortcut to do logging at WARN level
 */
Ninebytes.Nexus.console.warn = function(message){
	Ninebytes.Nexus.console.message(Ninebytes.Nexus.console.WARN, message);
};

/**
 * Shortcut to do logging at ERROR level
 */
Ninebytes.Nexus.console.error = function(message){
	Ninebytes.Nexus.console.message(Ninebytes.Nexus.console.ERROR, message);
};

/**
 * Shortcut to do logging at FATAL level
 */
Ninebytes.Nexus.console.fatal = function(message){
	Ninebytes.Nexus.console.message(Ninebytes.Nexus.console.FATAL, message);
};
