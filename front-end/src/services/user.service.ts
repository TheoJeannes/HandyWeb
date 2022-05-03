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
import {ErrorsConnexion} from '../models/errors/errors.connexion';

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

    logInUser(user: User): string {
        const userDatabase = this.users.find(u => u.firstName.toLowerCase() === user.firstName.toLowerCase()
            && u.lastName.toLowerCase() === user.lastName.toLowerCase());
        if (userDatabase !== undefined && userDatabase.role === UserModelVariables.ROLE_USER) {
            this.setVariablesLogIn(userDatabase);
        }

        if (userDatabase === undefined) {
            return ErrorsConnexion.getMessageUserUnknown(user);
        } else if (userDatabase.role !== UserModelVariables.ROLE_USER) {
            return ErrorsConnexion.getMessageWrongRoleUser(user)
        }
    }

    logInAdmin(admin: User): string {
        const userDatabase = this.users.find(u => u.firstName.toLowerCase() === admin.firstName.toLowerCase()
            && u.lastName.toLowerCase() === admin.lastName.toLowerCase());

        if (userDatabase !== undefined && userDatabase.role === UserModelVariables.ROLE_ADMIN && userDatabase.password === admin.password) {
            this.setVariablesLogIn(userDatabase);
        }

        if (userDatabase === undefined) {
            return ErrorsConnexion.getMessageUserUnknown(admin);
        } else if (userDatabase.role !== UserModelVariables.ROLE_ADMIN) {
            return ErrorsConnexion.getMessageWrongRoleAdmin(admin);
        } else if (userDatabase.password !== admin.password) {
            return ErrorsConnexion.WRONG_PASSWORD;
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
        this.userSelected$.next(this.userSelected);
        this.configSelected$.next(ConfigModelVariables.defaultConfig);
        localStorage.removeItem(UserService.USER);
        localStorage.removeItem(UserService.CONFIG);
    }

    retrieveConfigs(): void {
        const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs';
        this.http.get<Config[]>(urlWithId, this.httpOptions).subscribe((configList) => {
            this.configs$.next(configList);
        });
    }

    addConfig(config: Config): void {
        const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs';
             this.http.post<Config>(urlWithId, config, this.httpOptions).subscribe(() => {this.retrieveConfigs()
             },(error) => alert(error.error.extra));
    }

    setSelectedUserConfig(config: Config) {
        console.log("here setSelectedConfig")
        const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs/' + config.id;
        this.http.get<Config>(urlWithId, this.httpOptions).subscribe(config => {
            this.setSelectedBaseConfig(config);
            this.graphicalService.setStyle(config);
            // const urlWithIdSendConfig = this.userUrl + '/' + this.userSelected.id + '/configs/configSelected/' + config.id;
            // this.http.put<Config>(urlWithIdSendConfig, config, this.httpOptions).subscribe(() => {
            //     this.retrieveUsers()
            //     setTimeout(() => {
            //         this.userSelected = this.users.find(user => this.userSelected.id === user.id);
            //         this.userSelected$.next(this.userSelected);
            //     }, 200)
            // })
        });
        localStorage.setItem(UserService.CONFIG, JSON.stringify(config));
    }

    setSelectedBaseConfig(config: Config) {
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

    isRoleAdmin(): boolean {
        if(this.userSelected)
            return this.userSelected.role === UserModelVariables.ROLE_ADMIN;
        return false
    }

    isOffset() {
        if(this.configSelected$)
            return this.configSelected$.value.horizontalEccentricity !== ConfigModelVariables.HORIZONTAL_ECCENTRICITY_NONE || this.configSelected$.value.verticalEccentricity !== ConfigModelVariables.VERTICAL_ECCENTRICITY_NONE
        return false;
    }
}
