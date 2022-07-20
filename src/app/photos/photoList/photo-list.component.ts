import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../photo.service";
import {Photo} from "../photo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  errorMessage = '';

  p: Number = 1;
  count: Number = 5;

  photos: Photo[] = [];

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe({
      next: photos => {
        this.photos = photos;
      },
      error: err => this.errorMessage = err
    });

  }

  onClick(id: number): void{
      this.router.navigate([`/photos/${id}`])
  }

}
