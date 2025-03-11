import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  imports: [
    HelloWorldComponent,
    DataEntryComponent,
    LifecycleComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
