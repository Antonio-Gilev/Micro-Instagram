import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section class="mt-2" >
      <nav class="container navbar navbar-expand  rounded w-75">
        <img src="assets/images/images.png"  class="navbar-brand rounded-circle bg-light rounded ms-auto me-auto p-3 shadow" style="border-radius: 15px; font-weight: bolder; height: 130px"/>
        <a href="/photos/add" class="btn  bg-light shadow float-end rounded-pill" style="height: 55px;width: 55px">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-plus mt-2" viewBox="0 0 16 16">
            <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
          </svg>
        </a>
      </nav>
    </section>

    <div class='container'>
      <router-outlet></router-outlet>
    </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microInstagram';
}
