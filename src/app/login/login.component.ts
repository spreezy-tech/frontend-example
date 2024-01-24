import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/credentials';
import { BackendService } from '../services/backend/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  credentials: Credentials = new Credentials();
  newSubjectValue!: number;
  observableValue!: number;

  constructor(private router: Router, private backend: BackendService) {
    backend.testSubject$.subscribe((value) => {
      this.newSubjectValue = value;
    });

    this.backend.testOb?.subscribe({
      next: (response) => {
        this.observableValue = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  register() {
    this.backend.updateFunction();
    // this.router.navigate(['register']);
  }

  login() {
    this.credentials.username = 'testuser';
    this.credentials.password = 'testpassword';
    // this.backend.loginUser(this.credentials);
  }
}
