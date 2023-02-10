import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  sexs: any[] = ['Masculino', 'Femenino'];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _usersService: UsersService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      sex: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  createUser() {
    const user: Usuario = {
      user: this.form.value.user,
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      sex: this.form.value.sex,
    }
    this._usersService.addUser(user);
    this.router.navigate(['/dashboard/usuarios'])
    this._snackBar.open('Usuario agregado con éxito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

  }

}
