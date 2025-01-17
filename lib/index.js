'use strict';

const checkAgainstRule = require('./utils/checkAgainstRule');
const createPlugin = require('./createPlugin');
const createStylelint = require('./createStylelint');
const formatters = require('./formatters');
const postcssPlugin = require('./postcssPlugin');
const report = require('./utils/report');
const ruleMessages = require('./utils/ruleMessages');
const rules = require('./rules');
const standalone = require('./standalone');
const validateOptions = require('./utils/validateOptions');
const resolveConfig = require('./resolveConfig');

/** @type {import('ec0lint-style').PublicApi} */
const ec0lint_for_css = Object.assign(postcssPlugin, {
	lint: standalone,
	rules,
	formatters,
	createPlugin,
	resolveConfig,
	createLinter: createStylelint,
	utils: {
		report,
		ruleMessages,
		validateOptions,
		checkAgainstRule,
	},
});

module.exports = ec0lint_for_css;
