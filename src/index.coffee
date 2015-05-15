livescript = require 'livescript'
sysPath = require 'path'

module.exports = class LivecriptCompiler
  brunchPlugin: yes
  type: 'javascript'
  extension: 'ls'

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    try
      result = livescript.compile data, bare: yes, header: no
    catch err
      error = err
    finally
      callback error, result
