#Dock / Snap Example by OpenFin

## Dock & Snap Approach
The intention of this repo is to provide developers a general (yet uniform) approach to docking and snapping windows within their apps while utilizing OpenFin. By design, the approach is generic and not intended to solve specific application use cases. Many applications and application developers have varying opinions as to the behavoir of window docking & snapping. Our thought here is to provide a framework for those app developers to have as a guide, but provide the flexibility and optionality to solve for their own unique use cases.   

## Current Features
* Window snapping while dragging closed to other windows
* Docking snapped windows on release. 
* Group docking, where you can have different group of windows grouped together.
* Hierarchal docking and undocking of groups.
   - i.e windows can have parent, child and sibling relations so they can be undocked in the same order as they were docked intuitively.

## Roadmap
* overriding different behaviours (like group docking/undocking) using keyboard hot keys like shift, ctrl, alt etc.
* Upon generic code or framework, create some example projects to demonstrate how to extend or override certain features to achieve app specific requirements.
* Identified behavioral issues or bugs

# How to use

## From main window
1. Add DockingManager.js in your project.
2. Creating new instance of DockingManager. like ```var dockingManager = new DockingManager();```
3. Register instances of Openfin Windows (fin.desktop.Window) with DockingManager. ```dockingManager.register(fin.desktop.Window.getCurrent());```
4. If you want a window to not dock to others but only others dock to it you can pass false as the second argument of dockingManager.register
```dockingManager.register(fin.desktop.Window.getCurrent(), false)```


## From Child Window

 1. You can subscribe to docking events (window-docked, window-undocked) to get notified when child window gets docked to another window.
e.g. ```fin.desktop.InterApplicationBus.subscribe("*", "window-docked", onDock);
     fin.desktop.InterApplicationBus.subscribe("*", "window-undocked", onUnDock);```

     As these messages are sent as a broadcast to all windows. you will need to filter these by windowName key which is sent as part of the message.

 2. To undock you will need to send a undock message (undock-winodw) with window name passed as part of the message.
 e.g.
 ```javascript fin.desktop.InterApplicationBus.publish("undock-window", {

             windowName: window.name
         });```

 And thats all!

 For more details, please have a look the code in this project.


