import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoService} from "../photo.service";
import {Photo} from "../photo";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.css']
})
export class PhotoAddComponent implements OnInit {

  photo: Photo = {
    albumId: 1,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photo = {...this.photo};
  }

  savePhoto(form: NgForm): void{
    console.log('in onSubmit: ', form.valid)
    if(this.photo){
      this.photoService.createPhoto(this.photo).subscribe({
        next: () => this.router.navigate([`/photos`])
      })
    }
  }

  onBack(): void {
    this.router.navigate([`/photos`]);
  }

}
