import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private httpClient: HttpClient,
    private apollo: Apollo,
  ) {

  }

  async ngOnInit() {
    const result = await this.apollo
      .watchQuery({
        query: gql`
          {
            author(id: 124){
              id
              firstName
              lastName
            }
          }
        `,
      })
      .valueChanges
      .subscribe(result => {
        console.log(result);
      });

  }
}
