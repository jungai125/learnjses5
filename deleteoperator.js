var obj = {
    x: 7,
    y: 2,
    z: 1
}
console.log(delete obj.x);
console.log(delete obj["y"]);
console.log(obj);
var a = 2;
console.log(delete a);
// var a = [1, "hi"]
// console.log(a.length)
// console.log(delete a[0])
// console.log(a[0])
// console.log(a)
// console.log(a.length)
// มันสามารถลบค่าได้เฉพาะในobj แต่ไม่สามารถลบค่าได้ใน objglobal หรือ syntax ผิดในโหมดstrict