//export em lista Array
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Nov', 'Dez'];

// export a constant
export const ANO_NASCIMENTO = 2014;

// export a class
export class User{
    constructor(name){
        this.name = name;
    }

    dizerOla(){
        console.log("ola");
    }
}