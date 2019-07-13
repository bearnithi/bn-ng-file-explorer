import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BnNgFileExplorerService } from '../bn-ng-file-explorer.service';

@Component({
  selector: 'bn-path-breadcrumb',
  templateUrl: './path-breadcrumb.component.html',
  styleUrls: ['./path-breadcrumb.component.scss']
})
export class PathBreadcrumbComponent implements OnInit {
  public paths: Array<any> = [];
  @Output() pathChange = new EventEmitter<any>();

  constructor(private fileExplorerService: BnNgFileExplorerService) { }

  ngOnInit() {
    this.fileExplorerService.pathAdded$.subscribe((paths: Array<any>) => {
      this.paths = paths;
    });
  }

  navigateToPath(path, e) {
    e.preventDefault();
    this.pathChange.emit(path);
  }

}
