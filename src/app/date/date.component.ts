import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    },
    DatePipe // Add DatePipe as a provider

  ]
})
export class DateComponent implements ControlValueAccessor {

  @Input() minDate!: Date;
  @Input() maxDate!: Date;
  value!: Date;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private datePipe: DatePipe) {} // Inject DatePipe

  writeValue(val: Date): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onDateChange(event: Date): void {
    this.value = event;
    const formattedDate = this.datePipe.transform(this.value, 'yyyy-mm-dd'); // Format the date
    this.onChange(formattedDate);
  }

}
