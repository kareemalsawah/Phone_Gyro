# Phone_Gyro
Using blender and a node.js server to display the phone's rotation realtime in blender

### How to run this demo:
First you need to install node. You can find may resources online on how to do that.

<br/>

Now, go to the directory that contains the files of this repository and run the command:
node bin/www

<br/>

Find out the ip address of your computer on your network (to run this demo you need to have your computer and phone on the same network example: WiFi, LAN, etc.) by typing ipconfig in command prompt and find "IPv4 Address"

<br/>

On your phone (needs to have a gyroscope), open a browser and use the URL IPv4Address:5000/phone, where you replace IPv4Address by yours.
Ex: 123.123.1.1:5000/phone

<br/>

Finally, open the blender file and click on run script.
