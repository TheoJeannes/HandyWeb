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

  constructor(private userService: UserService) {
    this.userService.retrieveConfigs()
    this.userService.configs$.subscribe((configList: Config[]) => {
      this.configList = configList
    })
  }

  ngOnInit(): void {
  }

  deleteConfig(config: Config) {
    this.userService.deleteConfig(config);
  }

  selectConfig(config: Config) {
    this.userService.setSelectedUserConfig(config);
  }

}
