(function(){
console.log("two way data binding implementation");
var elements= document.querySelectorAll('[gr2]');
var dbrepo={};
elements.forEach((element)=>{
    if(element.type=== 'text'){
        var bindingproperty =element.getAttribute('gr2');
        addToScope();
        element.onkeyup =()=>{
            dbrepo[bindingproperty]=element.value; 
        }
    }
    function addToScope(){
        if(!dbrepo.hasOwnProperty(bindingproperty)){
            let value;
            Object.defineProperty(dbrepo,bindingproperty,{
                configurable:true,
                enumerable:true,
                set: function(newvalue){
                    value=newvalue;
                    elements.forEach(e=>{
                        if(e.getAttribute('gr2')===bindingproperty){
                            if(e.type==='text'){
                                e.value=newvalue;
                            }
                            else if(!e.type){
                                e.innerHTML =newvalue;
                            }
                        }
                    })
                },
                get: function(){
                    return value;
                }
            })

        }
    }
});
})();