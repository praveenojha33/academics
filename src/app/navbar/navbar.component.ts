import { Component, OnInit } from '@angular/core';
import {CourseList} from '../courselist';
import {DepartmentList} from '../departmentlist';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public courses=CourseList;
	public departments=DepartmentList;
  constructor() { }

  ngOnInit() {
  }

}
