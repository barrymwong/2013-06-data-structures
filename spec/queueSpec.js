describe("queue", function() {
  var queue;

  /* BEGIN DO NOT MODIFY */
  beforeEach(function() {
    // Before each test runs, create a new Queue
    if (runner.is('src/functional') || runner.is('src/functional-shared')) {
      queue = makeQueue();
    } else if (runner.is('src/prototypal')) {
      queue = Queue();
    } else if (runner.is('src/pseudoclassical')) {
      queue = new Queue();
    }
  });
  /* END DO NOT MODIFY */

  // Any queue implementation should have the following methods
  it('should have "enqueue", "dequeue", and "size" methods', function() {
    expect(queue.enqueue).to.be.a('function');
    expect(queue.dequeue).to.be.a('function');
    expect(queue.size).to.be.a('function');
  });

  // Hey! Add tests here that thoroughly test the functionality of your queue
  describe("enqueue", function() {
    it('should add an item', function() {
      var queue = new makeQueue();
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('mouse');
      expect(queue.size()).to.equal(3);
    });
  });

  describe("dequeue", function() {
    it('should remove an item', function() {
      var queue = new makeQueue();
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('mouse');
      queue.dequeue();
      queue.dequeue();
      expect(queue.size()).to.equal(1);
    });
  });

  describe("first in, first out", function() {
    it('should add and remove items in the correct sequence', function() {
      var queue = new makeQueue();
      expect(queue.enqueue('dog')).to.equal('dog');
      expect(queue.enqueue('cat')).to.equal('cat');
      expect(queue.enqueue('mouse')).to.equal('mouse');
      expect(queue.dequeue()).to.equal('cat');
      expect(queue.dequeue()).to.equal('mouse');
    });
  });

  describe("size", function() {
    it('should show the current size', function() {
      var queue = new makeQueue();
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('mouse');
      expect(queue.size()).to.equal(3);
    });
  });
});
