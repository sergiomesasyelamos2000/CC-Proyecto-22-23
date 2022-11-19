import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../shared/components/components.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookRowComponent } from './book-list/book-row/book-row.component';
import { BookService } from './book.service';

@NgModule({
  providers: [BookService],
  declarations: [BookListComponent, BookRowComponent, BookDetailComponent],
  exports: [BookListComponent, BookRowComponent],
  imports: [CommonModule, SharedModule, ComponentsModule, MaterialModule],
})
export class BookModule {}
