import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import {FormBuilder, FormControlName, FormGroup, NgForm} from "@angular/forms";
import {PhotoService} from "../photo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Photo} from "../photo";

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  errorMessage = '';
  ogPhoto: Photo | undefined;

  photo: Photo | undefined;
  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private photoService: PhotoService) {
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getPhoto(id);
    }
  }

  getPhoto(id: number): void {
    this.photoService.getPhoto(id).subscribe({
      next: photo => {
        this.ogPhoto = photo;
        this.photo = {...this.ogPhoto};
      },
      error: err => this.errorMessage = err
    });
  }

  savePhoto(form: NgForm): void{
    console.log('in onSubmit: ', form.valid)
    if(this.photo){
      this.photoService.updatePhoto(this.photo).subscribe({
        next: () => this.router.navigate([`/photos/${this.photo?.id}`])
      })
    }
  }

  onBack(): void {
    this.router.navigate([`/photos/${this.photo?.id}`]);
  }
}
