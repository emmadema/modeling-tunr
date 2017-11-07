import { Component, OnInit } from '@angular/core';
import  { ManagersService } from '../managers.service';
import  { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.css']
})
export class ManagerEditComponent implements OnInit {

	updatedManger: object = {};

  constructor(
  	private route : ActivatedRoute,
  	private managerService : ManagersService

  	) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.managerService.getOneManager(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.updatedManger = response.json();
  		});
  	});
  }

  updateManager(updatedManager) {
  	console.log('updating manager yo!');
  	this.managerService.updateManager(updatedManager)
  	.subscribe(response => {
  		console.log(response.json());
  		let manager = response.json();
  		window.location.href = "/managers/" + manager.id;
  	});
  }

}
