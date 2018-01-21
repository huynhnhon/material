import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatToolbarModule, MatSidenavModule,
    MatMenuModule, MatIconModule, MatCardModule,
    MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatFormFieldModule, MatInputModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatSidenavModule,
        MatMenuModule, MatIconModule, MatCardModule,
        MatListModule, MatTableModule, MatPaginatorModule, 
        MatSortModule, MatFormFieldModule, MatInputModule ],
    exports: [MatButtonModule, MatToolbarModule, MatSidenavModule,
        MatMenuModule, MatIconModule, MatCardModule,
        MatListModule, MatTableModule,MatPaginatorModule, 
        MatInputModule, MatSortModule, MatFormFieldModule ]
})
export class MaterialModule { }