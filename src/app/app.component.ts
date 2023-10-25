import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

export interface Field {
  type: string;
  label: string;
  mandatory: boolean;
  controlName: string;
  inputType?: string;
  pattern?: string;
  createLabel?: string;
  openFormFunction?: () => void;
  validators?: ValidatorFn[];
  dependsOn?: {
    controlName: string;
    type: 'before' | 'after';
  }[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ap';

  calculatedMinDates: { [key: string]: string } = {};
  calculatedMaxDates: { [key: string]: string } = {};

  fields: Field[] = [
    {
      type: 'input',
      label: 'Start Date',
      mandatory: false,
      controlName: 'startDate',
      inputType: 'date',

      dependsOn: [{ controlName: 'endDate', type: 'before' }],
    },
    {
      type: 'input',
      label: 'assets',
      mandatory: false,
      controlName: 'email',
      inputType: 'text',
      pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
      validators: [Validators.required],
    },
    {
      type: 'input',
      label: 'assets',
      mandatory: false,
      controlName: 'endDate',
      inputType: 'date',
      dependsOn: [{ controlName: 'startDate', type: 'after' }],
    },

  ];

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formInit();
  }
  private setMinMaxDates(field: Field) {
    if (field.dependsOn) {
      field.dependsOn.forEach((dependency) => {
        this.form
          .get(dependency.controlName)
          ?.valueChanges.subscribe((value) => {
            this.applyMinMaxDates(field, dependency, value);
          });
      });
    }
  }

  private applyMinMaxDates(
    field: Field,
    dependency: { controlName: string; type: 'before' | 'after' },
    value: string | null
  ) {
    const targetDate =
      dependency.type === 'before' ?'calculatedMaxDates':'calculatedMinDates';

    if (value) {
      // Apply the min or max date based on the dependency type
      this[targetDate][field.controlName] = value;
    } else {
      // If the value is cleared, remove the min or max date restriction
      delete this[targetDate][field.controlName];
    }
  }

  ngOnInit(): void {
    this.fields.forEach((field) => {
      this.setMinMaxDates(field);
    });
  }

  formInit() {
    const group: { [key: string]: any } = {};

    this.fields.forEach((field) => {
      group[field.controlName] = [
        '',
        field.validators && field.validators.length
          ? Validators.compose(field.validators)
          : null,
      ];
    });

    this.form = this.fb.group(group);
  }

  onSubmit() {
    // You can access the form values and perform actions here
    if (this.form.valid) {
      // Form is valid, you can submit or perform other actions
      const formValues = this.form.value;
      console.log(formValues);
    } else {
      console.log('fuck off');
    }
  }
}

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'ap';
//   fields:any[]=[
//     {
//       type: 'input',
//       label: 'Start Date',
//       mandatory: false,
//       controlName: 'startDate',
//       inputType: 'date',
//     },
//     {
//       type: 'input',
//       label: 'assets',
//       mandatory: false,
//       controlName: 'email',
//       inputType: 'text',
//       pattern:"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
//     },
//     {
//       type: 'input',
//       label: 'assets',
//       mandatory: false,
//       controlName: 'endDate',
//       inputType: 'date',
//     }
//   ]

//   form: FormGroup;
//   minDates: { [key: string]: string | null } = {};

//   // Configuration for date dependencies
//   dateDependencies:any = {
//     endDate: 'startDate',
//     nextDueDate: 'endDate',
//     startDate:'endDate'
//     // ... Add other dependencies as needed
//   };

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       endDate: ['', [Validators.required]],
//       email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
//       startDate: ['']
//     });

//     this.initializeDateDependencies();

//   }
//   initializeDateDependencies() {
//     Object.keys(this.dateDependencies).forEach(dependentControl => {
//       const controllingControl = this.dateDependencies[dependentControl];
//       this.form.get(controllingControl)?.valueChanges.subscribe(value => {
//         this.minDates[dependentControl] = value;
//       });
//     });
//   }
//   onSubmit() {
//     // You can access the form values and perform actions here
//     if (this.form.valid) {
//       // Form is valid, you can submit or perform other actions
//       const formValues = this.form.value;
//       console.log(formValues);
//     }
//     else {
//       console.log('fuck off')
//     }
//   }
// }
