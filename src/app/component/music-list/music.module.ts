import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music/music.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ErrorComponent } from 'src/app/shared/component/error/error.component';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    MaterialModule,
    NgHttpLoaderModule.forRoot(),
  ],
  declarations: [MusicComponent, ErrorComponent],
})
export class MusicModule {}
