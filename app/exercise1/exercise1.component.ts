import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { map } from 'rxjs/operators'



 
@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  @ViewChild('f') myMovieForm : NgForm;
  loadedMovie = [];
  isFetching = false;

  error: null; 


  constructor(private http: HttpClient) { }
  ngOnInit() {}
 
  onCreate(){
    this.http.post
    ('https://http-request-exercies-default-rtdb.firebaseio.com/movies.json',
    this.myMovieForm.value
    ).subscribe(responseData => {
      console.log(responseData)
    })
  } 
  onRecieveMovies(){
    this.isFetching = true;
    this.http.get('https://http-request-exercies-default-rtdb.firebaseio.com/movies.json')
    .pipe(map(responseData => {
     const movieArray = [];
     for (const key in responseData) {
      if (responseData.hasOwnProperty(key)){
       movieArray.push( {...responseData[key], id: key} )
     } 
  }  
     return movieArray;
    }))
    .subscribe(Movie =>{
      this.isFetching = true; 
      this.loadedMovie = Movie; 
    })
  }
  onClearMovies(){
    return this.http.delete('https://http-request-exercies-default-rtdb.firebaseio.com/movies.json')
    .subscribe(() => {
   this.loadedMovie = [];    
    });
  }
  getFakeData(){
  }
}