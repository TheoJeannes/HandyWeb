import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Config} from "../../../models/config/config.model";
import {ConfigModelVariables} from "../../../models/config/config.model.variables"

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnInit {

  public config : Config = {
    id : Date.now(),
    name : ConfigModelVariables.defaultConfig.name,
    size : ConfigModelVariables.defaultConfig.size,
    colorButtons : ConfigModelVariables.defaultConfig.colorButtons,
    font : ConfigModelVariables.defaultConfig.font
  };

  constructor(private userService: UserService, public configVariables: ConfigModelVariables) {

  }

  ngOnInit(): void {
    console.log(this.config)
  }

  addConfig(): void {
    try {
      this.userService.addConfig(this.config)
      this.userService.setSelectedUserConfig(this.config)
    }catch (e) {
      console.log("salut")
    }

  }

}
