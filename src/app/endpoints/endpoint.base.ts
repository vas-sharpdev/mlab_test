import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


export class EndpointBase {
    constructor(protected httpClient: HttpClient) { }

    protected readonly baseUrl: string = 'https://api.mlab.com/api/1';
    protected readonly token: string = 'HeDrxJJ8nZAQ0oLLPqMYej4ftdSgfUAl';

}
