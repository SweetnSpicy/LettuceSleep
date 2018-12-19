import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-tunes',
  templateUrl: 'tunes.html',
  template: `
    <h1>Sleep Journal</h1>
    <p>
      Take notes on your sleeping of the day so far. Make sure to list if you are feeling
      groggy or any other happenings that seem out of the ordinary.
    </p>
    <form [formGroup]="todo" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>Date:</ion-label>
        <ion-input type="text" formControlName="date"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Description</ion-label>
        <ion-textarea formControlName="description"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>
    </form>
    <ion-card *ngFor="let toad of todoList">
      <ion-card-header >{{toad.date}}</ion-card-header>
      <ion-card-content>{{toad.description}}</ion-card-content>
    </ion-card>
  `,
})
export class TunesPage {

  private todo : FormGroup;
  private todoList : Array<FormGroup> = [];

  constructor( private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  logForm(){
    console.log(this.todo.value)
    this.todoList.push(this.todo.value)
  }

  

}
