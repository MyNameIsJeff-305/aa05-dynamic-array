class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if(this.length === 0) {
      this.data[0] = val;
      this.lenght = 1;
    }
    else {
      this.lenght++;
      this.data[this.data.length - 1] = val;
    }
  }


  pop() {

    // Your code here 
  }

  shift() {

    // Your code here 
  }

  unshift(val) {

    // Your code here 
  }

  indexOf(val) {

    // Your code here 
  }

  resize() {

    // Your code here 
  }

}

dynamicArr = new DynamicArray(8);
dynamicArr.push(2);
console.log(dynamicArr.read(0));


module.exports = DynamicArray;
