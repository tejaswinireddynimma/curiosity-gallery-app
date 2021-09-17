import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GalleryService } from 'src/app/service/gallery.service';
import { convertToObject } from 'typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  today: Date = new Date();
  minDate: any ;
  maxDate: any;
  imagesResponse: any| undefined;
  showMessage: string | undefined;
  showLoading: boolean = false;

  constructor(private fb: FormBuilder, private gallerService: GalleryService) { 
    this.maxDate = {year: this.today.getFullYear(), month: this.today.getMonth()+1, day: this.today.getDate()}
    this.minDate = {year: 2011, month: 11, day: 26}
    this.searchForm = this.fb.group({
      searchDate: new FormControl(this.maxDate)
    });

  }

  ngOnInit(): void {   
  }

  onSubmit(values: any){
    this.reset();
    this.gallerService.getImages(values.searchDate).subscribe(res =>{
      this.imagesResponse = res;
      this.showLoading = false;
      this.showMessage = res.photos.length > 0 ? undefined : "No Images found for selected date!";
    }, 
    err => {
      this.showLoading = false;
      this.showMessage = err;
    })
  }

  reset(){
    this.showLoading = true;
    this.imagesResponse = null;
    this.showMessage = undefined;
  }

}
