function require(name) {

  if (name in require.cache)
    return require.cache[name];
  if(name in require.loading)
      return require.loading[name];

  var code = new Function("exports, module", readFile(name));
  var exports = {}, module = {exports: exports};
  require.loading[name]=module.exports;
  code(exports, module);
  require.cache[name] = module.exports;
  return module.exports;
}
require.cache = Object.create(null);
require.loading = Object.create(null);
