import {Component, Input, SimpleChange, OnChanges, Optional} from "@angular/core";
import {DataTable, PageEvent} from "./DataTable";

@Component({
    selector: "jtcPaginator",
    template: `<ng-content></ng-content>`
})
export class Paginator implements OnChanges {

    @Input("jtcTable")
    private inputjtcTable:DataTable;

    private jtcTable:DataTable;

    public activePage:number;
    public rowsOnPage:number;
    public dataLength:number = 0;
    public lastPage:number;

    public constructor(@Optional() private injectjtcTable:DataTable) {
    }

    public ngOnChanges(changes:{[key:string]:SimpleChange}):any {
        this.jtcTable = this.inputjtcTable || this.injectjtcTable;
        this.onPageChangeSubscriber(this.jtcTable.getPage());
        this.jtcTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    }

    public setPage(pageNumber:number):void {
        this.jtcTable.setPage(pageNumber, this.rowsOnPage);
    }

    public setRowsOnPage(rowsOnPage:number):void {
        this.jtcTable.setPage(this.activePage, rowsOnPage);
    }

    private onPageChangeSubscriber = (event:PageEvent)=> {
        this.activePage = event.activePage;
        this.rowsOnPage = event.rowsOnPage;
        this.dataLength = event.dataLength;
        this.lastPage = Math.ceil(this.dataLength / this.rowsOnPage);
    };
}