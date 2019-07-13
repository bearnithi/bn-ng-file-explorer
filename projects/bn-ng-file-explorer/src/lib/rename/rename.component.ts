import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'bn-rename',
  templateUrl: './rename.component.html',
  styleUrls: ['./rename.component.scss']
})
export class RenameComponent implements OnInit {
  @Input() folder: any;
  @Output() renamed = new EventEmitter<any>();
  @ViewChild('folderNameInput') fileNameInputs: ElementRef<any>;

  constructor() { }

  ngOnInit() {
  }

  rename() {
    this.renamed.emit(this.folder);
  }

}
