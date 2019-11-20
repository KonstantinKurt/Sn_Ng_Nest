import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ProfileNavbarComponent} from '../profile-navbar/profile-navbar.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileEditService} from './profile-edit/profile-edit.service';
import {ProfileEditResource} from './profile-edit/profile-edit.resource';
import { ProfileSidebarComponent } from '../profile-sidebar/profile-sidebar.component';



@NgModule({
    declarations: [
        ProfileNavbarComponent,
        ProfileEditComponent,
        ProfileSidebarComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ProfileRoutingModule,
    ],
    providers: [
      ProfileEditService,
      ProfileEditResource,
    ],
})
export class ProfileModule {
}
