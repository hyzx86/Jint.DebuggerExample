//import test from "example-module.js";
class Test {
    init(prefix) {
        this.prefix = prefix;
    }

    run() {
        this.values = [];
        for (let i = 0; i < 10; i++) {
            this.values.push(this.prefix + i);
        }
    }
}
test.init("Hello world!");
test.run();
