interface Person {
  name: string;
  age: number;
}

export default class User implements Person{
  name: string;
  age: number;
  constuctor(){
    this.name = 'Petia';
    this.age = 40;
  }

  private logInfo(){
    console.log(this.name +' ' + this.age);
  }
}
