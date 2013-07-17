var makeStack = function(){
  var storage = {};
  var size = 0;
  var stack = {};

  var first = 0;
  var last = 0;

  stack.push = function(value){
    storage[size++] = value;
    return storage[size];
  };

  stack.pop = function(){
    delete storage[--size];
    return storage[size];
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
