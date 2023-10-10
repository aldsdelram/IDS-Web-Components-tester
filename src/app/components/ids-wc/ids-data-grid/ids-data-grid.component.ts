import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import type IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
import { IdsDataGridColumn } from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid-column';

@Component({
  selector: 'app-ids-data-grid',
  templateUrl: './ids-data-grid.component.html',
  styleUrls: ['./ids-data-grid.component.css'],
})
export class IdsDataGridComponent implements AfterViewInit {
  @ViewChild('dataGrid', { read: ElementRef })
  dataGrid!: ElementRef<IdsDataGrid>;
  columns: IdsDataGridColumn[] = [];
  data = [{}, {}, {}];

  ngAfterViewInit() {
    console.log('dataGrid', this.dataGrid);
    this.dataGrid.nativeElement.columns = this.columns;
    this.dataGrid.nativeElement.data = this.data;
    this.dataGrid.nativeElement.filterable = true;
    this.dataGrid.nativeElement.pagination = 'client-side';
  }

  addColumns() {
    const id = 'id' + ((Math.random() * 9999) | 1000);
    this.columns = [
      ...this.columns,
      {
        id,
        name: 'COL' + id,
        field: id,
        // sortable: false,
        resizable: true,
        // align: 'center',
        formatter: this.dataGrid.nativeElement.formatters.text,
        filterType: this.dataGrid.nativeElement.filters.text,
      },
    ];
    this.data = this.data.map((d) => ({
      ...d,
      [id]: 'value' + Math.random(),
    }));
    this.dataGrid.nativeElement.data = this.data;
  }

  resetColumns() {
    this.columns = [];
    this.data = [{}, {}, {}, {}, {}, {}];
    this.dataGrid.nativeElement.redraw();
  }
}
