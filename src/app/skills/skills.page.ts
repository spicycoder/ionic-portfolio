import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {

  skills: Skill[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

}
