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
//so I solved it in three ways: the first one is the best solution I used JSON.stringify() and split to convert the obj to array and we can use this 
//solution if we have multiple keys in any object,
//in the 2nd solution I used tree data Structure to solve it  and also we can use this solution if we have multiple keys in any object,
//and for the 3rd one we can just use it if we have multiple keys just in the last object.

//First solution => The Best solution for this challenge =>
function contains (val,obj){
    return JSON.stringify(obj).split(/(?:{|:|}|,|")+/).includes(val.toString());
}

//2nd solution => Tree Data Structure
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

//3rd solution => if we have multiple keys just in the last object
function containsTree (val,obj){
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

