import { DataTable } from "./DataTable";
export declare class DefaultSorter {
    private jtcTable;
    private sortBy;
    private isSortedByMeAsc;
    private isSortedByMeDesc;
    constructor(jtcTable: DataTable);
    private sort();
}
