import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-configurations-selection',
    templateUrl: './configuration-selection.component.html',
    styleUrls: ['./configuration-selection.component.scss']
})
export class ConfigurationSelectionComponent implements OnInit {

    public offset = false;
    public admin = false;
    constructor(private userS : UserService) {

    }

    ngOnInit(): void {
        this.offset=this.userS.isOffset()
        this.admin=this.userS.isRoleAdmin()

    }

}
