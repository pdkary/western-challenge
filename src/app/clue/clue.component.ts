import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckService } from '../check.service';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.scss']
})
export class ClueComponent implements OnInit {
  clues = {
    1:
      // tslint:disable-next-line:max-line-length
      'A woman had two sons who were born on the same hour of the same day of the same month of the same year. But they were not twins. How could this be so',
    2: 'A man pushed his car. He stopped when he reached a hotel at which point he knew he was bankrupt. Why?',
    3: 'A farmer has 10 rabbits, 20 horses, and 40 pigs. If we assume all of his horses are pigs, how many horses does the farmer have?',
    4:
      // tslint:disable-next-line:max-line-length
      'A man goes to a hardware shop and asks for the price of an item. The shop keeper replies that the item is “one for $1”. The man gives the shop keeper “$3 for 600”. What did the man buy?',
    5: 'A woman has 7 children, half of them are boys. How is this possible?',
    6: 'A cat has three kittens: Mopsy, Topsy and Spot. What is the mother\'s name. What is the mother\'s name?'
  };

  numIndex: number;
  strClue: string;
  strWarning: string;
  warning = false;

  config: MatSnackBarConfig;

  answerInput: string;
  constructor(public router: Router, private checkService: CheckService, public snackbar: MatSnackBar) {
    this.config = new MatSnackBarConfig();
    this.config.verticalPosition = 'top';
    this.config.horizontalPosition = 'center';
  }

  onClick(): void {
    this.checkService.checkAnswer(this.answerInput, this.numIndex).subscribe(result => {
      const message = result ? 'Correct!' : 'Incorrect!';
      this.config.panelClass = result ? 'green' : 'red';
      this.snackbar.open(message, 'close', this.config);
      if (result) {
        this.next();
      }
    });
    this.answerInput = '';
  }

  ngOnInit(): void {
    this.numIndex = 1;
    this.strClue = this.clues[this.numIndex];
  }
  private next(): void {
    this.numIndex++;
    this.strClue = this.clues[this.numIndex];
    if (this.numIndex === 5) {
      this.warning = true;
      this.strWarning = '2 word answer';
    }
    if (this.numIndex === 6) {
      this.router.navigateByUrl('winner');
    }
  }
}
