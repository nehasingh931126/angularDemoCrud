import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  @Output() submitValue = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.submitValue.emit(this.submitted);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  }
}
