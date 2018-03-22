import { Inject, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 's-user-edit',
    templateUrl: 'user-edit.component.html',
})
export class UserEditComponent implements OnInit {

    public userForm: FormGroup;
    public model: User;
    constructor(
        public dialogRef: MatDialogRef<UserEditComponent>,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) data: User) {
        this.model = data;
    }

    ngOnInit() {
        this.createForm(this.model);
    }

    submit() {
        const id = (this.model._id) ? this.model._id.$oid : '';
        this.dialogRef.close(new User(this.userForm.value, id));
    }

    cancel(): void {
        this.dialogRef.close();
    }

    private createForm(model: User) {
        this.userForm = this.formBuilder.group({
            firstname: [model.firstname, Validators.required],
            lastname: [model.lastname],
            email: [model.email, Validators.email],
            date: [model.date],
        });
    }

}
