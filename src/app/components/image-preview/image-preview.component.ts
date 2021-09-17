import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  @Input() photoData:any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
