var livescript = require('livescript');
var sysPath = require('path');

function LiveScriptCompiler(config) {
  this.config = config;
  plugins = config.plugins && config.plugins.livescript;
  this.map = !!config.sourceMaps ? 'linked' : 'none';
  this.bare = plugins && plugins.bare;
  if (this.bare == undefined) this.bare = true;
  this.const = plugins && plugins.const;
  if (this.const == undefined) this.const = false;
}

LiveScriptCompiler.prototype.brunchPlugin = true;
LiveScriptCompiler.prototype.type = 'javascript';
LiveScriptCompiler.prototype.extension = 'ls';

LiveScriptCompiler.prototype.compile = function(data, path, callback) {
  var compiled;
  try {
    compiled = livescript.compile(data, {
      filename: path,
      map: this.map,
      bare: this.bare,
      const: this.const,
      header: false
    });
  } catch (error) {
    callback(error.toString());
    return;
  }
  if (this.map === 'linked') {
    var code = compiled.code.replace("//# sourceMappingURL=undefined.map\n", "")
    callback(null, {data: code, map: compiled.map.toString()});
  } else {
    callback(null, compiled);
  }
  return;
};

module.exports = LiveScriptCompiler;
