import { Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { DirectivesComponent } from './components/directives/directives.component';

export const routes: Routes = [
  {
    path: "data-binding",
    component: HelloWorldComponent,
    pathMatch: "full"
  },
  {
    path: "input",
    component: DataEntryComponent,
    pathMatch: "full"
  },
  {
    path: "lifecycle",
    component: LifecycleComponent,
    pathMatch: "full"
  },
  {
    path: "directives",
    component: DirectivesComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "",
  }
];
