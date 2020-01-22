import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private httpClient: HttpClient) {

  }

  async ngOnInit() {
    const result = await this.httpClient.get('api/').toPromise();
    console.log(result);
  }
}
