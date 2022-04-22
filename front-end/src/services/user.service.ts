import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from '../models/user/user.model';
import {serverUrl, httpOptionsBase} from '../configs/server.config';
import {Config} from '../models/config/config.model';
import {Quiz} from '../models/quiz.model';
import {ConfigModelVariables} from '../models/config/config.model.variables';
import {GraphicalAdaptationService} from './graphical-adaptation.service';
import {UserModelVariables} from '../models/user/user.model.variables';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    /*
     The list of user.
     */

    public static readonly USER = 'user';
    public static readonly CONFIG = 'config';

    private users: User[] = [];

    /*
     Observable which contains the list of the user.
     */
    public users$: BehaviorSubject<User[]>
        = new BehaviorSubject([]);

    private userSelected: User;
    public userSelected$: BehaviorSubject<User> = new BehaviorSubject(JSON.parse(localStorage.getItem(UserService.USER)));

    public userToModify$: Subject<User> = new Subject();


    public configs$: BehaviorSubject<Config[]> = new BehaviorSubject<Config[]>([]);

    public configSelected$: BehaviorSubject<Config> = new BehaviorSubject<Config>(ConfigModelVariables.defaultConfig);

    private userUrl = serverUrl + '/users';

    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient, private graphicalService: GraphicalAdaptationService) {
        this.retrieveUsers();

        const user = JSON.parse(localStorage.getItem(UserService.USER));
        if (user) {
            this.http.get<User[]>(this.userUrl).subscribe((userList) => {
                this.users = userList;
                this.users$.next(this.users);
                if (user.role === 'admin') {
                    this.logInAdmin(user);
                } else {
                    this.logInUser(user);
                }
            });
        }

        const config = JSON.parse(localStorage.getItem(UserService.CONFIG));
        if (config) {
            this.configSelected$.next(config);
        }

        this.configSelected$.subscribe(config => this.graphicalService.setStyle(config));
    }

    private retrieveUsers(): void {
        this.http.get<User[]>(this.userUrl).subscribe((userList) => {
            this.users = userList;
            this.users$.next(this.users);
        });
    }

    addUser(user: User): void {
        this.http.post<User>(this.userUrl, user, this.httpOptions).subscribe(
            () => this.retrieveUsers(),
            () => alert('L\'utilisateur est déjà défini'));
    }

    setUserToModify(userId: number): void {
        const urlWithId = this.userUrl + '/' + userId;
        this.http.get<User>(urlWithId).subscribe((user) => {
            this.userToModify$.next(user);
        });
    }

    deleteUser(user: User): void {
        const urlWithId = this.userUrl + '/' + user.id;
        this.http.delete<User>(urlWithId, this.httpOptions).subscribe(() => this.retrieveUsers());
    }

    logInUser(user: User): void {
        const userDatabase = this.users.find(u => u.firstName.toLowerCase() === user.firstName.toLowerCase()
            && u.lastName.toLowerCase() === user.lastName.toLowerCase());
        if (userDatabase !== undefined && userDatabase.role === UserModelVariables.ROLE_USER) {
            this.setVariablesLogIn(userDatabase);
        }

        console.log(user, userDatabase);

        if (userDatabase === undefined) {
            alert('L\'utilisateur ' + user.firstName + ' ' + user.lastName + ' n\'existe pas');
        } else if (userDatabase.role !== UserModelVariables.ROLE_USER) {
            alert('L\'utilisateur ' + userDatabase.firstName + ' ' + userDatabase.lastName + ' possède un rôle administrateur');
        }
    }

    logInAdmin(admin: User): void {
        const userDatabase = this.users.find(u => u.firstName.toLowerCase() === admin.firstName.toLowerCase()
            && u.lastName.toLowerCase() === admin.lastName.toLowerCase());

        if (userDatabase !== undefined && userDatabase.role === UserModelVariables.ROLE_ADMIN && userDatabase.password === admin.password) {
            this.setVariablesLogIn(userDatabase);
        }

        if (userDatabase === undefined) {
            alert('L\'utilisateur ' + admin.firstName + ' ' + admin.lastName + ' n\'existe pas');
        } else if (userDatabase.role !== UserModelVariables.ROLE_ADMIN) {
            alert('L\'utilisateur ' + userDatabase.firstName + ' ' + userDatabase.lastName + ' possède un rôle utilisateur');
        } else if (userDatabase.password !== admin.password) {
            alert('Le mot de passe est incorrect');
        }
    }

    private setVariablesLogIn(user: User): void {
        this.userSelected = user;
        this.userSelected$.next(user);
        localStorage.setItem(UserService.USER, JSON.stringify(this.userSelected));
        this.retrieveConfigs();
    }

    disconnect() {
        this.userSelected = undefined;
        this.userSelected$.next(undefined);
        localStorage.removeItem(UserService.USER);
        localStorage.removeItem(UserService.CONFIG);
    }

    private retrieveConfigs(): void {
        const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs';
        this.http.get<Config[]>(urlWithId, this.httpOptions).subscribe((configList) => {
            this.configs$.next(configList);
        });
    }

    addConfig(config: Config): void {
        const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs';
             this.http.post<Config>(urlWithId, config, this.httpOptions).subscribe(() => {this.retrieveConfigs()
             },(error) => {
                 console.log(error)
                 alert(error.error.extra)
             });
    }

    setSelectedUserConfig(config: Config) {
        const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs/' + config.id;
        console.log(urlWithId)
        this.http.get<Config>(urlWithId, this.httpOptions).subscribe(config => {
            this.setSelectedBaseConfig(config);
            this.graphicalService.setStyle(config);
        });
    }

    setSelectedBaseConfig(config: Config) {
        localStorage.setItem(UserService.CONFIG, JSON.stringify(config));
        this.configSelected$.next(config);
        this.graphicalService.setStyle(config);
    }

    deleteConfig(config: Config) {
        const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs/' + config.id;
        this.http.delete<Config>(urlWithId, this.httpOptions).subscribe(() => this.retrieveConfigs());
        localStorage.removeItem(UserService.CONFIG);
    }

    editUser(user: User): void {
        const urlWithId = this.userUrl + '/' + user.id;
        console.log(urlWithId);
        console.log(user);
        this.http.put<Quiz>(urlWithId, user, this.httpOptions).subscribe(() => this.retrieveUsers());
    }

    isConnected(): boolean {
        return this.userSelected !== undefined;
    }

    isRoleUser(): boolean {
        return this.userSelected.role === UserModelVariables.ROLE_USER;
    }

    isRoleAdmin(): boolean {
        return this.userSelected.role === UserModelVariables.ROLE_ADMIN;
    }
}
