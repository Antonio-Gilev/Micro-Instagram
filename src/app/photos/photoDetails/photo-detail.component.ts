import { Component, OnInit } from '@angular/core';
import {Photo} from "../photo";
import {PhotoService} from "../photo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  errorMessage = '';
  photo: Photo | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router, private photoService: PhotoService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getPhoto(id);
    }
  }

  getPhoto(id: number): void {
    this.photoService.getPhoto(id).subscribe({
      next: photo => this.photo = photo,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/photos']);
  }


  deletePhoto(): void {
    if (this.photo && confirm(`Really delete the photo: ${this.photo.title}?`)) {
      this.photoService.deletePhoto(this.photo.id)
        .subscribe({
          next: () => this.onBack(),
          error: err => this.errorMessage = err
        });
    }
  }
}
