// Code your solution in this file!
const returnFirstTwoDrivers = (arr)=>{
    return arr.slice(0,2);
}

const  returnLastTwoDrivers = (arr)=>{
    return arr.slice(arr.length-2,arr.length);
}
console.log(returnLastTwoDrivers([0,1,2]));

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
    return (function(x){
        return x * num;
    })
}

const fareDoubler = (x)=>{
    return createFareMultiplier(x)(2);
}
const fareTripler = (x)=>{
    return createFareMultiplier(x)(3);
}

function selectDifferentDrivers(arrayOfDrivers, callback){
    if(callback === selectingDrivers[0]){
        return callback(arrayOfDrivers);
    }
    return callback(arrayOfDrivers);
}