import { Component } from '@angular/core';
import { BackendService } from '../services/backend/backend.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  subjectValue!: number;
  constructor(private backend: BackendService) {
    backend.testSubject$.subscribe((value) => {
      this.subjectValue = value;
    });
  }
}
