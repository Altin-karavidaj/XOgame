import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { XoBoardComponent } from './xo-board/xo-board.component';

@NgModule({
  declarations: [AppComponent, XoBoardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}