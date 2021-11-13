import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  id : string;
  constructor(private route : ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnInit(): void {
  }

}
