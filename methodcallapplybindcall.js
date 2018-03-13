var obj1 = {
    value: 20
};
var obj2 = {
    myFunction: function(para1, para2) {
        var value = this.value;
        console.log(para1, para2, value);
    }
}
obj2.myFunction(1, 10);
obj2.myFunction.call(obj1, 1, 10); //มันจะส่งค่าที่เป็น objที่parameterตัวแรกเท่านั้นเพื่อใช้ฟังก์ชั่นcall apply bind
obj2.myFunction.apply(obj1, [1, 10]);
var f = obj2.myFunction.bind(obj1, 1, 10);
f();