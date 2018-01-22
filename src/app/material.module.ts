import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatToolbarModule, MatSidenavModule,
    MatMenuModule, MatIconModule, MatCardModule,
    MatListModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatFormFieldModule, MatInputModule, MatDialogModule 
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatSidenavModule,
        MatMenuModule, MatIconModule, MatCardModule,
        MatListModule, MatTableModule, MatPaginatorModule, 
        MatSortModule, MatFormFieldModule, MatInputModule,
        MatDialogModule  ],
    exports: [MatButtonModule, MatToolbarModule, MatSidenavModule,
        MatMenuModule, MatIconModule, MatCardModule,
        MatListModule, MatTableModule,MatPaginatorModule, 
        MatInputModule, MatSortModule, MatFormFieldModule,
        MatDialogModule  ]
})
export class MaterialModule { }