import {Injectable} from '@angular/core';
import {Config} from './config.model';

@Injectable({
    providedIn: 'root'
})

export class ConfigVariableModel {
    public static readonly defaultConfig: Config = {
        name: 'default',
        size: 15,
        font: 'calibri',
        colorButtons: 'bleu'
    };


    public static readonly configExcentrement: Config = {
        name: "excentrement",
        size: 15,
        font: "calibri",
        colorButtons: "bleu_navy"
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
    public FONT_ARIAL = "arial"
    public FONT_CALIBRI = "calibri"
    public FONT_LUCIOLE = "luciole"

    public COLOR_BUTTONS_BLUE = "blue"
    public COLOR_BUTTONS_GREEN = "green"
    public COLOR_BUTTONS_BLUE_NAVY = "blue_navy"
    public COLOR_BUTTONS_BLACK = "black"
    public COLOR_BUTTONS_ORANGE = "orange"
}
