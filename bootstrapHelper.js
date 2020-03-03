'use strict';

import helper from './helper.js';

const bootStrapHelper = bootStrapHelper || {};

bootStrapHelper.getBootStrapGridRow = function(id, elementType, additionalClasses) {
    const bootstrapRow = document.createElement(elementType);
    id = helper.checkIfValueIsPresent(id) ? id : helper.getNextId();
    bootstrapRow.setAttribute('id', id);
    let bootStrapClass = helper.prependStringIfMissing(additionalClasses, 'row');
    return bootstrapRow;
};

bootStrapHelper.getootStrapGridColumn = function(id, elementType, additionalClasses) {
    const bootstrapColumn = document.createElement(elementType);
    id = helper.checkIfValueIsPresent(id) ? id : helper.getNextId();
    bootstrapRow.setAttribute('id', id);
    let bootStrapClass = helper.prependStringIfMissing(additionalClasses, 'col');
    return bootstrapRow;
};

export default bootStrapHelper;
