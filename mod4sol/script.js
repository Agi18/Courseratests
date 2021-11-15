var names = new Array();
names [0] = "Agi";
names [1] = "Babi";
names [2] = "Puvi";
names [3] = "Ram";
names [4] = "Marti";
names [5] = "Gia";
names [6] = "Anna";
names [7] = "jayson";
names [8] = "Jason";
names [9] = "James";

for (var i = 0; i < names.length; i++){
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye " + names[i])
    }
    else{
        console.log("Hello " + names[i])
    }
}