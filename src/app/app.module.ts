// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

// services
import { UserEndpoint } from './endpoints/user.endpoint';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth.guard';

// components
import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { GetObjectKeys } from './pipes/getObjectKeys.pipe';
import { UsersRowComponent } from './components/users-area/user-row.component';
import { UsersListComponent } from './components/users-area/users-list.component';
import { UsersAreaComponent } from './components/users-area/users-area.component';
import { RequestOptions } from '@angular/http';

// components factory
import { UserConfirmComponent } from './components/users-area/dialogs/user-confirm.component';
import { UserEditComponent } from './components/users-area/dialogs/user-edit.component';

// directives

const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule
];

const SERVICES = [
  UserService,
  UserEndpoint,
  LoggerService,
  AuthGuard
];

const COMPONENTS = [
  AppComponent,
  UsersAreaComponent,
  UsersListComponent,
  UsersRowComponent
];

const COMPONENTS_FACTORY = [
  UserEditComponent,
  UserConfirmComponent
];

const PIPES = [
  GetObjectKeys
];

const DIRECTIVES = [
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES,
    ...COMPONENTS_FACTORY
  ],
  imports: [
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ],
  entryComponents: [
    ...COMPONENTS_FACTORY
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
