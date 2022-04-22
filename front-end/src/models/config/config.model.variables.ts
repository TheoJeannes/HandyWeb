import {Injectable} from '@angular/core';
import {Config} from './config.model';

@Injectable({
    providedIn: 'root'
})

export class ConfigModelVariables {

    public FONT_SERIF = 'serif'
    public FONT_ROBOTO = 'Roboto'
    public FONT_LUCIOLE = 'Luciole'
    public FONT_TISERIAS= 'Tiserias'

    public COLOR_BUTTONS_BLUE = '#1e98d7'
    public COLOR_BUTTONS_GREEN = "#5B793D"
    public COLOR_BUTTONS_BLUE_NAVY = "#2F00FF"
    public COLOR_BUTTONS_BLACK = "#696969"
    public COLOR_BUTTONS_ORANGE = "#eab18d"

    public static readonly defaultConfig: Config = {
        name: 'default',
        size: 15,
        colorButtons: '#1e98d7',
        font: 'Tiserias'
    };


    public static readonly configExcentrement: Config = {
        name: "excentrement",
        size: 15,
        font: "calibri",
        colorButtons: "#2F00FF"
    }

    public static readonly configConstraste: Config = {
        name: "constraste",
        size: 15,
        font: "luciole",
        colorButtons: "orange"
    }

    public static readonly configExcentrementContraste: Config = {
        name: "excentrement + constraste",
        size: 15,
        font: "luciole",
        colorButtons: "black"
    }




}
