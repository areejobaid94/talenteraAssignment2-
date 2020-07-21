//Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as a parameter to the callback function.
function all (values, callback){
    for(var i = 0 ; i < values.length;i++){
        if(callback(values[i]) === false){
            return false
        }
    };
    return true;
}

//Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
//In this Challenge I didn't know if the object can have more than key before the last object like this:{1:{2:{4:11,3:20},3:{7:5}},5:{6:30,4:99}},
//so I solved it in two way: the first one when we just have multiple keys in the last object and the 2nd when we have multiple keys in any object not only the last one 
function contains(val,obj){
    let nestedObj = Object.keys(obj);
    while(nestedObj.length === 1 && obj[nestedObj[0]]){
        if(nestedObj[0] == val)return true;
        obj = obj[nestedObj[0]]
        nestedObj = Object.keys(obj)
    }
    for(let key in obj){
        if(obj[key] == val) return true
    }
    return false;
}

function containsRec (val,obj){
    let nestedObj = Object.keys(obj);
    let flag = false
    let nextObj = function(arrOfKeys,obj){
        if(arrOfKeys.length === 0 || flag){
            return;
        }
        for(let i = 0 ; i < arrOfKeys.length ;i++){
            if(arrOfKeys[i] == val || obj[arrOfKeys[i]] == val)flag = true;
            else if (typeof(obj[arrOfKeys[i]]) === 'object'){
                 nextObj(Object.keys(obj[arrOfKeys[i]]),obj[arrOfKeys[i]])
            }
        }
    }
    nextObj(nestedObj,obj);
    return flag;
}
let allChallengeform = document.getElementById('allChallenge');
allChallengeform.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e.target)
});
