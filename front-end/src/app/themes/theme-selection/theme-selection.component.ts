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
    this.router.navigate(['/quiz-list/' + theme.name]);
  }

  editTheme(theme: Theme): void {
    this.router.navigate(['/edit-theme/' + theme.id]);
  }

  deleteTheme(theme: Theme): void {
    this.themeService.deleteTheme(theme);
  }

  addTheme(): void{
    let theme = {
      id: this.themeList.length.toString(),
      name: "Default"
    }
    this.themeService.addTheme(theme);

    this.editTheme(theme);
  }
}
