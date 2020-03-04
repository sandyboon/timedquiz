('use strict');

const bootStrapHelper = {};

bootStrapHelper.getBootStrapGridRow = function(
  id,
  elementType,
  additionalClasses
) {
  const bootstrapRow = document.createElement(elementType);
  id = helper.checkIfValueIsPresent(id) ? id : helper.getNextId();
  bootstrapRow.setAttribute('id', id);
  let bootStrapClass = helper.prependStringIfMissing(additionalClasses, 'row');
  bootstrapRow.setAttribute('class', bootStrapClass);
  return bootstrapRow;
};

bootStrapHelper.getootStrapGridColumn = function(
  id,
  elementType,
  additionalClasses
) {
  const bootstrapColumn = document.createElement(elementType);
  id = helper.checkIfValueIsPresent(id) ? id : helper.getNextId();
  bootstrapColumn.setAttribute('id', id);
  let bootStrapClass = helper.prependStringIfMissing(additionalClasses, 'col');
  bootstrapColumn.setAttribute('class', bootStrapClass);
  return bootstrapColumn;
};

// export default bootStrapHelper;
