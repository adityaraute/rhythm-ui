/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {RuiGrid} from './RuiGrid';

// Register the new element with the browser.
if (typeof window !== 'undefined' && !window.customElements.get(RuiGrid.tag)) {
	//window.MarkdownBoldButtonElement = MarkdownBoldButtonElement
	customElements.define(RuiGrid.tag, RuiGrid);
}

export default RuiGrid;
