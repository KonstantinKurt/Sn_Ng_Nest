import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Profile} from '../Profile/profile-edit/model/profile.model';

@Component({
    selector: 'app-profile-navbar',
    templateUrl: './profile-navbar.component.html',
    styleUrls: [
        './profile-navbar.component.scss',
    ]
})
export class ProfileNavbarComponent implements OnInit {
    @Input()
    private profile: Profile;
    // private avatar = 'http://localhost:7000/profile/avatar/default_avatar.jpg';

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl('auth/login');
    }


}
