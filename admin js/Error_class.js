'use strict';
class MyError{
	 constructor(name, message) {
        this.name = name;
        this.message = message;
    }
    get Name() {
        return (this.name);
    }
    get Message() {
        return (this.message);
    }

   /* set Name(newValue1) {
        this.name = newValue1;
    }
    set Message(newValue2) {
        this.message = newValue2;
    }*/
}