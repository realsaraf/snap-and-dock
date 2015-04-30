/* globals fin */
'use strict';

/**
 * Created by haseebriaz on 03/03/15.
 */

var undockButton = null;

function enableUndock(value) {

    document.getElementById('undockButton').style.display = value ? 'block' : 'none';
}


function onDock(message) {

    if (message.windowName === window.name) {
        enableUndock(true);
    }

}

function updateDimentions() {

    var win = fin.desktop.Window.getCurrent();
    win.getBounds(function(bounds) {

        document.getElementById('dimentions').innerHTML = 'x: ' + bounds.left + ', y: ' + bounds.top + ', width: ' + bounds.width + ', height: ' + bounds.height;
    });

}

function onUnDock(message) {
    if (message.windowName === window.name) {
        enableUndock(false);
    }
}

function undock() {

    fin.desktop.InterApplicationBus.publish('undock-window', {

        windowName: window.name
    });

}

fin.desktop.main(function() {

    document.getElementById('title').innerText = window.name;

    setInterval(updateDimentions, 100);
    undockButton = document.getElementById('undockButton');
    undockButton.addEventListener('click', undock);
    enableUndock(false);

    fin.desktop.InterApplicationBus.subscribe('*', 'window-docked', onDock);
    fin.desktop.InterApplicationBus.subscribe('*', 'window-undocked', onUnDock);

    fin.desktop.InterApplicationBus.publish('window-load', {

        windowName: window.name
    });

});
