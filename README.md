# Basics

![alt text](./threejs-structure.svg)

In the image above, you'll see that the basic object is the renderer - This will draw the graphics onto the screen. This takes 2 objects, camera and the scene. The camera is the representation of what the user is viewing while the Scene what and where the various graphics will be rendered.

There's a few things to keep in mind:

* Object3D is the base class for most objects - this provides behviour and information about objects that enables manipulation of said object in the space.
* Each object
    * can only have either one or no parent.
    * Each object has a position which is relative to its parent's position.
* A group object is self explanatory, it's meant to manipulate a set of objects.
* Light has intensity, color, position and posibly direction. This interacts with materials on the objects
* Mesh is a polygon based object which has materials and geometry.

![alt text](./frustum-3d.svg)

The user will be able to see a plane close the the camera (near clipping plane), the far end of where the camera is pointing (far clipping plan), and everything in between (field of view - fov) - everything outside of this, will not be rendered.