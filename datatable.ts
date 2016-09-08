
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTable } from './src/DataTable';
import { DefaultSorter } from './src/DefaultSorter';
import { Paginator } from './src/Paginator';
import { BootstrapPaginator } from './src/BootstrapPaginator';

@NgModule({
    imports: [CommonModule],
    declarations: [DataTable, DefaultSorter, Paginator,BootstrapPaginator],
    exports: [DataTable, DefaultSorter, BootstrapPaginator]
})
export class jtcDataTableModule {

}