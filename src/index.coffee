LiveScript = require 'LiveScript'
sysPath = require 'path'

module.exports = class LiveScriptCompiler
  brunchPlugin: yes
  type: 'javascript'
  extension: 'ls'

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    try
      result = LiveScript.compile data, bare: yes
    catch err
      error = err
    finally
      callback error, result

  include: [
    (sysPath.join __dirname, '..', 'vendor', 'prelude-browser-0.6.0.js')
  ]
