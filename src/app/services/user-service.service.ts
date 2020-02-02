import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../shared/user';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserServiceService {

    url = 'http://localhost:3000';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    currentUser = {};

    constructor(private http: HttpClient, public router: Router) { }

    // Sign-in
    signIn(user: User) {
        return this.http.post(this.url + '/signin', user).subscribe((res: any) => {
                console.log(res);
                localStorage.setItem('access_token', res.token);
                /*this.getUserProfile(res._id).subscribe((result: any) => {
                    this.currentUser = result;
                    // this.router.navigate(['user-profile/' + res.msg._id]);
                });*/
            });
    }

    // User profile
    getUserProfile(id): Observable<any> {
        const api = this.url + '/user-profile/' + id;
        return this.http.get(api, { headers: this.headers }).pipe(
            map((res: Response) => {
                return res || {};
            }),
            catchError(this.handleError)
        );
    }

    // Error
    handleError(error: HttpErrorResponse) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        } else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(msg);
    }

    getToken() {
        return localStorage.getItem('access_token');
    }


}
