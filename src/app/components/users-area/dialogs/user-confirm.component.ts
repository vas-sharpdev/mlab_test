import { Inject, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../models/user.model';

@Component({
    selector: 's-user-confirm',
    templateUrl: 'user-confirm.component.html',
})
export class UserConfirmComponent {

    constructor(
        public dialogRef: MatDialogRef<UserConfirmComponent>) { }
}
