import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import type IdsDataGrid from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid';
import { IdsDataGridColumn } from 'ids-enterprise-wc/components/ids-data-grid/ids-data-grid-column';
import IdsGlobal from 'ids-enterprise-wc/components/ids-global/ids-global';

@Component({
  selector: 'app-ids-data-grid',
  templateUrl: './ids-data-grid.component.html',
  styleUrls: ['./ids-data-grid.component.scss'],
})
export class IdsDataGridComponent implements AfterViewInit {
  @ViewChild('dataGrid', { read: ElementRef })
  dataGrid!: ElementRef<IdsDataGrid>;
  columns: IdsDataGridColumn[] = [];
  data = [{}, {}, {}];

  ngAfterViewInit() {
    console.log('dataGrid', this.dataGrid);
    this.columns = [
      {
        id: 'marsielle',
        name: 'COL' + 'marsielle',
        field: 'marsielle',
        // sortable: false,
        resizable: true,
        // align: 'center',
        formatter: this.dataGrid.nativeElement.formatters.text,
        filterType: this.dataGrid.nativeElement.filters.text,
      },
    ];
    this.dataGrid.nativeElement.columns = this.columns;
    this.dataGrid.nativeElement.data = this.data;
    this.dataGrid.nativeElement.filterable = true;
    this.dataGrid.nativeElement.pagination = 'client-side';

    const a = IdsGlobal.getLocale().formatNumber('900');
    console.log(a);
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
    this.data = [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ];
    this.dataGrid.nativeElement.redraw();
  }
}
