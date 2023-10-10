import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IdsDataGridComponent } from './components/ids-wc/ids-data-grid/ids-data-grid.component';
import { IdsToolbarComponent } from './components/ids-wc/ids-toolbar/ids-toolbar.component';

@NgModule({
  declarations: [AppComponent, IdsDataGridComponent, IdsToolbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
