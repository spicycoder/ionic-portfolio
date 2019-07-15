import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {

  experiences: Experience[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getExperiences().subscribe(experiences => {
      this.experiences = experiences;
    });
  }

}
