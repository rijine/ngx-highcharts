import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ChartSeriesComponent } from './chart-series.component';
import { ChartXAxisComponent } from './chart-x-axis.component';
import { ChartYAxisComponent } from './chart-y-axis.component';
import { HighchartsService } from './highcharts.service';
import { ChartEvent } from './chart-event.model';
export declare class ChartComponent {
    series: ChartSeriesComponent;
    xAxis: ChartXAxisComponent;
    yAxis: ChartYAxisComponent;
    create: EventEmitter<any>;
    click: EventEmitter<ChartEvent>;
    addSeries: EventEmitter<ChartEvent>;
    afterPrint: EventEmitter<ChartEvent>;
    beforePrint: EventEmitter<ChartEvent>;
    drilldown: EventEmitter<ChartEvent>;
    drillup: EventEmitter<ChartEvent>;
    load: EventEmitter<ChartEvent>;
    redraw: EventEmitter<ChartEvent>;
    selection: EventEmitter<ChartEvent>;
    tooltipFormatter: any;
    zone: NgZone;
    chart: any;
    element: ElementRef;
    highchartsService: HighchartsService;
    private userOpts;
    private baseOpts;
    type: string;
    options: any;
    private init();
    ngAfterViewInit(): void;
    constructor(element: ElementRef, highchartsService: HighchartsService, zone: NgZone);
}
