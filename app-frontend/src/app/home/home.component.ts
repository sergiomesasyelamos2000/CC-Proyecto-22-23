import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../shared/services/books.service';
import { Movie } from './../shared/interface/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 /*  public movies: Movie[] = []
  public moviesSlideshow: Movie[] = []

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    
    if ( pos > max ) {
      // TODO: llamar el servicio
      if ( this.peliculasService.cargando ) { return; }

      this.peliculasService.getCartelera().subscribe( movies => {
        this.movies.push(...movies );
      });
    }
    
    
  }


  constructor( private peliculasService: BooksService ) { }

  ngOnInit(): void {

    this.peliculasService.getCartelera()
      .subscribe( movies => {
        // console.log(resp.results);
        this.movies = movies;
        this.moviesSlideshow = movies;
      })

  }

  ngOnDestroy() {
    this.peliculasService.resetCarteleraPage();
  } */

}
