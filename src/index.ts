function greet(): Promise<String> {
    return new Promise<String>(resolve => {
        return resolve("Hello world");
    });
}

console.log("hello world!");

greet().then(data=>console.log(data));
