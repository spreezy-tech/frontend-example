import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { BackendService } from './services/backend/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-sarthak';
  eventMessage!: string;
  latestSubjectValue!: number;
  latestObservableValue!: number;

  constructor(private router: Router, private backend: BackendService) {
    backend.testSubject$.subscribe((value) => {
      this.latestSubjectValue = value;
    });

    backend.testOb?.subscribe((value) => {
      this.latestObservableValue = value;
    });
  }

  test() {
    this.router.navigate(['/login']);
  }

  sendMessage(): string {
    return 'Hello';
  }

  getEventMessage($event: any) {
    this.eventMessage = $event;
  }
}
