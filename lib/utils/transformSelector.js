'use strict';

const selectorParser = require('postcss-selector-parser');

/**
 * @param {import('ec0lint-style').PostcssResult} result
 * @param {import('postcss').Rule} node
 * @param {(root: import('postcss-selector-parser').Root) => void} callback
 */
module.exports = function transformSelector(result, node, callback) {
	try {
		return selectorParser(callback).processSync(node, { updateSelector: true });
	} catch {
		result.warn('Cannot parse selector', { node, stylelintType: 'parseError' });
	}
};
