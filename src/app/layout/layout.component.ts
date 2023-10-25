import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Field } from '../app.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  fields: Field[] = [
    // {
    //   type: 'input',
    //   label: 'Start Date',
    //   mandatory: false,
    //   controlName: 'startDate',
    //   inputType: 'date',

    //   dependsOn: [{ controlName: 'endDate', type: 'before' }],
    // },
    {
      type: 'input',
      label: 'assets',
      mandatory: false,
      controlName: 'email',
      inputType: 'text',

    },
    // {
    //   type: 'input',
    //   label: 'assets',
    //   mandatory: false,
    //   controlName: 'endDate',
    //   inputType: 'date',
    //   dependsOn: [{ controlName: 'startDate', type: 'after' }],
    // },

  ];
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      // Define more controls as needed
    });
  }
  ngOnInit(): void {
  }

}
