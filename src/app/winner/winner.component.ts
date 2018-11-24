import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CheckService } from '../check.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent {
  strInput: string;
  constructor(public checkService: CheckService, public snackbar: MatSnackBar) {}

  onClick() {
    console.log(this.strInput);
    this.checkService.save(this.strInput).subscribe(result => {
      if (result === 'success') {
        window.location.href =
          'https://docs.google.com/forms/d/e/1FAIpQLSfCEme3w8i7Vz6v0FvOprzkw4RzbFLEFE6u9wv6moxjuEPOBQ/formResponse';
      }
    });
  }
}
