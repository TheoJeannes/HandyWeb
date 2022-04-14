import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Theme} from "../../../models/theme.model";
import {ThemeService} from "../../../services/theme.service";

@Component({
  selector: 'app-theme-selection',
  templateUrl: './theme-selection.component.html',
  styleUrls: ['./theme-selection.component.scss']
})
export class ThemeSelectionComponent implements OnInit {

  public themeList: Theme[] = [];

  constructor(private router: Router, public themeService: ThemeService) {
    this.themeService.themes$.subscribe((themes: Theme[]) => {
      this.themeList = themes;
    });
  }

  ngOnInit(): void {
  }

  themeSelected(theme: Theme): void {
    this.router.navigate(['/quiz-list/' + theme.id]);
  }

  editTheme(theme: Theme): void {
    this.router.navigate(['/edit-theme/' + theme.id]);
  }

  deleteTheme(theme: Theme): void {
    this.themeService.deleteTheme(theme);
  }

  addTheme(): void{
    let theme = {
      id: this.newId(),
      name: "Default"
    }
    this.themeService.addTheme(theme);
    this.editTheme(theme);
  }

  newId():number{
    if(this.themeList.length === 0)
      return 0;
    return Math.max(...this.themeList.map(x => x.id)) +1 ;
  }
}
