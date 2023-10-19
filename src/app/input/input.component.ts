import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  // input.component.ts
@Input() minDate!: string;
@Input() maxDate!: string;

  input: string = ''; // Initialize input as an empty string
  @Input() label!: string;
  @Input() _mandatory: boolean = false;
  @Input() type!: string;
  @Input() pattern: string | null = null; // Add pattern input

  onchange: any = () => {};
  ontouched: any = () => {};

  constructor() {}

  writeValue(input: any): void {
    this.input = input;
  }

  registerOnChange(fn: any): void {
    this.onchange = fn;
  }

  registerOnTouched(fn: any): void {
    this.ontouched = fn;
  }
  onBlur() {
    // Trim leading and trailing whitespaces
    this.input = this.input.trim();

    // If the trimmed input is empty, reset it
    if (!this.input) {
      this.input = '';
      this.onchange(this.input);
    }
    // Else, proceed with the pattern check
    else if (this.pattern) {
      const regex = new RegExp(this.pattern);
      if (!regex.test(this.input)) {
        this.input = '';
        this.onchange(this.input);
      }
    }
    this.ontouched();
  }

}
