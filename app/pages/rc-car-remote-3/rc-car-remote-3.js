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

//-----------Left Joystick (camera) instance--
        var cameraJoystick = nipplejs.create({
            zone: document.getElementById('zone_joystick_camera'),
            color: 'blue',
            size: 100
        });

        cameraJoystick.on('added',function (event,data) {
            // console.log(event);
            // console.log(data);
        });

        cameraJoystick.on('move',function (event,data) {
            // console.log(event);
            // console.log(data);

            document.getElementById('camera-x').innerHTML = data.position.x;
            document.getElementById('camera-y').innerHTML = data.position.y;
            document.getElementById('camera-degree').innerHTML = data.angle.degree;
            document.getElementById('camera-radian').innerHTML = data.angle.radian;
            document.getElementById('camera-distance').innerHTML = data.distance;
            document.getElementById('camera-force').innerHTML = data.force;
            document.getElementById('camera-identifier').innerHTML = data.identifier;
            document.getElementById('camera-pressure').innerHTML = data.pressure;
        });

        cameraJoystick.on('dir',function (event,data) {
            // console.log(event);
            // console.log(data)
            document.getElementById('camera-x-dir').innerHTML = data.direction.x;
            document.getElementById('camera-y-dir').innerHTML = data.direction.y;
            document.getElementById('camera-angle-dir').innerHTML = data.direction.angle;
        });



//--------Right Joystick (steering) instance--
        var engineJoystick = nipplejs.create({
            zone: document.getElementById('zone_joystick_engine'),
            color: 'red',
            size: 100
        });

        engineJoystick.on('added',function (event,data) {
            // console.log(event);
            // console.log(data);
        });

        engineJoystick.on('move',function (event,data) {
            // console.log(event);
            // console.log(data);
            document.getElementById('engine-x').innerHTML = data.position.x;
            document.getElementById('engine-y').innerHTML = data.position.y;
            document.getElementById('engine-degree').innerHTML = data.angle.degree;
            document.getElementById('engine-radian').innerHTML = data.angle.radian;
            document.getElementById('engine-distance').innerHTML = data.distance;
            document.getElementById('engine-force').innerHTML = data.force;
            document.getElementById('engine-identifier').innerHTML = data.identifier;
            document.getElementById('engine-pressure').innerHTML = data.pressure;
        });
        engineJoystick.on('dir',function (event,data) {
            // console.log(event);
            // console.log(data)
            document.getElementById('engine-x-dir').innerHTML = data.direction.x;
            document.getElementById('engine-y-dir').innerHTML = data.direction.y;
            document.getElementById('engine-angle-dir').innerHTML = data.direction.angle;
        })
    }
}
