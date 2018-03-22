import { LoggerService } from './logger.service';
import { catchError } from 'rxjs/operators';
import { UserEndpoint } from './../endpoints/user.endpoint';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UserService {
    public get users$(): Observable<User[]> {
        return this._users;
    }
    private _users: BehaviorSubject<User[]> = new BehaviorSubject(null);

    constructor(private userEndpoint: UserEndpoint, private logger: LoggerService, private dialog: MatSnackBar) { }

    updateUser(user: User) {
        this.userEndpoint.updateUser(user).first()
            .catch(e => {
                const message = `update user: ${e.message}`;
                this.logger.error(message);
                this.dialog.open(message, 'done');
                return Observable.of(null);
            })
            .subscribe((r: User) => {
                const users = this._users.value;
                const index = users.findIndex(u => u._id.$oid === r._id.$oid);
                if (index !== -1) {
                    users[index] = r;
                    this._users.next([...users]);
                    this.dialog.open('User updated', 'done');
                } else {
                    const message = `User with id=${r._id.$oid} after update did not found`;
                    this.logger.warn(message);
                    this.dialog.open(message, 'done');
                }
            });

    }


    insertUser(user: User) {
        this.userEndpoint.insertUser(user).first()
            .catch(e => {
                const message = `insert user: ${e.message}`;
                this.logger.error(message);
                this.dialog.open(message, 'done');
                throw new Error(e.message);
            })
            .subscribe((r: User) => {
                const users = this._users.value;
                users.push(r);
                this._users.next([...users]);
                this.dialog.open('User inserted', 'done');
            });

    }

    deleteUser(user: User) {
        this.userEndpoint.deleteUser(user).first()
            .catch(e => {
                const message = `delete user: ${e.message}`;
                this.logger.error(message);
                this.dialog.open(message, 'done');
                throw new Error(e.message);
            })
            .subscribe((r: User) => {
                const users = this._users.value;
                const index = users.findIndex(u => u._id.$oid === r._id.$oid);
                if (index !== -1) {
                    users.splice(index,1);
                    this._users.next([...users]);
                    this.dialog.open('User deleted', 'done');
                }
            });

    }

    loadUsers() {
        this.userEndpoint.getUsers().first()
            .catch(e => {
                const message = `load user: ${e.message}`;
                this.logger.error(message);
                this.dialog.open(message, 'done');
                throw new Error(e.message);
            })
            .subscribe((r: User[]) => {
                this._users.next(r);
                this.dialog.open('Users loaded', 'done');
            });

    }
}
