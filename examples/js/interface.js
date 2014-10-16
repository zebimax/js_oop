/**
 * Created by ajax on 10/16/14.
 */
var oop = new OOP();

var XInterface = {
    methodMustHave: function (a, b, c) {}
};

var YImplementation = {
    methodMustHave: function ( b, c) {
        alert('Successful implementation:'
            + 'number of parameters - '
            + this.methodMustHave.length
        );
    }
};

oop.implement(YImplementation, XInterface);

YImplementation.methodMustHave();