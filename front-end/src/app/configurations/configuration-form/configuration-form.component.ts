import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Config} from "../../../models/config/config.model";
import {ConfigModelVariables} from "../../../models/config/config.model.variables"

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnInit {

  public configForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, public configVariables: ConfigModelVariables) {
    this.configForm = this.formBuilder.group({
      name: [''],
      size: [''],
      //verticalEccentricity: [''],
      //horizontalEccentricity: [''],
      font: [''],
      colorButtons: ['']
    })
  }

  ngOnInit(): void {
  }

  addConfig(): void {
    const config: Config = this.configForm.getRawValue() as Config
    switch (config.colorButtons){
      default:
        config.colorHover = '#166791';
        break
      case '#3D8900':
        config.colorHover = '#285900';
        break
      case '#001889':
        config.colorHover = '#001059';
        break
      case '#2D2D2D':
        config.colorHover = '#000000'
    }

    console.log("config To")
    console.log(config)
    this.userService.addConfig(config)
  }

}
