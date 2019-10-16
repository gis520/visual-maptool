import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NgxAmapModule } from 'ngx-amap';
import { MapToolService } from './map/maptool.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 3000, positionClass: 'toast-top-center' }),
    NgxAmapModule.forRoot({
      apiVersion: '1.4.14',
      apiKey: '146f101e824accd6956eeec4937c1a05' //'eb840ed80f669b89a8ff67602fddd5b1'
    })
  ],
  providers: [MapToolService],
  bootstrap: [AppComponent]
})
export class AppModule {}
