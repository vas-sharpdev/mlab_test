import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
    selector: 's-user-row',
    templateUrl: 'user-row.component.html'
})

export class UsersRowComponent implements OnInit {
    @Input()
    public user: User;

    @Output()
    public editEvent: EventEmitter<User> = new EventEmitter<User>();
    @Output()
    public deleteEvent: EventEmitter<User> = new EventEmitter<User>();

    constructor() { }

    ngOnInit() { }

    public edit() {
        this.editEvent.next(this.user);
    }

    public delete() {
        this.deleteEvent.next(this.user);
    }
}

