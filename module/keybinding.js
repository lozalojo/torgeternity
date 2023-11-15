
import {possibilityByCosm} from "/systems/torgeternity/module/possibilityByCosm.js";
import GMScreen from './GMScreen.js';
export default function createTorgShortcuts() {
    //creating keyboard shortcuts
    game.keybindings.register('torgeternity', 'openHand', {
        name: game.i18n.localize("torgeternity.dialogPrompts.openHand"),
        editable: [{
            key: "KeyH",
        }],
        onDown: (context) => {
            if (game.user.character) {
                game.user.character.getDefaultHand().sheet.toggleRender();
            }
        }
    });
    game.keybindings.register('torgeternity', 'openGMScreen', {
        name: game.i18n.localize("torgeternity.gmScreen.toggle"),
        editable: [{
            key: "KeyG",
        }],
        onDown: (context) => {
            if (game.user.isGM) {
                ui.GMScreen.toggleRender()
            }
        }
    });
    game.keybindings.register('torgeternity', 'openCosmPoss', {
        name: "Possibility by cosm",//game.i18n.localize("torgeternity.gmScreen.toggle"),
        editable: [{
            key: "KeyP",
        }],
        onDown: (context) => {
            if (game.user.character) {
                if ((Object.values(ui.windows).some(w => w.title === game.i18n.localize("torgeternity.sheetLabels.possibilityByCosm")))) {
                    return
                };
                let windo = new possibilityByCosm(game.user.character);
                windo.render(true);
                console.log("do open cosm poss");
            }
        }
    });

}