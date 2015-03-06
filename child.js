/**
 * Created by haseebriaz on 03/02/15.
 */

var parentWindow = window.opener;
var undockButton = null;

fin.desktop.main(function(){

    document.getElementById("title").innerText = window.name;

    setInterval(updateDimentions, 100);
   // new Draggable(document.getElementById("dragger")); // pass any element that you want to use as a handle for dragging.
   // parentWindow.registerChild(window); // this registers current window as a dockable window
    undockButton = document.getElementById("undockButton");
    undockButton.addEventListener("click", undock);
    enableUndock(false);

    fin.desktop.InterApplicationBus.subscribe("*", "window-docked", onDock);
    fin.desktop.InterApplicationBus.subscribe("*", "window-undocked", onUnDock);
});

var onDock = function(message){

    if(message.windowName == window.name) enableUndock(true);

}.bind(window);

function updateDimentions(){

    document.getElementById("dimentions").innerHTML = "x: " + window.screenLeft + ", y: " + window.screenTop + ", width: " + window.outerWidth + ", height: "+ window.outerHeight;
}

function onUnDock(message){

    if(message.windowName == this.name){
        enableUndock(false);
    }
}

function undock(){

    fin.desktop.InterApplicationBus.publish("undock-window", {

        windowName: window.name
    });

}

function enableUndock(value){

    console.log("enabling undock buton", value);
    document.getElementById("undockButton").style.display = value? "block": "none";
}
