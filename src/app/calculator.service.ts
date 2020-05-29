import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  firstValue: number;
  secondValue: number;
  operation: string;
  operationSelectedNow: boolean;
  dotSelected: boolean;
  afterResult: boolean;

  constructor() { }

  setNumber(symbol: number): number {
    this.operationSelectedNow = false;
    this.dotSelected = false;
    return symbol;
  }

  setDot(): string | undefined {
    if (!this.operationSelectedNow) {
      this.dotSelected = true;
      return '.';
    }
  }

  sum(inputValue: string): string | undefined {
    if (!this.operationSelectedNow && !this.dotSelected && (!this.firstValue || this.afterResult)) {
      this.operation = '+';
      this.firstValue = +inputValue.split(' +')[0];
      this.operationSelectedNow = true;
      this.dotSelected = false;
      return ' + ';
    }
  }

  diff(inputValue: string): string | undefined {
    if (!this.operationSelectedNow && !this.dotSelected && (!this.firstValue || this.afterResult)) {
      this.operation = '-';
      this.firstValue = +inputValue.split(' -')[0];
      this.operationSelectedNow = true;
      this.dotSelected = false;
      return ' - ';
    }
  }

  mul(inputValue: string): string | undefined {
    console.log(!this.firstValue || this.afterResult);
    console.log(!this.firstValue, this.afterResult);
    if (!this.operationSelectedNow && !this.dotSelected && (!this.firstValue || this.afterResult)) {
      this.operation = '*';
      this.firstValue = +inputValue.split(' *')[0];
      this.operationSelectedNow = true;
      this.dotSelected = false;
      return ' * ';
    }
  }

  div(inputValue: string): string | undefined {
    if (!this.operationSelectedNow && !this.dotSelected && (!this.firstValue || this.afterResult)) {
      this.operation = '/';
      this.firstValue = +inputValue.split(' /')[0];
      this.operationSelectedNow = true;
      this.dotSelected = false;
      return ' / ';
    }
  }

  showResult(inputValue: string): number | undefined {
    if (!this.dotSelected && this.firstValue && !this.operationSelectedNow) {
      console.log('inside');
      this.secondValue = +inputValue.split(' ')[2];
      let result: number;
      this.operationSelectedNow = false;
      this.dotSelected = false;
      this.afterResult = true;
      switch (this.operation) {
        case '+':
          result = this.firstValue + this.secondValue;
          this.secondValue = 0;
          this.firstValue = result;
          return result;
        case '-':
          result = this.firstValue - this.secondValue;
          this.secondValue = 0;
          this.firstValue = result;
          return result;
        case '*':
          result = this.firstValue * this.secondValue;
          this.secondValue = 0;
          this.firstValue = result;
          return result;
        case '/':
          result = this.firstValue / this.secondValue;
          this.secondValue = 0;
          this.firstValue = result;
          return result;
      }
    }
  }
}
