import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music/music.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    MaterialModule,
    NgHttpLoaderModule.forRoot(),
  ],
  declarations: [MusicComponent],
})
export class MusicModule {}
