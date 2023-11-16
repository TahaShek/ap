import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validator, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-with-validation',
  templateUrl: './input-with-validation.component.html',
  styleUrls: ['./input-with-validation.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputWithValidationComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputWithValidationComponent),
      multi: true,
    }
  ],
})
export class InputWithValidationComponent implements ControlValueAccessor,Validator {
  @Input() inputCtrl!: AbstractControl;
  @Input() showValidation: boolean = true;
  @Output() showValidationChange = new EventEmitter<boolean>();

  input: string = ''; // Initialize input as an empty string
  @Input() label!: string;
  @Input() _mandatory: boolean = false;
  @Input() type!: string;
  @Input() pattern: string = ''; // Accept any pattern as input

  blurred = false;

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
  validate(ctrl: FormControl) {
    this.inputCtrl = ctrl;
    return null;
  }

  isInvalid() {
    return this.showValidation && this.inputCtrl?.invalid && this.blurred;
  }

  onBlur() {
    this.blurred = true;
  }
  onFocus() {
    this.blurred = false;
    this.showValidationChange.emit(true); // Emitting true when input is focused
  }

handleKeypress(event: KeyboardEvent): void {
    // Create a RegExp based on the input pattern
    const regex = new RegExp(this.pattern);

    // If the character doesn't match the pattern, prevent the input
    if (!regex.test(event.key)) {
        event.preventDefault();
    }
}


}
