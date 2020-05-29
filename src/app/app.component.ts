import {Component, ElementRef, ViewChild} from '@angular/core';
import {CalculatorService} from "./calculator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  @ViewChild('resultInput', { static: false }) resultInput: ElementRef;

  constructor(private calculatorService: CalculatorService) { }

  clearInput() {
    this.resultInput.nativeElement.value = '';
  }

  setNumber(symbol: number) {
    this.resultInput.nativeElement.value += this.calculatorService.setNumber(symbol);
  }

  setDot() {
    const result = this.calculatorService.setDot();
    if (result) {
      this.resultInput.nativeElement.value += result;
    }
  }

  sum() {
    const result = this.calculatorService.sum(this.resultInput.nativeElement.value);
    if (result) {
      this.resultInput.nativeElement.value += result;
    }
  }

  diff() {
    const result = this.calculatorService.diff(this.resultInput.nativeElement.value);
    if (result) {
      this.resultInput.nativeElement.value += result;
    }
  }

  mul() {
    const result = this.calculatorService.mul(this.resultInput.nativeElement.value);
    if (result) {
      this.resultInput.nativeElement.value += result;
    }
  }

  div() {
    const result = this.calculatorService.div(this.resultInput.nativeElement.value);
    if (result) {
      this.resultInput.nativeElement.value += result;
    }
  }

  showResult() {
    const result = this.calculatorService.showResult(this.resultInput.nativeElement.value);
    if (result) {
      this.resultInput.nativeElement.value = result;
    }
  }

}
