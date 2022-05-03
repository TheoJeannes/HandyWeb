import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Config} from "../../../models/config/config.model";
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  @Input()
  config: Config;

  @Output()
  configSelected: EventEmitter<Config> = new EventEmitter<Config>()

  @Output()
  configDeleted: EventEmitter<Config> = new EventEmitter<Config>()

  private configAlreadySelected: Config;

  constructor(private userService: UserService) {
    this.userService.configSelected$.subscribe(config => this.configAlreadySelected = config);
  }

  ngOnInit(): void {
  }

  selectConfig() {
    this.configSelected.emit(this.config);
  }

  delete() {
    this.configDeleted.emit(this.config);
  }

  isAlreadySelected() {
    return this.configAlreadySelected.id === this.config.id
  }

}
