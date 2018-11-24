import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClueComponent } from './clue/clue.component';
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clues', component: ClueComponent },
  { path: 'winner', component: WinnerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
