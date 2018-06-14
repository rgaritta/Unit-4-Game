var isCharSel = false;
var isEnemSel = false;
var charSel = "";
var enemSel;
var closing = new Audio('assets/audio/closing.mp3');
var annyong = new Audio('assets/audio/annyong.mp3');


//create character objects
var michael = {
    name: "Michael",
    id: "mic",
    hp: 120,
    initap: 15,
    ap: 15,
    ca: 15,
    dadsAlive: new Audio('assets/audio/dadsAlive.mp3'),


    select: function () {

        isCharSel = true;
        charSel = this;
        $("#buster").hide();
        $("#gob").hide();
        $("#lindsay").hide();
        $("#char_head").html("Your Character");
        console.log("you selected michael");
        $("#enemchar").css("visibility", "visible");
        $("#enem_mic").hide();
        closing.play();
        this.dadsAlive.play();
    },

    enem_select: function () {
        isEnemSel = true;
        enemSel = this;
        $("#enem_bus").hide();
        $("#enem_gob").hide();
        $("#enem_lin").hide();
        $("#enem_head").html("Press the button to attack");
        console.log("you selected michael");
        $("#button").css("visibility", "visible");
        $("#win-lose").html("");
        this.dadsAlive.play();
    },

    attack: function () {
        enemSel.hp -= this.ap;
        this.ap += this.initap;
    },

    counter: function () {
        charSel.hp -= this.ca;
    },


};

var gob = {
    name: "Gob",
    id: "gob",
    hp: 100,
    initap: 15,
    ap: 15,
    ca: 20,
    comeOn: new Audio('assets/audio/comeOn.mp3'),


    select: function () {

        isCharSel = true;
        charSel = this;
        $("#michael").hide();
        $("#buster").hide();
        $("#lindsay").hide();
        $("#char_head").html("Your Character");
        console.log("you selected gob");
        $("#enemchar").css("visibility", "visible");
        $("#enem_gob").hide();
        closing.play();
        this.comeOn.play();
    },

    enem_select: function () {
        isEnemSel = true;
        enemSel = this;
        $("#enem_bus").hide();
        $("#enem_mic").hide();
        $("#enem_lin").hide();
        $("#enem_head").html("Press the button to attack");
        console.log("you selected gob");
        $("#button").css("visibility", "visible");
        $("#win-lose").html("");
        this.comeOn.play();
    },

    attack: function () {
        enemSel.hp -= this.ap;
        this.ap += this.initap;
    },

    counter: function () {
        charSel.hp -= this.ca;
    },


};

var lindsay = {
    name: "Lindsay",
    id: "lin",
    initap: 10,
    hp: 150,
    ap: 10,
    ca: 12,
    diamondCreme: new Audio('assets/audio/diamondCreme.mp3'),

    select: function () {

        isCharSel = true;
        charSel = this;
        $("#michael").hide();
        $("#gob").hide();
        $("#buster").hide();
        $("#char_head").html("Your Character");
        console.log("you selected lindsay");
        $("#enemchar").css("visibility", "visible");
        $("#enem_lin").hide();
        closing.play();
        this.diamondCreme.play();
    },

    enem_select: function () {
        isEnemSel = true;
        enemSel = this;
        $("#enem_bus").hide();
        $("#enem_gob").hide();
        $("#enem_mic").hide();
        $("#enem_head").html("Press the button to attack");
        console.log("you selected lindsay");
        $("#button").css("visibility", "visible");
        $("#win-lose").html("");
        this.diamondCreme.play();
    },

    attack: function () {
        enemSel.hp -= this.ap;
        this.ap += this.initap;
    },

    counter: function () {
        charSel.hp -= this.ca;
    },


};

var buster = {
    name: "Buster",
    id: "bus",
    initap: 12,
    hp: 180,
    ap: 12,
    ca: 30,
    heyBrother: new Audio('assets/audio/heyBrother.mp3'),

    select: function () {

        isCharSel = true;
        charSel = this;
        $("#michael").hide();
        $("#gob").hide();
        $("#lindsay").hide();
        $("#char_head").html("Your Character");
        console.log("you selected buster");
        $("#enemchar").css("visibility", "visible");
        $("#enem_bus").hide();
        closing.play();
        this.heyBrother.play();
    },

    enem_select: function () {
        isEnemSel = true;
        enemSel = this;
        $("#enem_mic").hide();
        $("#enem_gob").hide();
        $("#enem_lin").hide();
        $("#enem_head").html("Press the button to attack");
        console.log("you selected buster");
        $("#button").css("visibility", "visible");
        $("#win-lose").html("");
        this.heyBrother.play();
    },

    attack: function () {
        enemSel.hp -= this.ap;
        this.ap += this.initap;
    },

    counter: function () {
        charSel.hp -= this.ca;
    },


};

