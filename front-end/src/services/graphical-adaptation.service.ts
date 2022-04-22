import {Injectable} from '@angular/core';
import {Config} from '../models/config/config.model';

@Injectable({
    providedIn: 'root'
})

export class GraphicalAdaptationService {

    constructor() {
    }

    setStyle(config: Config): void {
        document.documentElement.style.setProperty('--button-color', '#1e98d7');
        document.documentElement.style.setProperty('--button-hover-color', '#166791');
        document.documentElement.style.setProperty('--button-font-color', '#FFFFFF');
        console.log("config");
        console.log(config);
        document.documentElement.style.setProperty('--font-size', config.size.toString()+'px');
        document.documentElement.style.setProperty('--h1-font-size', (config.size * 2).toString()+'px');
        document.documentElement.style.setProperty('--h2-font-size', (config.size* 1.5).toString()+'px');
    }
}
