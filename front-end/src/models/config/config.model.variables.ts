import {Injectable} from '@angular/core';
import {Config} from './config.model';

@Injectable({
    providedIn: 'root'
})

export class ConfigModelVariables {

    public static FONT_SIZE_SMALL = 16;
    public static FONT_SIZE_MEDIUM = 20;
    public static FONT_SIZE_LARGE = 24;
    public static FONT_SIZE_XTRALARGE = 32;

    public FONT_SIZE_SMALL = ConfigModelVariables.FONT_SIZE_SMALL;
    public FONT_SIZE_MEDIUM = ConfigModelVariables.FONT_SIZE_MEDIUM;
    public FONT_SIZE_LARGE = ConfigModelVariables.FONT_SIZE_LARGE;
    public FONT_SIZE_XTRALARGE = ConfigModelVariables.FONT_SIZE_XTRALARGE;

    public static FONT_SERIF = 'serif';
    public static FONT_ROBOTO = 'Roboto';
    public static FONT_LUCIOLE = 'Luciole';
    public static FONT_TISERIAS = 'Tiserias';

    public FONT_SERIF = ConfigModelVariables.FONT_SERIF;
    public FONT_ROBOTO = ConfigModelVariables.FONT_ROBOTO;
    public FONT_LUCIOLE = ConfigModelVariables.FONT_LUCIOLE;
    public FONT_TISERIAS = ConfigModelVariables.FONT_TISERIAS;

    public static COLOR_BUTTONS_BLUE = '#1e98d7';
    public static COLOR_BUTTONS_GREEN = '#5B793D';
    public static COLOR_BUTTONS_BLUE_NAVY = '#2F00FF';
    public static COLOR_BUTTONS_BLACK = '#696969';
    public static COLOR_BUTTONS_ORANGE = '#eab18d';

    public COLOR_BUTTONS_BLUE = ConfigModelVariables.COLOR_BUTTONS_BLUE;
    public COLOR_BUTTONS_GREEN = ConfigModelVariables.COLOR_BUTTONS_GREEN;
    public COLOR_BUTTONS_BLUE_NAVY = ConfigModelVariables.COLOR_BUTTONS_BLUE_NAVY;
    public COLOR_BUTTONS_BLACK = ConfigModelVariables.COLOR_BUTTONS_BLACK;
    public COLOR_BUTTONS_ORANGE = ConfigModelVariables.COLOR_BUTTONS_ORANGE;


    public static readonly defaultConfig: Config = {
        name: 'default',
        size: ConfigModelVariables.FONT_SIZE_LARGE,
        colorButtons: ConfigModelVariables.COLOR_BUTTONS_BLUE,
        font: ConfigModelVariables.FONT_LUCIOLE
    };


    public static readonly configExcentrement: Config = {
        name: 'excentrement',
        size: ConfigModelVariables.FONT_SIZE_LARGE,
        font: ConfigModelVariables.FONT_TISERIAS,
        colorButtons: ConfigModelVariables.COLOR_BUTTONS_BLUE
    };

    public static readonly configConstraste: Config = {
        name: 'constraste',
        size: ConfigModelVariables.FONT_SIZE_XTRALARGE,
        font: ConfigModelVariables.FONT_LUCIOLE,
        colorButtons: ConfigModelVariables.COLOR_BUTTONS_BLACK
    };

    public static readonly configExcentrementContraste: Config = {
        name: 'excentrement + constraste',
        size: ConfigModelVariables.FONT_SIZE_XTRALARGE,
        font: ConfigModelVariables.FONT_TISERIAS,
        colorButtons: ConfigModelVariables.COLOR_BUTTONS_BLACK
    };
}
