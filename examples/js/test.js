/**
 * Created by ajax on 10/17/14.
 */
window.onload = onDocLoad;
var ObjInternal = (function (){
    var internalProperty = 123;
    return {
        publicMethod: function () {
            return [
                'You can\'t modify property internalProperty',
                internalProperty
            ];
        }
    }
})();
function onBtClick(){
    document.getElementById('test_bt').onclick = function(e){

        var internalProperties = document.createElement('list');
        var publicMethod = ObjInternal.publicMethod();
        for (el in  publicMethod) {
            var newChild = document.createElement('li');
            newChild.appendChild(document.createTextNode(publicMethod[el]));

            internalProperties.appendChild(newChild);
        }
        document.getElementById('test_div').appendChild(internalProperties);
    }
}
function onDocLoad (){
    onBtClick();
}





