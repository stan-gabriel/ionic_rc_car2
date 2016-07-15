/**
 * Created by GStan on 31.05.2016.
 */
import {Page} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/rc-car-remote-3/rc-car-remote-3.html'
})
export class RcCarRemote3Page {

    constructor() {





        this.cameraData = {
            position: {},
            angle: {}
        };
        
        this.cameraDirectionData = {
            direction: {}
        };
        
        this.engineData = {
            position: {},
            angle: {}
        };
        
        this.engineDirectionData = {
            direction: {}
        }
    }










    //

    ngAfterViewInit() {
//-----------Left Joystick (camera) instance--
        var cameraJoystick = nipplejs.create({
            zone: document.getElementById('zone_joystick_camera'),
            color: 'blue',
            size: 100
        });

        cameraJoystick.on('added', function (event, data) {

        });

        cameraJoystick.on('move', (event, data) => {
            this.cameraData = data;
        });

        cameraJoystick.on('dir', (event, data) => {
            this.cameraDirectionData = data;
        });


//--------Right Joystick (steering) instance--
        var engineJoystick = nipplejs.create({
            zone: document.getElementById('zone_joystick_engine'),
            color: 'red',
            size: 100
        });

        engineJoystick.on('added', (event, data) => {

        });

        engineJoystick.on('move', (event, data) => {
            this.engineData = data;
        });

        engineJoystick.on('dir', (event, data) => {
            this.engineDirectionData = data;
        })
    }
}
