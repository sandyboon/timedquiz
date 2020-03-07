('use strict');

const bootStrapHelper = {};

bootStrapHelper.getBootStrapGridRow = function(
  id,
  elementType,
  additionalClasses
) {
  let bootstrapElement = createDomElement(id, elementType);
  let bootStrapClass = helper.prependStringIfMissing(
    additionalClasses,
    'row',
    true
  );
  bootstrapElement.setAttribute('class', bootStrapClass);
  return bootstrapElement;
};

bootStrapHelper.getootStrapGridColumn = function(
  id,
  elementType,
  additionalClasses
) {
  let bootstrapElement = createDomElement(id, elementType);
  let bootStrapClass = helper.prependStringIfMissing(
    additionalClasses,
    'col',
    true
  );
  bootstrapElement.setAttribute('class', bootStrapClass);
  return bootstrapElement;
};

bootStrapHelper.getBootStrapButton = function(
  id,
  btnSize,
  btnType,
  additionalClasses
) {
  let bootstrapElement = createDomElement(id, 'button');
  let bootStrapClass = 'btn';
  bootStrapClass = helper.checkIfValueIsPresent(btnType)
    ? bootStrapClass.concat(' ').concat(btnType)
    : bootStrapClass;
  bootStrapClass = helper.checkIfValueIsPresent(btnSize)
    ? bootStrapClass.concat(' ').concat(btnSize)
    : bootStrapClass;
  bootStrapClass = helper.checkIfValueIsPresent(additionalClasses)
    ? bootStrapClass.concat(' ').concat(additionalClasses)
    : bootStrapClass;
  bootstrapElement.setAttribute('class', bootStrapClass);
  return bootstrapElement;
};

bootStrapHelper.getBootStrapBadge = function(id, badgeType, additionalClasses) {
  let bootstrapElement = createDomElement(id, 'span');
  let bootStrapClass = 'badge';
  bootStrapClass = helper.checkIfValueIsPresent(badgeType)
    ? bootStrapClass.concat(' ').concat(badgeType)
    : bootStrapClass;
  bootStrapClass = helper.checkIfValueIsPresent(additionalClasses)
    ? bootStrapClass.concat(' ').concat(additionalClasses)
    : bootStrapClass;
  bootstrapElement.setAttribute('class', bootStrapClass);
  return bootstrapElement;
};

function createDomElement(id, domElementType) {
  let domElement = document.createElement(domElementType);
  id = helper.checkIfValueIsPresent(id) ? id : helper.getNextId();
  domElement.setAttribute('id', id);
  return domElement;
}

// export default bootStrapHelper;
