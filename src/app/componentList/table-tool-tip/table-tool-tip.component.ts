import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-tool-tip',
  templateUrl: './table-tool-tip.component.html',
  styleUrls: ['./table-tool-tip.component.css']
})
export class TableToolTipComponent implements OnInit {

  API_Response = [
    {srNo:'1',name:'ABC',email:'abc@gamil.com'},
    {srNo:'2',name:'AAA',email:'AAA@gamil.com'},
    {srNo:'3',name:'ABBC',email:'ABBC@gamil.com'},
    {srNo:'4',name:'ABBCD',email:'ABBCD@gamil.com'},
    {srNo:'5',name:'ABBCDE',email:'ABBCDE@gamil.com'},
    {srNo:'6',name:'ABBCDEF',email:'ABBCDEF@gamil.com'},
    {srNo:'7',name:'ABBCDEFG',email:'ABBCDEFG@gamil.com'},
    {srNo:'8',name:'ABBCDEFGH',email:'ABBCDEFGH@gamil.com'},
  ]
  tooltipDs: any[] = [];
  showTooltipFlag: boolean = false;
  tooltipPos = {x:0, y:0};

  constructor() { }

  ngOnInit(): void {
  }

  /** @Author
  * Mohd_Javed
  */
  showTooltip(datasource:any, event:any){
    this.tooltipDs = datasource;
    this.showTooltipFlag = true;
    console.log(this.tooltipDs)
    this.trackCursor(event);
  }
  trackCursor(event: any) {
    console.log("x axis "+ event.clientX, "y asix ", event.clientY)
    this.tooltipPos.x = event.clientX + 20;
    this.tooltipPos.y = event.clientY + 50;

  }

  hideTooltip(){
    this.showTooltipFlag = false;
    console.log("mouser leave")
  }

}
