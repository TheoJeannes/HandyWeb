import { Component, OnInit } from '@angular/core';
import {Config} from "../../../models/config/config.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-configurations-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.scss']
})
export class ConfigurationListComponent implements OnInit {

  public configList: Config[];
  public offset = false;

  constructor(private userService: UserService) {
    this.userService.configs$.subscribe((configList: Config[]) => {
      this.configList = configList
    })
  }

  ngOnInit(): void {
    this.offset=this.userService.isOffset()
  }

  deleteConfig(config: Config) {
    this.userService.deleteConfig(config);
  }

  selectConfig(config: Config) {
    this.userService.setSelectedUserConfig(config);
  }

}
