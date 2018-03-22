import { UserEditComponent } from './dialogs/user-edit.component';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersListComponent } from './users-list.component';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material/dialog';
import { UserConfirmComponent } from './dialogs/user-confirm.component';

@Component({
    selector: 's-users-area',
    templateUrl: 'users-area.component.html'
})

export class UsersAreaComponent implements OnInit, AfterViewInit, OnDestroy {

    public users$: Observable<User[]>;

    private subscribes: Subscription[];

    constructor(
        private userService: UserService,
        private dialog: MatDialog) { }

    ngOnInit() {
        this.users$ = this.userService.users$;
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
        if (this.subscribes) {
            this.subscribes.forEach(s => s.unsubscribe());
        }
    }

    public add() {
        this.dialog
            .open(UserEditComponent, {
                width: '250px',
                data: new User()
            })
            .afterClosed().subscribe(result => {
                if (result) {
                    this.userService.insertUser(result);
                }
            });
    }

    public edit(user: User) {
        this.dialog
            .open(UserEditComponent, {
                width: '250px',
                data: user
            })
            .afterClosed().subscribe(result => {
                if (result) {
                    this.userService.updateUser(result);
                }
            });
    }

    public delete(user: User) {
        this.dialog
            .open(UserConfirmComponent, {
                width: '250px'
            })
            .afterClosed().subscribe(result => {
                if (result === true) {
                    this.userService.deleteUser(user);
                }
            });
    }
}
