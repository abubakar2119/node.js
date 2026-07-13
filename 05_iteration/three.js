//for 

["","",""]
[{},{},{}]

const Arr=[1,2,3,4,5,6]

for (const num of Arr) {
    // console.log(num)
}
const myArr=["pakistan","india","bangladesh"]

for (const string of myArr) {
    // console.log(`name of countries is ${string}`)
}

const greeting="pakistan!"
for (const greet of greeting){
//   console.log(`Each char is ${greet}`);
    
}

//Maps
const map= new Map()

map.set('USA',"UNITED STATE OF AMERICA")
map.set('SD',"SUDIA")
map.set('IND',"INDONASHIA")

for (const [keys,value] of map) {
    // console.log(keys,':-',value);
    
}

const myObject={
     game1:'NFS',
     game2:'spiderman',

}

for (const [key,value]of myObject) {
     console.log(keys,':-',value);
    
    
}


