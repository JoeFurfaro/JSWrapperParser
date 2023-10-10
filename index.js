import swc from "@swc/core";
import fs from 'fs'
import path from 'path'
import {
  _validateConfig,
  _prepConfig,
  _parseImports,
  _parseExports,
  _match,
} from "./utils";

const parseFile = (path, config) => {
  _validateConfig(config);

  let module = null;
  try { module = swc.parseFileSync(path, config.parser); }
  catch (err) { throw { type: "ParseError", message: err } }

  const IMPORTS = _parseImports(module);
  const EXPORTS = _parseExports(module);
  try { return _match(IMPORTS, EXPORTS, config, path); }
  catch (matchErr) { throw { type: "MatchError", message: matchErr } }
};

const mergeResults = (inputs) => {
  const merged = {};
  for(const input of inputs) {
    console.log(input);
    for(const key of Object.keys(input)) {
      if (Object.keys(merged).includes(key)) merged[key] = merged[key].concat(input[key]);
      else merged[key] = input[key];
    }
  }
  console.log(merged);
  return merged;
};

export const parseWrappers = (file, config = {}) => {
  const CONFIG = _prepConfig(config);

  if (fs.lstatSync(file).isDirectory()) {
    const listing = fs.readdirSync(file, {withFileTypes: true});
    let merged = {};
    for(const internal_file of listing) {
      if (['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(internal_file.name)) || fs.lstatSync(path.join(file, internal_file.name)).isDirectory()) {
          let parsed = parseWrappers(path.join(file, internal_file.name), config);
          merged = mergeResults([merged, parsed]);
      }
    }
    return merged;
  }else{
    // Parse 1 file
    return parseFile(file, CONFIG);
  }
};
