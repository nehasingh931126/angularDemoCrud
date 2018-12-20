import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-check-form-validation',
  templateUrl: './check-form-validation.component.html',
  styleUrls: ['./check-form-validation.component.css']
})
export class CheckFormValidationComponent implements OnInit {
  teamForm:FormGroup;
  allTeamDetails = [{first_name:'',last_name:''},{first_name:'Aditya',last_name:'Singh'}];
  constructor(private formBuilder: FormBuilder) {
    this.teamForm = this.formBuilder.group({
      memberDetails: this.formBuilder.array([])
    });
  }

  ngOnInit(){
    this.teamForm = this.formBuilder.group({
      memberDetails: this.formBuilder.array(
        this.allTeamDetails.map(x => this.formBuilder.group({
          firstName: [x.first_name, [Validators.required, Validators.minLength(2)]],
          lastName: [x.last_name, [Validators.required, Validators.minLength(2)]]
        }))
      )
    })
  }
}
