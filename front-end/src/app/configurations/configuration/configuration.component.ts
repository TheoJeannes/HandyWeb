import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Config} from "../../../models/config.model";

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

  constructor() { }

  ngOnInit(): void {
  }

  selectConfig() {
    this.configSelected.emit(this.config);
  }

  delete() {
    this.configDeleted.emit(this.config);
  }

}
