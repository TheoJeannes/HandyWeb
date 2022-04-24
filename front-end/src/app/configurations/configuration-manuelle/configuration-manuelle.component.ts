import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-configurations-manuelle',
    templateUrl: './configuration-manuelle.component.html',
    styleUrls: ['./configuration-manuelle.component.scss']
})
export class ConfigurationManuelleComponent implements OnInit {

    public offset = false;

    constructor(private userService: UserService) {}


    ngOnInit(): void {
    this.offset=this.userService.isOffset()
    }


}
