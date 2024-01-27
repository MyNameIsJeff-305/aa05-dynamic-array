class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    if(index > this.length - 1) return undefined;
    return this.data[index];
  }

  push(val) {
    if(this.length >= this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    if(this.length === 0) return undefined;
    this.length--;
    let result = this.data[this.length];
    //this.data[this.length] = undefined;
    return result;
  }

  shift() {
    if(this.length === 0) return undefined;
    let result = this.data[0];
    for (let i = 1; i < this.data.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.length--;
    return result;
  }

  unshift(val) {
    for (let i = this.data.length -1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    if(this.length === this.capacity) this.resize();
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {
    this.capacity *= 2;
    this.data.length = this.capacity;
  }

}

dynamicArr = new DynamicArray(8);



dynamicArr.push(10);
dynamicArr.push(11);
dynamicArr.push(12);
dynamicArr.push(13);
dynamicArr.push(14);
dynamicArr.unshift(9);

dynamicArr.unshift(8);
dynamicArr.unshift(7);

dynamicArr.unshift(6);

console.log(dynamicArr.data)





module.exports = DynamicArray;
