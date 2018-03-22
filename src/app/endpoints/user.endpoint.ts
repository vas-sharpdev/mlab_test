import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EndpointBase } from './endpoint.base';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
@Injectable()
export class UserEndpoint extends EndpointBase {
    private get apiDatabases() { return this.baseUrl + '/databases'; }
    private get apiUsers() { return this.baseUrl + '/databases/sharp_db/collections/users/'; }

    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.apiUsers, { params: {'apiKey': this.token} });
    }

    updateUser(user: User): Observable<User> {
        return this.httpClient.put<User>(this.apiUsers + user._id.$oid, user, { params: {'apiKey': this.token} });
    }

    insertUser(user: User): Observable<User> {
        return this.httpClient.post<User>(this.apiUsers, user, { params: {'apiKey': this.token} });
    }

    deleteUser(user: User): Observable<User> {
        return this.httpClient.delete<User>(this.apiUsers + user._id.$oid, { params: {'apiKey': this.token} });
    }
}
