import { Component, OnInit } from '@angular/core';

import artist from '../_files/artist.json';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

	public artistList:{name:string, shortname:string, reknown:string, bio:string}[] = artist;

  constructor() { }

  ngOnInit(): void {
  }

}
