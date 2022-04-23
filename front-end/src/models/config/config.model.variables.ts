import {Injectable} from '@angular/core';
import {Config} from './config.model';

@Injectable({
    providedIn: 'root'
})

export class ConfigModelVariables {

    public static readonly FONT_SIZE_SMALL = 16;
    public static readonly FONT_SIZE_MEDIUM = 20;
    public static readonly FONT_SIZE_LARGE = 24;
    public static readonly FONT_SIZE_XTRALARGE = 32;

    public readonly FONT_SIZE_SMALL = ConfigModelVariables.FONT_SIZE_SMALL;
    public readonly FONT_SIZE_MEDIUM = ConfigModelVariables.FONT_SIZE_MEDIUM;
    public readonly FONT_SIZE_LARGE = ConfigModelVariables.FONT_SIZE_LARGE;
    public readonly FONT_SIZE_XTRALARGE = ConfigModelVariables.FONT_SIZE_XTRALARGE;

    public static readonly FONT_SERIF = 'serif';
    public static readonly FONT_ROBOTO = 'Roboto';
    public static readonly FONT_LUCIOLE = 'Luciole';
    public static readonly FONT_TISERIAS = 'Tiserias';

    public readonly FONT_SERIF = ConfigModelVariables.FONT_SERIF;
    public readonly FONT_ROBOTO = ConfigModelVariables.FONT_ROBOTO;
    public readonly FONT_LUCIOLE = ConfigModelVariables.FONT_LUCIOLE;
    public  readonly FONT_TISERIAS = ConfigModelVariables.FONT_TISERIAS;

    public static readonly COLOR_BUTTONS_BLUE = '#1e98d7';
    public static readonly COLOR_BUTTONS_GREEN = '#5B793D';
    public static readonly COLOR_BUTTONS_BLUE_NAVY = '#2F00FF';
    public static readonly COLOR_BUTTONS_BLACK = '#696969';
    public static readonly COLOR_BUTTONS_ORANGE = '#eab18d';

    public readonly COLOR_BUTTONS_BLUE = ConfigModelVariables.COLOR_BUTTONS_BLUE;
    public readonly COLOR_BUTTONS_GREEN = ConfigModelVariables.COLOR_BUTTONS_GREEN;
    public readonly COLOR_BUTTONS_BLUE_NAVY = ConfigModelVariables.COLOR_BUTTONS_BLUE_NAVY;
    public readonly COLOR_BUTTONS_BLACK = ConfigModelVariables.COLOR_BUTTONS_BLACK;
    public readonly COLOR_BUTTONS_ORANGE = ConfigModelVariables.COLOR_BUTTONS_ORANGE;

    public static readonly FONT_COLOR_BLACK = '#000000';
    public static readonly FONT_COLOR_WHITE = '#FFFFFF';

    public static readonly HORIZONTAL_ECCENTRICITY_NONE = '0%';
    public static readonly HORIZONTAL_ECCENTRICITY_LOW = '20%';
    public static readonly HORIZONTAL_ECCENTRICITY_MEDIUM = '40%';
    public static readonly HORIZONTAL_ECCENTRICITY_HIGH = '60%';

    public readonly HORIZONTAL_ECCENTRICITY_NONE = ConfigModelVariables.HORIZONTAL_ECCENTRICITY_NONE;
    public readonly HORIZONTAL_ECCENTRICITY_LOW = ConfigModelVariables.HORIZONTAL_ECCENTRICITY_LOW;
    public readonly HORIZONTAL_ECCENTRICITY_MEDIUM = ConfigModelVariables.HORIZONTAL_ECCENTRICITY_MEDIUM;
    public readonly HORIZONTAL_ECCENTRICITY_HIGH = ConfigModelVariables.HORIZONTAL_ECCENTRICITY_HIGH;

    public static readonly VERTICAL_ECCENTRICITY_NONE = '0%';
    public static readonly VERTICAL_ECCENTRICITY_LOW = '20%';
    public static readonly VERTICAL_ECCENTRICITY_MEDIUM = '40%';
    public static readonly VERTICAL_ECCENTRICITY_HIGH = '60%';

    public readonly VERTICAL_ECCENTRICITY_NONE = ConfigModelVariables.VERTICAL_ECCENTRICITY_NONE;
    public readonly VERTICAL_ECCENTRICITY_LOW = ConfigModelVariables.VERTICAL_ECCENTRICITY_LOW;
    public readonly VERTICAL_ECCENTRICITY_MEDIUM = ConfigModelVariables.VERTICAL_ECCENTRICITY_MEDIUM;
    public readonly VERTICAL_ECCENTRICITY_HIGH = ConfigModelVariables.VERTICAL_ECCENTRICITY_HIGH;

    public static readonly defaultConfig: Config = {
        name: 'default',
        size: ConfigModelVariables.FONT_SIZE_LARGE,
        colorButtons: ConfigModelVariables.COLOR_BUTTONS_BLUE,
        font: ConfigModelVariables.FONT_LUCIOLE,
        horizontalEccentricity: ConfigModelVariables.HORIZONTAL_ECCENTRICITY_NONE,
        verticalEccentricity: ConfigModelVariables.VERTICAL_ECCENTRICITY_NONE
    };


    public static readonly configExcentrement: Config = {
        name: 'excentrement',
        size: ConfigModelVariables.FONT_SIZE_LARGE,
        font: ConfigModelVariables.FONT_TISERIAS,
        colorButtons: ConfigModelVariables.COLOR_BUTTONS_BLUE,
        horizontalEccentricity: ConfigModelVariables.HORIZONTAL_ECCENTRICITY_MEDIUM,
        verticalEccentricity: ConfigModelVariables.VERTICAL_ECCENTRICITY_MEDIUM
    };

    public static readonly configConstraste: Config = {
        name: 'constraste',
        size: ConfigModelVariables.FONT_SIZE_XTRALARGE,
        font: ConfigModelVariables.FONT_LUCIOLE,
        colorButtons: ConfigModelVariables.COLOR_BUTTONS_BLACK,
        horizontalEccentricity: ConfigModelVariables.HORIZONTAL_ECCENTRICITY_NONE,
        verticalEccentricity: ConfigModelVariables.VERTICAL_ECCENTRICITY_NONE
    };

    public static readonly configExcentrementContraste: Config = {
        name: 'excentrement + constraste',
        size: ConfigModelVariables.FONT_SIZE_XTRALARGE,
        font: ConfigModelVariables.FONT_TISERIAS,
        colorButtons: ConfigModelVariables.COLOR_BUTTONS_BLACK,
        horizontalEccentricity: ConfigModelVariables.HORIZONTAL_ECCENTRICITY_MEDIUM,
        verticalEccentricity: ConfigModelVariables.VERTICAL_ECCENTRICITY_MEDIUM
    };
}
