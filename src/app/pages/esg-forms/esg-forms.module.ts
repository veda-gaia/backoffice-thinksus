import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsgFormsEditComponent } from './esg-forms-edit/esg-forms-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EsgFormsComponent } from './esg-forms.component';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { EsgFormsQuestionComponent } from './esg-forms-question/esg-forms-question.component';
import { EsgFormsSectionComponent } from './esg-forms-section/esg-forms-section.component';
import { EsgFormsSegmentComponent } from './esg-forms-segment/esg-forms-segment.component';

const routes: Routes = [
  { path: '', component: EsgFormsComponent },
  {
    path: 'forms-new',
    component: EsgFormsEditComponent,
  },
  {
    path: 'forms-new/:id',
    component: EsgFormsEditComponent,
  },
  {
    path: 'question-new',
    component: EsgFormsQuestionComponent,
  },
];

@NgModule({
  declarations: [
    EsgFormsEditComponent,
    EsgFormsQuestionComponent,
    EsgFormsSectionComponent,
    EsgFormsSegmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatListModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
  ],
})
export class EsgFormsModule {}
