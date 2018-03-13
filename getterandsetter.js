var some = {
    col: "burnblue",
    set color(para) { //setค่าได้แต่ไม่สามารถปรื้นออกมาได้
        this.col = para;
    },
    get color() {
        return this.col //ดูค่าได้แต่setค่าไม่ได้
    }
};
console.log(some.color)
some.color = "red"
console.log(some.color)