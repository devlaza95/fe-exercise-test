import { Component } from '@angular/core';
import { evaluate } from '@cloudmark/evaluator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  expression: string = '';
  result: string = '';
  history: { expression: string; result: string }[] = [];

  onExpressionChange(): void {
    try {
      console.log('hello');
      this.result = evaluate('1+2+sin(24+cos(23))').toString();
      // this.result = evaluator.evaluate(this.expression).toString();
    } catch (error) {
      this.result = 'Error';
    }
  }

  // evaluateExpression(): void {
  //   if (this.result !== 'Error') {
  //     this.history.unshift({
  //       expression: this.expression,
  //       result: this.result,
  //     });
  //     this.history = this.history.slice(0, 5);
  //   }
  // }
}
