import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import { User } from '../models/user.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {Config} from "../models/config.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
   The list of user.
   */
  private users: User[] = [];

  /*
   Observable which contains the list of the user.
   */
  public users$: BehaviorSubject<User[]>
    = new BehaviorSubject([]);

  private userSelected: User;
  public userSelected$: Subject<User> = new Subject();

  private configs: Config[] = [];
  public configs$: BehaviorSubject<Config[]> = new BehaviorSubject<Config[]>([]);

  public configSelected$: Subject<Config> = new Subject();

  private userUrl = serverUrl + '/users';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.http.get<User[]>(this.userUrl).subscribe((userList) => {
      this.users = userList;
      this.users$.next(this.users);
    });
  }

  addUser(user: User): void {
    this.http.post<User>(this.userUrl, user, this.httpOptions).subscribe(() => this.retrieveUsers());
  }

  setSelectedUser(userId: string): void {
    const urlWithId = this.userUrl + '/' + userId;
    this.http.get<User>(urlWithId).subscribe((user) => {
      this.userSelected$.next(user);
    });
  }

  deleteUser(user: User): void {
    const urlWithId = this.userUrl + '/' + user.id;
    this.http.delete<User>(urlWithId, this.httpOptions).subscribe(() => this.retrieveUsers());
  }

  logIn(user: User): boolean {
    const userDatabase = this.users.find(u => u.firstName === user.firstName && u.lastName === user.lastName);
    if (userDatabase !== undefined) {
      this.userSelected = userDatabase;
      this.userSelected$.next(userDatabase);
      return true;
    }
    return false;
  }

  retrieveConfigs(): void {
    const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs';
    this.http.get<Config[]>(urlWithId, this.httpOptions).subscribe((configList) => {
      this.configs = configList;
      this.configs$.next(configList);
    });
  }

  addConfig(config: Config): void {
    const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs';
    this.http.post<Config>(urlWithId, config, this.httpOptions).subscribe(() => this.retrieveConfigs())
  }

  setSelectedConfig(config: Config) {
    const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs/' + config.id;
    this.http.get<Config>(urlWithId, this.httpOptions).subscribe(config => this.configSelected$.next(config));
  }

  deleteConfig(config: Config) {
    const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs/' + config.id;
    this.http.delete<Config>(urlWithId, this.httpOptions).subscribe(() => this.retrieveConfigs())
  }
}
