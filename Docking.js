/**
 * Created by haseebriaz on 03/03/15.
 */
fin.desktop.main(function(){

    var dockingManager = new DockingManager();
    var counter = 0;


    var currentWindow = new DockableWindow(fin.desktop.Window.getCurrent());
    currentWindow.dockableToOthers = false;

    dockingManager.register(currentWindow);
    function createChildWindow(){

        var dw = new DockableWindow({

            name: "child" + counter++,
            url: "childWindow.html",
            defaultWidth: 200,
            defaultHeight: 150,
            defaultTop: screen.availHeight - 100,
            defaultLeft: screen.availWidth - 150,
            frame: false,
            resize: true,
            windowState: "normal",
            autoShow: true

        }, function(){

           console.log("window created successfully!");
       });

        dockingManager.register(dw);
        return dw;
    }

    document.getElementById("createWindows").onclick = createChildWindow;
});