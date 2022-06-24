import { TestBed } from '@angular/core/testing';
import { MusicListService } from './music.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('MusicListService', () => {
  let httpTestingController: HttpTestingController;
  let service: MusicListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MusicListService);
  });

  it('should be created', () => {
    expect(MusicListService).toBeTruthy();
  });

  it('getData should use GET to retrieve data', () => {
    service.getMusicList().subscribe();
    const url =
      'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json';
    const testRequest = httpTestingController.expectOne(url);

    expect(testRequest.request.method).toEqual('GET');
  });
});
