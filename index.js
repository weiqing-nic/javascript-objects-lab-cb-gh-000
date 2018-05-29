var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({ [key]: value }, object);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var rv = Object.assign({}, object);
  delete rv[key];
  return rv;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}