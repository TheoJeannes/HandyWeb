import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Theme} from "../../../models/theme.model";
import {ThemeService} from "../../../services/theme.service";
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-theme-selection',
  templateUrl: './theme-selection.component.html',
  styleUrls: ['./theme-selection.component.scss']
})
export class ThemeSelectionComponent implements OnInit {

  public themeList: Theme[] = [];
  public offset = false;
  public isAdmin = false;

  constructor(private router: Router, public themeService: ThemeService, public  userService: UserService) {
    this.themeService.themes$.subscribe((themes: Theme[]) => {
      this.themeList = themes;
    });
  }

  ngOnInit(): void {
    this.isAdmin = this.userService.isRoleAdmin()
    this.offset = this.userService.isOffset()
  }

  themeSelected(theme: Theme): void {
    this.router.navigate(['/quiz-list/' + theme.id]);
  }

  editTheme(theme: Theme): void {
    setTimeout(()=>500)
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
