import { Component, OnInit, Input } from '@angular/core';
import { BnNgFileExplorerService } from '../bn-ng-file-explorer.service';

@Component({
  selector: 'bn-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() file: any = {};

  constructor(public fileExplorerService: BnNgFileExplorerService) { }

  ngOnInit() {
  }

  selectFile() {

  }

  deleteFile() {

  }

  editFolder() {

  }

}
