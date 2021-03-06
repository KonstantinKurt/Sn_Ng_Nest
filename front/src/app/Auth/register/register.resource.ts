import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterDTO} from './dto/register.dto';
import {catchError} from "rxjs/operators";

@Injectable()
export class RegisterResource {
    private readonly hostUrl = `${environment.hostUrl}auth/register`;
    private readonly httpOptions: object;

        constructor(
            private httpClient: HttpClient,
        ) {
            this.httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type':  'application/json',

                }),
                    observe: 'response',

            };
        }

    register(registerData: RegisterDTO): Observable<object> {
        return this.httpClient.post<object>(this.hostUrl, registerData, this.httpOptions);
            //.pipe(catchError((err) => console.log(err)));
    }
}
