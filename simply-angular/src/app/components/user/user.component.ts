﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/models';
import { UserService, AuthenticationService, AlertService } from '@/services';
import { Router } from '@angular/router';

@Component({ templateUrl: 'user.component.html' })
export class UserComponent implements OnInit {
    currentUser: any;
    users : any;
    user : User;
    p: number = 1;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        private router: Router
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
        this.userService.usersSource.subscribe(data => {
            this.users = data;
        })
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    detailUser(id: number) {
        this.userService.getUserById(id)
        .subscribe(
            response => {
                this.user = response.data ;
                this.router.navigate(['/user-detail/'+ id]);
            },
            error => {
                this.alertService.error(error);
            }
        );
    }

    private loadAllUsers() {
        this.userService.getAll()
            .subscribe(
                response => {
                    this.userService.usersSource.next(response.data);
                },
                error => {
                    this.alertService.error(error);
                }
            );
    }
}