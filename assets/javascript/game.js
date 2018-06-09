var isCharSel = false;
var isEnemSel = false;
var charSel = "";

//create character objects
var michael = {
    name: "Michael",
    hp: 120,

    select: function () {
        
        isCharSel = true;
        charSel = "Michael";
        $("#buster").hide();
        $("#gob").hide();
        $("#lindsay").hide();
        $("#char_head").html("Your Character:");
        console.log("you selected michael");
        $("#enemchar").css("visibility", "visible");
        $("#enem_michael").hide();
    },


};

var gob = {
    name: "GOB",
    hp: 100,

    select: function () {
        
        isCharSel = true;
        $("#michael").hide();
        $("#buster").hide();
        $("#lindsay").hide();
        $("#char_head").html("Your Character:");
        console.log("you selected gob");
        $("#enemchar").css("visibility", "visible");
        $("#enem_gob").hide();
    },


};

var lindsay = {
    name: "Lindsay",
    hp: 150,

    select: function () {
        
        isCharSel = true;
        $("#michael").hide();
        $("#gob").hide();
        $("#buster").hide();
        $("#char_head").html("Your Character:");
        console.log("you selected lindsay");
        $("#enemchar").css("visibility", "visible");
        $("#enem_lindsay").hide();
    },


};

var buster = {
    name: "Buster",
    hp: 180,

    select: function () {
        
        isCharSel = true;
        $("#michael").hide();
        $("#gob").hide();
        $("#lindsay").hide();
        $("#char_head").html("Your Character:");
        console.log("you selected buster");
        $("#enemchar").css("visibility", "visible");
        $("#enem_buster").hide();
    },


};

//select your character
$("#micpic").click(function() {
    if (isCharSel == false) {
        michael.select();
    }
});

$("#gobpic").click(function() {
    if (isCharSel == false) {
        gob.select();
    }
});

$("#linpic").click(function() {
    if (isCharSel == false) {
        lindsay.select();
    }
});

$("#buspic").click(function() {
    if (isCharSel == false) {
        buster.select();
    }
});