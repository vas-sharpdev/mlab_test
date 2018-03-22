import { User } from './../../models/user.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 's-users-list',
    templateUrl: 'users-list.component.html'
})

export class UsersListComponent implements OnInit {
    @Input()
    public users: User[];

    @Output()
    public addEvent: EventEmitter<any> = new EventEmitter();
    @Output()
    public editEvent: EventEmitter<User> = new EventEmitter<User>();
    @Output()
    public deleteEvent: EventEmitter<User> = new EventEmitter<User>();

    constructor() { }

    ngOnInit() { }

    public add() {
        this.addEvent.next();
    }

    public edit(user: User) {
        this.editEvent.next(user);
    }

    public delete(user: User) {
        this.deleteEvent.next(user);
    }
}

