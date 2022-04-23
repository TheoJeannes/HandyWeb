import {Injectable} from '@angular/core';
import {Config} from '../models/config/config.model';
import {ConfigModelVariables} from '../models/config/config.model.variables';

@Injectable({
    providedIn: 'root'
})

export class GraphicalAdaptationService {

    constructor() {
    }

    setStyle(config: Config): void {
        let hover = -.4;
        let fontColor = ConfigModelVariables.FONT_COLOR_WHITE;
        if(config.colorButtons === ConfigModelVariables.COLOR_BUTTONS_ORANGE){
            fontColor = ConfigModelVariables.FONT_COLOR_BLACK;
            hover = .4;
        }

        document.documentElement.style.setProperty('--button-color', config.colorButtons);
        document.documentElement.style.setProperty('--button-hover-color', this.ColorLuminance(config.colorButtons,hover));
        document.documentElement.style.setProperty('--button-font-color', fontColor);
        document.documentElement.style.setProperty('--font', config.font);
        document.documentElement.style.setProperty('--font-size', config.size.toString()+'px');
        document.documentElement.style.setProperty('--h1-font-size', (config.size * 2.25).toString()+'px');
        document.documentElement.style.setProperty('--h2-font-size', (config.size* 1.75).toString()+'px');
        document.documentElement.style.setProperty('--h3-font-size', (config.size* 1.5).toString()+'px')
        document.documentElement.style.setProperty('--hoffset', config.horizontalEccentricity)
        document.documentElement.style.setProperty('--voffset', config.verticalEccentricity)
    }

    ColorLuminance(hex, lum) : string{

        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;
        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
        }
        return rgb;
    }
}
