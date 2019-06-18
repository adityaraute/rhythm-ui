/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
* Register the Web Component with customElements
* @param tag - The HTML tag to use
*/
export const register = (tag: string = 'rui-link') => {
	// Register the new element with the browser.
	if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
		import('./RuiLink').then(module => {
			customElements.define(tag, module.RuiLink);
		});
	}
};

if (process.env.RUI_NO_DEFAULT_REGISTER !== 'true') {
	register();
}
