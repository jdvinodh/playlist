import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgHttpLoaderModule } from "ng-http-loader";
import { MusicListService } from "src/app/service/music.service";
import { MaterialModule } from "src/app/shared/material/material.module";

import { MusicComponent } from "./music.component";

describe("MusicComponent", () => {
  let component: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicComponent],
      providers: [HttpClient, MusicListService, HttpHandler],
      imports: [MaterialModule, NgHttpLoaderModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
  });
});
