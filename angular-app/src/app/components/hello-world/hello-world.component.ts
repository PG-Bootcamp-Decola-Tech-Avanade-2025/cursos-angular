import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hello-world',
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  @Input() name: string = "world";

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
      this.activeRoute.queryParams.subscribe(
        (params: Params) => this.name = params.hasOwnProperty("name") ?  params["name"] : this.name
      )
  }
}
