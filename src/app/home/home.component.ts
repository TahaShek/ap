import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Field } from '../app.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showValidation: boolean = true;
  fields: any = [
    {
      type: 'input',
      label: 'assets',
      mandatory: false,
      controlName: 'email',
      inputType: 'text',
    },
  ];
  form!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      // Define more controls as needed
    });
  }
  get(){
    this.showValidation=true
  }

  ngOnInit(): void {}
  onSubmit() {
    // You can access the form values and perform actions here
    if (this.form.valid) {
      // Form is valid, you can submit or perform other actions
      const formValues = this.form.value;
      console.log(formValues);
      alert('success');
      this.form.reset();


      // Hide validation messages after successful submission
      this.showValidation = false;
      this.router.navigate(['asset'])
    } else {
      // Show validation messages if form is not valid
      this.showValidation = true;
      console.log('validation failed');
    }
    // this.showValidation=true
  }
}
