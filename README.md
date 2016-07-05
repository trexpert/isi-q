q extensions and helpers
========================

Methods
-------
- [contructur](#contructur)
- [reserveSemaphore](#reserveSemaphore)
- [resolveSemaphore](#resolveSemaphore)

### contructur()
**contructur(maxAmount, timeout)**

Options:
- maxAmount: 
- timeout:
 
description comes here

### How to use()
**reserveSemaphore()** and **resolveSemaphore()**


Example:

```js
var isiQ = require('isi-q')
var QSemaphore = new isiQ(5, 50);

for(var i = 0; i < 10; ++i){
    var operation = QSemaphore.reserveSemaphore();
    operation.then(function(){
        console.log('free semaphore reserved');
    })
    operation.then( myClass.work1 );
    operation.then( myClass.work2 );
    operation.then( eiSem.resolveSemaphore.bind(this) );
}

```
