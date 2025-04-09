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
    adventure.addToTextlog("\"But no...\"")
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
    adventure.addImageToTextLog(assets.image`Insomniacs house`)
    adventure.addToTextlog("The Insomniac's house is probably the strangest you've ever seen")
    adventure.addToTextlog("Like an industrial silo covered in vines")
    adventure.addImageToTextLog(assets.image`no door ç-ç`)
    adventure.addToTextlog("There seems to be no door")
    adventure.addToTextlog("You don't really have many options")
    adventure.addToTextlog("You could press (a) to throw a small stone at a window")
    adventure.addToTextlog("Or press (b) to climb up the vines instead")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
    	
    } else {
    	
    }
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
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
    	
    } else if (controller.B.isPressed()) {
    	
    } else {
    	
    }
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
