// check.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  calculatorForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initCalculatorForm();
  }

  initCalculatorForm() {
    this.calculatorForm = this.fb.group({
      serviceFee: [0, Validators.required],
      taxPercentage: [20, Validators.required],
      advancePaymentPercentage: [0, Validators.required],
      finalPaymentPercentage: [0, Validators.required],
      paymentOnDraftPercentage: [0, Validators.required],
      totalFee: [0],
      advancePayment: [0],
      finalPayment: [0],
      paymentOnDraft: [0],

    });
  }

  totalFeeAfterTax(): number {
    const serviceFee = this.calculatorForm.get('serviceFee')?.value;
    const taxPercentage = this.calculatorForm.get('taxPercentage')?.value;

    return serviceFee * (1 + taxPercentage / 100);
  }
  calculateAmount(percentageControlName: string): number {
    const percentage = +this.calculatorForm.get(percentageControlName)?.value;
    const totalFeeAfterTax = this.totalFeeAfterTax();
    console.log('Percentage:', percentage);
    console.log('Total Fee After Tax:', totalFeeAfterTax);
    return totalFeeAfterTax * (percentage / 100);
  }


  patchAmounts() {
    const totalFeeAfterTax = this.totalFeeAfterTax(); // Calculate total fee after tax

    const advanceAmount = this.calculateAmount('advancePaymentPercentage');
    const finalAmount = this.calculateAmount('finalPaymentPercentage');
    const draftAmount = this.calculateAmount('paymentOnDraftPercentage');

    this.calculatorForm.patchValue({
      totalFee:totalFeeAfterTax,
      advancePayment: advanceAmount,
      finalPayment: finalAmount,
      paymentOnDraft: draftAmount,
    });
  }

  onSubmit() {
    const totalPercentage =
      this.calculatorForm.get('advancePaymentPercentage')?.value +
      this.calculatorForm.get('finalPaymentPercentage')?.value +
      this.calculatorForm.get('paymentOnDraftPercentage')?.value;
      console.log(totalPercentage)

    if (totalPercentage !== 100) {
      alert('Percentages must add up to 100%');
      return;
    } else {
      this.patchAmounts(); // Patch amounts before submitting
      console.log(this.calculatorForm.value);
    }

    // ... (remaining code)
  }
}
