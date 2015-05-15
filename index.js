var livescript = require('livescript');
var sysPath = require('path');

function LiveScriptCompiler(config) {
  this.config = config;
}

LiveScriptCompiler.prototype.brunchPlugin = true;
LiveScriptCompiler.prototype.type = 'javascript';
LiveScriptCompiler.prototype.extension = 'ls';

LiveScriptCompiler.prototype.compile = function(data, path, callback) {
  var err, error, result;
  try {
    return result = livescript.compile(data, {
      bare: true,
      header: false
    });
  } catch (_error) {
    err = _error;
    return error = err;
  } finally {
    callback(error, result);
  }
};

module.exports = LiveScriptCompiler;
