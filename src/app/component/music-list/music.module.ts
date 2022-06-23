import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music/music.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  imports: [CommonModule, MusicRoutingModule, MaterialModule],
  declarations: [MusicComponent],
})
export class MusicModule {}
