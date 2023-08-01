/*

NPC Cyrus

Who knows where this'll go

 */

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && type > 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            cm.sendNext("It's mating season, and if you're gonna even think about swooning me, I&apos;ll need a #v1442050# #r #t1442050#.");
        } else if (status == 1) {
	    cm.sendSimple("Well? Think you got what it takes to tame this beast? \r\n #L0# Yes. #l \r\n #L1# No. #l");
	} else if (status == 2) {
	    if (selection == 0) {
		cm.sendNext("#eSNIIIIIIIIIIIIIIIIIIIIIFF");
	    } else if (selection == 1) {
		cm.sendOk("#g >YWN have a hunky wolf bf");
		cm.dispose();
	    }
	} else if (status == 3) {
	    if (cm.haveItem(1442050, 1)) {
		cm.sendOk("AWOOOOOOO! You did it! You can be the beauty to my beast!");
		cm.dispose();
		cm.gainItem(1442050,-1);
		cm.gainItem(1012062,1);
	    } else {
		cm.sendOk("#eYOU THINK YOU CAN FOOL ME! I CAN SMELL YOUR LIES AND DECEIT FROM HERE! \n RAWRRRRRRRRRR!!!");
		cm.gainItem(1012005,1);
		cm.dispose();
	    }

	}

    }
}

function generateSelectionMenu(array) {     // nice tool for generating a string for the sendSimple functionality
    var menu = "";
    for (var i = 0; i < array.length; i++) {
        menu += "#L" + i + "#" + array[i] + "#l\r\n";
    }
    return menu;
}