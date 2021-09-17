import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() photos: any[] | undefined;

  displayImages: any[] | undefined;

  filterOptions = [{label: "All", value: 'ALL'}, {label: "Front Hazard Avoidance", value: 'FHAZ'}
                  ,{label: "Rear Hazard Avoidance", value: 'RHAZ'}, {label: "Mast", value: 'MAST'}
                  ,{label: "Navigation Camera", value: 'NAVCAM'}
                  ]
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.displayImages = this.photos;
  }

  onChange(event: any){
    console.log("event =", event);
    const fitlerVal = event.target.value;
    if(fitlerVal === 'ALL'){
      this.displayImages = this.photos;
    }else{
      this.displayImages = this.photos?.filter(o => o.camera.name === fitlerVal);
    }
  }

  previewImage(photoData:any){
    const modalRef = this.modalService.open(ImagePreviewComponent);
    modalRef.componentInstance.photoData = photoData;
  }

}
