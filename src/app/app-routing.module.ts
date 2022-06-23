import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'music',
    loadChildren: () =>
      import('./component/music-list/music.module').then((x) => x.MusicModule),
  },
  { path: '', redirectTo: 'music', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
