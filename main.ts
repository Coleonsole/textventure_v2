/**
 * start-10
 */
function _2 () {
    adventure.addToTextlog("The guest whistles idly to himself as you whisk the item from his pocket")
    adventure.addImageToTextLog(assets.image`Opal Ring`)
    adventure.addToTextlog("Its a chain attached to a huge opal")
    opalchain = 1
    adventure.addToTextlog("You wait until the two young men are out of sight")
}
function _3 () {
    adventure.addToTextlog("You grab the staff")
    adventure.addImageToTextLog(assets.image`Staff`)
    adventure.addToTextlog("A booming laughter behind you grabs your attention")
    adventure.addToTextlog("Lord Mahn is holding a staff of his own")
    adventure.addImageToTextLog(assets.image`Lord Mahn`)
    adventure.addToTextlog("\"Ra Quorvski!\"")
    adventure.addToTextlog("\"FINISH HIM!\"")
    adventure.addImageToTextLog(assets.image`Ra Ghost`)
    adventure.addToTextlog("\"That's almost funny...\"")
    adventure.addImageToTextLog(assets.image`Lord Mahn confused`)
    adventure.addToTextlog("\"WHAT?!\"")
    adventure.addToTextlog("\"NO!\"")
    adventure.addImageToTextLog(assets.image`Lord Mahn Death`)
    adventure.addToTextlog("You almost can't look as the burning light consumes him...")
    adventure.addImageToTextLog(assets.image`Goo`)
    adventure.addToTextlog("Lord Mahn is now nothing but a pile of disgusting goop")
    adventure.addToTextlog("You now have the staff...")
    adventure.addToTextlog("And an army of ghouls under it's control")
    adventure.addToTextlog("Press (a) to break the staff's curse forever")
    adventure.addToTextlog("Press (b) to use it for your own intentions")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
    	
    } else {
    	
    }
}
function _4 () {
    adventure.addImageToTextLog(img`
        ........................................
        ........................................
        ........................................
        ........................................
        ............bbbbbbbbbbc.................
        ..........bbbbbbbbbbbbbbc...............
        .........bbbbbbbbbbbbbbbbc..............
        ........bbbbbbbbbbbbbbbbbbc.............
        .......bbbbbbbbbbbbbbbbbbbbc............
        .......bbbbbbbbbbbbbbbbbbbbc............
        .......777bb777777cbbbbbbbbc............
        .......bb7777ccbb77cbbbbbbbc............
        .......bbbbb77cbbb7cbbbbbbbc............
        .......bbbbbb7c66b7c66bbbbbc............
        .......bbb66b7c66b7c66bb66bc............
        .......bbb66b7cbbb7cbbbb66bc............
        .......bbbbb77cbb77cbbbbbbbc............
        .......bbb777ccbb7ccbbbbbbbc............
        .......7777cccbbb7cbbbbbbbbc............
        .......bbbbbbbb667cb66bbbbbc............
        .......bbb66bbb667cc66bb66bc............
        .......bbb66bbbbbb7cbbbb66bc............
        .......bbbbbbbbbbb7cbbbbbbbc............
        .......bbbbbbbbbbb7cbbbbbbbc............
        .......bbbbbbbbbb77cbbbbbbbc............
        .......bbbbbbbbbb7ccbbbbbbbc............
        .......bbbbbbbbb77cbbbbbbbbc............
        .......bbbbbbb777ccbbbbbbbbc............
        .......bbbbb777cccbbbbbbbbbc............
        .......bbbbb7cccbbbbbbbbbbbc............
        .......bbbb77cbbbbbbbbbbbbbc............
        .......bbbb7ccbbbbbbbbbbbbbc............
        .......bbbb7cbbbbbbbbbbbbbbc............
        .......bbbb7cbbbbbbbbbbbbbbc............
        .......bbbb7cbbbbbbbbbbbbbbc............
        .......bbbb7cbbbbbbbbbbbbbbc............
        .......bbbb7cbbbbbbbbbbbbbbc............
        7777777777777777777777777777777777777777
        7777777777777777777777777777777777777777
        7777777777777777777777777777777777777777
        `)
    adventure.addToTextlog("The Insomniac's house is probably the strangest you've ever seen")
}
function _1 () {
    adventure.addImageToTextLog(assets.image`Guard0`)
    adventure.addToTextlog("\"Stop! Thief!\"")
    adventure.addImageToTextLog(assets.image`You on rope`)
    adventure.addToTextlog("The sound races through your mind like a bullet")
    adventure.addToTextlog("You tighten your grip on the rope as half a dozen guards surround Thrash")
    adventure.addImageToTextLog(assets.image`Guards surround Thrash`)
    adventure.addToTextlog("He's always the most daring of you all")
    adventure.addImageToTextLog(assets.image`You of course rope`)
    adventure.addToTextlog("No surprise there")
    adventure.addImageToTextLog(assets.image`You rope tug`)
    adventure.addToTextlog("A sharp tug on the rope signals that you need to get out of there ")
    adventure.addImageToTextLog(assets.image`Rose rope ONE TIME USE`)
    adventure.addToTextlog("\"Axel! Get out of there!\" says Rose in a hushed shout")
    adventure.addToTextlog("There shouldn't be any guards tonight...")
    adventure.addToTextlog("You need to climb up RIGHT NOW")
    adventure.addImageToTextLog(assets.image`The Goblet`)
    adventure.addToTextlog("But...")
    adventure.addToTextlog("The Flame Goblet is so tantalisingly close")
    adventure.addToTextlog("That was your goal for the night anyway")
    adventure.addToTextlog("To join Rose on the roof, press (a)")
    adventure.addToTextlog("To try to save Thrash, press (b)")
    adventure.addToTextlog("To seize the opportunity to steal The Flame Goblet, press [^]")
}
let opalchain = 0
adventure.addToTextlog("Welcome to TextVenture")
let lifepoints = 12
let agility = 3
let stealth = 3
let lockpicking = 3
adventure.addToTextlog("upgrade one stat")
adventure.addImageToTextLog(assets.image`Abilities`)
adventure.addToTextlog("Press (a) to upgrade agility")
adventure.addToTextlog("Press (b) to upgrade stealth")
adventure.addToTextlog("Press [^] to upgrade lock picking")
pauseUntil(() => controller.anyButton.isPressed())
if (controller.A.isPressed()) {
    agility += 1
} else if (controller.B.isPressed()) {
    stealth += 1
} else {
    lockpicking += 1
}
_1()
