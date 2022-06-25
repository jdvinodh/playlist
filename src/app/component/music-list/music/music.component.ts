import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MusicList } from 'src/app/models/music.model';
import { MusicListService } from 'src/app/service/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  musicList$?: Observable<MusicList>;
  errorMsg = '';
  constructor(private musicService: MusicListService) {}

  ngOnInit(): void {
    this.getMusicPlaylist();
  }

  // get playlist from api
  getMusicPlaylist() {
    this.musicList$ = this.musicService.getMusicList().pipe(
      catchError(err => {
        this.errorMsg = err;
        return of();
      })
    );
  }
}
