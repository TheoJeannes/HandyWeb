import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from '../models/user.model';
import {serverUrl, httpOptionsBase} from '../configs/server.config';
import {Config} from '../models/config.model';
import {Quiz} from '../models/quiz.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    /*
     The list of user.
     */

    public static USER = 'user';
    public static CONFIG = 'config';

    public defaultConfig: Config = {
        name: 'default',
        size: 15,
        font: 'calibri',
        colorButtons: 'bleu'
    };

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

    public configSelected$: BehaviorSubject<Config> = new BehaviorSubject<Config>(this.defaultConfig);

    private userUrl = serverUrl + '/users';

    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient) {
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

        this.configSelected$.subscribe(config => this.setStyle(config));
        // // put a default user
        // const user: User = {
        //   firstName: "default",
        //   lastName: "1"
        // }
        //
        // setTimeout(() => this.logIn(user), 200);
    }

    retrieveUsers(): void {
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

    setSelectedUser(userId: string): void {
        const urlWithId = this.userUrl + '/' + userId;
        this.http.get<User>(urlWithId).subscribe((user) => {
            this.userSelected$.next(user);
        });
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
        if (userDatabase !== undefined && userDatabase.role !== 'admin') {
            this.userSelected = userDatabase;
            this.userSelected$.next(userDatabase);
            localStorage.setItem(UserService.USER, JSON.stringify(this.userSelected));
        }

        console.log(user, userDatabase);

        if (userDatabase === undefined) {
            alert('L\'utilisateur ' + user.firstName + ' ' + user.lastName + ' n\'existe pas');
        } else if (userDatabase.role === 'admin') {
            alert('L\'utilisateur ' + userDatabase.firstName + ' ' + userDatabase.lastName + ' possède un rôle administrateur');
        }
    }

    logInAdmin(admin: User): void {
        const userDatabase = this.users.find(u => u.firstName.toLowerCase() === admin.firstName.toLowerCase()
            && u.lastName.toLowerCase() === admin.lastName.toLowerCase());

        if (userDatabase !== undefined && userDatabase.role === 'admin' && userDatabase.password === admin.password) {
            this.userSelected = userDatabase;
            this.userSelected$.next(userDatabase);
            localStorage.setItem(UserService.USER, JSON.stringify(this.userSelected));
        }

        if (userDatabase === undefined) {
            alert('L\'utilisateur ' + admin.firstName + ' ' + admin.lastName + ' n\'existe pas');
        } else if (userDatabase.role !== 'admin') {
            alert('L\'utilisateur ' + userDatabase.firstName + ' ' + userDatabase.lastName + ' possède un rôle utilisateur');
        } else if (userDatabase.password !== admin.password) {
            alert('Le mot de passe est incorrect');
        }
    }

    disconnect() {
        this.userSelected = undefined;
        this.userSelected$.next(undefined);
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
        this.http.post<Config>(urlWithId, config, this.httpOptions).subscribe(() => this.retrieveConfigs());
    }

    setSelectedUserConfig(config: Config) {
        const urlWithId = this.userUrl + '/' + this.userSelected.id + '/configs/' + config.id;
        this.http.get<Config>(urlWithId, this.httpOptions).subscribe(config => {
            this.setSelectedBaseConfig(config);
            this.setStyle(config);
        });
    }

    setSelectedBaseConfig(config: Config) {
        localStorage.setItem(UserService.CONFIG, JSON.stringify(config));
        this.configSelected$.next(config);
        this.setStyle(config);
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

    setStyle(config: Config): void {
        document.documentElement.style.setProperty('--button-color', '#1e98d7');
        document.documentElement.style.setProperty('--button-hover-color', '#166791');
        document.documentElement.style.setProperty('--button-font-color', '#FFFFFF');
        console.log("config");
        console.log(config);
        document.documentElement.style.setProperty('--font-size', config.size.toString()+'px');
        document.documentElement.style.setProperty('--h1-font-size', (config.size * 2).toString()+'px');
        document.documentElement.style.setProperty('--h2-font-size', (config.size* 1.5).toString()+'px');
    }
}
