import swc from "@swc/core";
import {
  _validateConfig,
  _prepConfig,
  _parseImports,
  _parseExports,
  _match,
} from "./utils";

export const parseWrappers = async (file, config = {}) => {
  const CONFIG = _prepConfig(config);

  return new Promise(async (resolve, reject) => {
    _validateConfig(CONFIG)
      .then(() => {
        swc
          .parseFile(file, CONFIG.parser)
          .then((module) => {
            const IMPORTS = _parseImports(module);
            const EXPORTS = _parseExports(module);
            _match(IMPORTS, EXPORTS, CONFIG)
              .then((parsed) => resolve(parsed))
              .catch((err) => reject({ type: "MatchError", message: err }));
          })
          .catch((err) => reject({ type: "ParseError", message: err }));
      })
      .catch((err) => reject({ type: "InvalidConfigError", message: err }));
  });
};
