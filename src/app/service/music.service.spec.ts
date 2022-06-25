import { TestBed } from '@angular/core/testing';
import { MusicListService } from './music.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiUrls } from './api-factory/api-urls';

describe('MusicListService', () => {
  let httpTestingController: HttpTestingController;
  let service: MusicListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MusicListService);
  });

  it('should be created', () => {
    expect(MusicListService).toBeTruthy();
  });

  it('getData should use GET to retrieve data', () => {
    service.getMusicList().subscribe();
    const testRequest = httpTestingController.expectOne(ApiUrls.GET_MUSIC_LIST);
    expect(testRequest.request.method).toEqual('GET');
  });
});
