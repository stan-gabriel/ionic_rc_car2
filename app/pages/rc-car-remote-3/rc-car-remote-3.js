/**
 * Created by GStan on 31.05.2016.
 */
import {Page} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/rc-car-remote-3/rc-car-remote-3.html'
})

export class RcCarRemote3Page {

    constructor() {

    }


    ngAfterViewInit() {

// --Left Joystick (camera) instance--
        var cameraJoystick = nipplejs.create({
            zone: document.getElementById('zone_joystick_camera'),
            color: 'blue',
            size: 100
        });

        cameraJoystick.on('move',function (evt,data) {
            // console.log(evt);
            // console.log(data);
        });
        cameraJoystick.on('added',function (evt,data) {
            // console.log(evt);
            // console.log(data);
        });

// --Right Joystick (steering) instance--
        var engineJoystick = nipplejs.create({
            zone: document.getElementById('zone_joystick_engine'),
            color: 'red',
            size: 100
        });

        engineJoystick.on('move',function (evt,data) {
            // console.log(evt);
            // console.log(data);
        });
        engineJoystick.on('added',function (evt,data) {
            // console.log(evt);
            // console.log(data);
        })
    }
}
