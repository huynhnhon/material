import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatToolbarModule, MatSidenavModule,
    MatMenuModule, MatIconModule, MatCardModule,
    MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatFormFieldModule, MatInputModule, MatDialogModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatSidenavModule,
        MatMenuModule, MatIconModule, MatCardModule,
        MatListModule, MatTableModule, MatPaginatorModule, 
        MatSortModule, MatFormFieldModule, MatInputModule,
        MatDialogModule, MatProgressSpinnerModule  ],
    exports: [MatButtonModule, MatToolbarModule, MatSidenavModule,
        MatMenuModule, MatIconModule, MatCardModule,
        MatListModule, MatTableModule,MatPaginatorModule, 
        MatInputModule, MatSortModule, MatFormFieldModule,
        MatDialogModule, MatProgressSpinnerModule  ]
})
export class MaterialModule { }