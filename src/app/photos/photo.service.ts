import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of, tap, throwError} from "rxjs";
import {Photo} from "./photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photosUrl = 'api/photos';
  //private photosUrl = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }


  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }

  getPhoto(id: number): Observable<Photo> {
    const url = `${this.photosUrl}/${id}`;
    return this.http.get<Photo>(url)
      .pipe(
        tap(data => console.log(JSON.stringify(data)))
      );
  }

  deletePhoto(id: number): Observable<Photo> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.photosUrl}/${id}`;
    return this.http.delete<Photo>(url, {headers})
      .pipe(
        tap(data => console.log('DeletePhoto: ' + id))
      );
  }

  updatePhoto(photo: Photo): Observable<Photo> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.photosUrl}/${photo.id}`;
    return this.http.put<Photo>(url, photo, { headers })
      .pipe(
        tap(data => console.log('updatedPhoto: ' + + JSON.stringify(data))),
        map(() => photo)
      );
  }

  createPhoto(photo: Photo): Observable<Photo> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // @ts-ignore
    photo.id = null;
    return this.http.post<Photo>(this.photosUrl, photo, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data)))
      );
  }



}
