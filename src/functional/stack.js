var makeStack = function(){
  var storage = {};
  var size = 0;
  var stack = {};

  stack.push = function(value){
    storage[++size] = value;
    return storage[size];
  };

  stack.pop = function(){
    if(size > 0) {
      delete storage[size--];
      return storage[size];
    }
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
