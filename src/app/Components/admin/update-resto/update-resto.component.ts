import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from 'src/app/resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    address : new FormControl(''),
  })
  constructor(private router:ActivatedRoute,private resto:RestoService) { }

  ngOnInit(): void {

    }
    }


