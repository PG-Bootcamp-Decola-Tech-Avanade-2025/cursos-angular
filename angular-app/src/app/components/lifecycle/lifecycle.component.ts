import { SlicePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, input, InputSignal, OnChanges, OnDestroy, OnInit, Signal, SimpleChange, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle',
  imports: [
    FormsModule,
    SlicePipe
  ],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {
  historyMaxLength: InputSignal<number> = input<number>(9);
  messages: [number, string][] = [];
  newMessage: string = "";

  addArbitraryMessage(newMessage: string) {
    this.messages.push([this.messages.length, newMessage]);
  }

  addMessage() {
    this.messages.push([this.messages.length, this.newMessage]);
  }

  constructor() {
    this.addArbitraryMessage("constructor called");
  }

  ngOnInit(): void {
    this.addArbitraryMessage("ngOnInit called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.addArbitraryMessage(`ngOnChanges called with ${changes}`);
  }

  ngDoCheck(): void {
    this.addArbitraryMessage("ngDoCheck called");
  }

  ngAfterContentChecked(): void {
    this.addArbitraryMessage(`afterContentChecked called`);
  }

  ngAfterContentInit(): void {
    this.addArbitraryMessage(`afterContentInit called`);
  }

  ngAfterViewChecked(): void {
    this.addArbitraryMessage(`afterViewChecked called`);
  }

  ngAfterViewInit(): void {
    this.addArbitraryMessage(`afterViewInit called`);
  }

  ngOnDestroy(): void {
    this.addArbitraryMessage("ngOnDestroy called");
  }

}
