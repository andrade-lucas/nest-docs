export class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public connectToDB(): boolean {
        return Singleton.instance ? true : false;
    }
}

function main() {
    let singleton1 = Singleton.getInstance();
    let singleton2 = Singleton.getInstance();

    if (singleton1 == singleton2)
        console.log('Equal');
    else
        console.log('Not equal');
}
