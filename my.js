class Apple {
    constructor() {
        this.weight = 3
    }

    decrease() {
        if (this.isEmpty()) {
            alert("system: Hết táo rồi còn đâu")
        } else {
            this.weight--
        }
    }

    isEmpty() {
        return this.weight === 0;
    }

    getWeight() {
        return this.weight
    }
}

class Human {
    constructor(name, sex, weight) {
        this.name = name
        this.gender = sex
        this.weight = weight
    }

    isMale() {
        return this.gender === male
    }

    setGender(sex) {
        this.gender = sex
    }

    checkApple() {
        apple.weight = apple.getWeight()

        console.log("Đvi táo: " + apple.weight);
    }

    eat() {
        if (apple.isEmpty()) {
            console.log("hết táo r đại ca "+ this.name +" ơi")
            console.log(this.name+" lên "+this.getWeight()+"kg rồi này.")
            console.log("Và thế là họ chung sống với nhau suốt đời")
        } else {
            apple.decrease();
            this.weight++;
            console.log(this.name + " ăn 1 miếng nên mất 1 miếng táo chứ sao" )
            this.checkApple()
        }
    }

    say() {
        let s2 = prompt("Nói gì?");
        let s1 = "Chào, Tôi tên là " + this.name
            + " Quê tôi ở Việt Nam, tôi nặng " + this.weight + " kg hihi.";
        console.log(s1 + " " + s2);
    }

    say1(){
        let a = prompt(this.name+" nói gì")
        console.log(this.name+" say: "+ a)
    }

    getName() {
        return this.name
    }

    setName() {
        this.name = name
    }

    getWeight() {
        return this.weight
    }

    setWeight() {
        this.weight = weight
    }

}