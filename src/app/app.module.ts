import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ModulesComponent } from './components/modules/modules.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BottomComponent } from './components/bottom/bottom.component';
import { FaqComponent } from './components/faq/faq.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { ModuleSectionComponent } from './components/module-section/module-section.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    HomeComponent,
    ContentsComponent,
    ModulesComponent,
    BottomComponent,
    FaqComponent,
    ImageDisplayComponent,
    ModuleSectionComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
