var obj = {
    a: 8,
    myFunc: function(para) {
        this.a = para
    },
    myFunc: function() {
        console.log(this.a)
    }
}
console.log(obj.a)
obj.a = 2;
console.log(obj.a)