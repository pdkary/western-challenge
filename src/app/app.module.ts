import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckService } from './check.service';
import { ClueComponent } from './clue/clue.component';
import { HomeComponent } from './home/home.component';
import { WinnerComponent } from './winner/winner.component';

@NgModule({
  declarations: [AppComponent, ClueComponent, HomeComponent, WinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [CheckService],
  bootstrap: [AppComponent]
})
export class AppModule {}
