/**
 * Created by ajax on 10/16/14.
 */
function OOP(){}
OOP.prototype.implement = function (implementation, interface) {
    for (method in interface) {
        if (!implementation.hasOwnProperty(method) || typeof implementation[method] !== 'function') {
            throw new Error('Error in object'
                + implementation.toString()
                + '. Object must implement method ' + method
            );
        }
        if (implementation[method].length !== (interface[method].length)) {
            throw new Error('Method '
            + method
            + ' must have explicit '
            + interface[method].length
            + ' number of parameters');
        }
    }
};
