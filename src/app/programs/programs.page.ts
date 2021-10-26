import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.page.html',
  styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {
  public programs: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.programs = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
