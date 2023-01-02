//classes > Class is a blueprint for creating objects 
class Player{
    score = 0;

    pause(){
        console.log("You have paused the game")
    }

    exit(){
        console.log("You have exited the game")
    }
}

const player1 = new Player();
player1.score = 100;
document.body.innerHTML = player1.score;
player1.exit();

const player2 = new Player();
player2.score=50;
document.body.innerHTML = 50;
player2.pause();

//constructors  >> Special methods of a class.
// > accepps arguments and assigns properties 

class Student{
    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`);
    }

}

const student1 = new Student("Masila", 45, 4.7);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

// static methods


