var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"};
var bees = { character: "Bees"};
var owl = { character: "Owl"};
var robin = { character: "Christopher Robin"};
var rabbit = { character: "Rabbit"};
var gopher = { character: "Gopher"};
var kanga = { character: "Kanga"};
var eeyore = { character: "Eeyore"};
var heffalumps = { character: "Heffalunps"};

heffalumps.west = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
kanga.north = eeyore;
kanga.south = robin;
robin.north = kanga;
robin.south = pooh;
robin.east = rabbit;
robin.west = owl;
owl.east = robin;
owl.south = piglet;
piglet.north = owl;
piglet.east = pooh;
pooh.north = robin;
pooh.south = tigger;
pooh.east = bees;
pooh.west = piglet;
rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = robin;
gopher.west = rabbit;
bees.north = rabbit;
bees.west = pooh;
tigger.north = pooh;

var player = { location: tigger }

function move(direction){
    if(direction == "north"){
        if(player.location.north == null){
            console.log("You may not go that way.")
        }
        else{
            player.location = player.location.north
            console.log("You are now at " + player.location.character + "'s house.")
        }

    }
    else if(direction == "south"){
        if(player.location.south == null){
            console.log("You may not go that way.")
        }
        else
            player.location = player.location.south
            console.log("You are now at " + player.location.character + "'s house.")

    }
    else if(direction == "east"){
        if(player.location.east == null){
            console.log("You may not go that way.")
        }
        else{
            player.location = player.location.east
            console.log("You are now at " + player.location.character + "'s house.")
        }

    }
    else if(direction == "west"){
        if(player.location.west == null){
            console.log("You may not go that way.")
        }
        else{            
            player.location = player.location.west
            console.log("You are now at " + player.location.character + "'s house.")
        }
    }
}


move("west")
move("north")
move("west")
move("north")
move("east")
move("east")
move("north")
move("east")
move("south")
move("north")
move("west")
move("south")
move("west")
move("north")
move("north")
move("north")
move("north")
move("north")
move("north")
move("east")



