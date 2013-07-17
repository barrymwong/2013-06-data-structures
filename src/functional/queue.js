var makeQueue = function(){
  var storage = {};

  var size = 0;
  var first = 0;
  var last = 1;

  var queue = {};

  queue.enqueue = function(value){
    size++;
    storage[++first] = value;
    console.log(storage, size);
    return storage[first];
  };

  queue.dequeue = function(){
    if(size > 0) {
      size--;
      delete storage[last];
      console.log(storage, size);
      return storage[++last];
    }
  };

  queue.size = function(){
    return size;
  };

  return queue;
};