//select your character
$("#micpic").click(function () {
    if (isCharSel == false) {
        michael.select();
    }
});

$("#gobpic").click(function () {
    if (isCharSel == false) {
        gob.select();
    }
});

$("#linpic").click(function () {
    if (isCharSel == false) {
        lindsay.select();
    }
});

$("#buspic").click(function () {
    if (isCharSel == false) {
        buster.select();
    }
});

//select your enemy
$("#enem_micpic").click(function () {
    if (isEnemSel == false) {
        michael.enem_select();
    }
});

$("#enem_gobpic").click(function () {
    if (isEnemSel == false) {
        gob.enem_select();
    }
});

$("#enem_linpic").click(function () {
    if (isEnemSel == false) {
        lindsay.enem_select();
    }
});

$("#enem_buspic").click(function () {
    if (isEnemSel == false) {
        buster.enem_select();
    }
});

//attack
$("#attack").click(function () {
    annyong.play();
    if (charSel.hp > 0 && enemSel.hp > 0) {
        $("#attacked").html("You attacked " + enemSel.name + " for " + charSel.ap + " damage.");
        $("#countered").html(enemSel.name + " attacked you back for " + enemSel.ca + " damage.");
        charSel.attack();
        if (enemSel.hp > 0) {
            enemSel.counter();
        }
        console.log(enemSel.hp);
        console.log(charSel.hp);
        $("#" + charSel.id + "hp").html("HP: " + charSel.hp);
        $("#enem" + enemSel.id + "hp").html("HP: " + enemSel.hp);

    }

    if (charHPCheck() != true) {
        enemHPCheck();
        winCheck();
    }


});

function charHPCheck() {
    if (charSel.hp <= 0) {
        $("#attacked").html("");
        $("#countered").html("");
        $("#button").hide();
        $("#win-lose").html("You have been defeated... GAME OVER! =(");
        $("#restart").css("visibility", "visible");

        return true;
    }
}

function enemHPCheck() {
    if (enemSel.hp <= 0) {
        $("#attacked").html("");
        $("#countered").html("");
        $("#win-lose").html("You've defeated " + enemSel.name + ". Choose another sibling to fight.");
        $("#enem_" + enemSel.id).hide();
        $("#button").css("visibility", "hidden");
        $("#enem_head").html("Siblings Available To Attack");
        isEnemSel = false;

        if (buster.name != charSel.name && buster.hp > 0) {
            $("#enem_bus").show();
        }
        if (michael.name != charSel.name && michael.hp > 0) {
            $("#enem_mic").show();
        }

        if (gob.name != charSel.name && gob.hp > 0) {
            $("#enem_gob").show();
        }

        if (lindsay.name != charSel.name && lindsay.hp > 0) {
            $("#enem_lin").show();
        }
    }
}

function winCheck() {
    if (charSel.name == "Michael") {
        if (buster.hp <= 0 && gob.hp <= 0 && lindsay.hp <= 0) {
            $("#win-lose").html("You win... CONGRATS! =)");
            $("#enem_head").html("");
            $("#restart").css("visibility", "visible");
        }
    }

    if (charSel.name == "Gob") {
        if (buster.hp <= 0 && michael.hp <= 0 && lindsay.hp <= 0) {
            $("#win-lose").html("You win... CONGRATS! =)");
            $("#enem_head").html("");
            $("#restart").css("visibility", "visible");
        }
    }

    if (charSel.name == "Lindsay") {
        if (buster.hp <= 0 && gob.hp <= 0 && michael.hp <= 0) {
            $("#win-lose").html("You win... CONGRATS! =)");
            $("#enem_head").html("");
            $("#restart").css("visibility", "visible");
        }
    }

    if (charSel.name == "Buster") {
        if (michael.hp <= 0 && gob.hp <= 0 && lindsay.hp <= 0) {
            $("#win-lose").html("You win... CONGRATS! =)");
            $("#enem_head").html("");
            $("#restart").css("visibility", "visible");
        }
    }
}

$("#restart").click(function () {
    location.reload();
});