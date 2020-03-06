('use strict');

const bootStrapHelper = {};

bootStrapHelper.getBootStrapGridRow = function(
  id,
  elementType,
  additionalClasses
) {
  const bootstrapElement = document.createElement(elementType);
  id = helper.checkIfValueIsPresent(id) ? id : helper.getNextId();
  bootstrapElement.setAttribute('id', id);
  let bootStrapClass = helper.prependStringIfMissing(additionalClasses, 'row');
  bootstrapElement.setAttribute('class', bootStrapClass);
  return bootstrapElement;
};

bootStrapHelper.getootStrapGridColumn = function(
  id,
  elementType,
  additionalClasses
) {
  const bootstrapElement = document.createElement(elementType);
  id = helper.checkIfValueIsPresent(id) ? id : helper.getNextId();
  bootstrapElement.setAttribute('id', id);
  let bootStrapClass = helper.prependStringIfMissing(additionalClasses, 'col');
  bootstrapElement.setAttribute('class', bootStrapClass);
  return bootstrapElement;
};

// export default bootStrapHelper;
