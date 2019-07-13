import { Component, OnInit } from '@angular/core';
import { BnNgFileExplorerService } from '../bn-ng-file-explorer.service';

@Component({
  selector: 'bn-path-breadcrumb',
  templateUrl: './path-breadcrumb.component.html',
  styleUrls: ['./path-breadcrumb.component.scss']
})
export class PathBreadcrumbComponent implements OnInit {
  public paths: Array<any> = [];

  constructor(private fileExplorerService: BnNgFileExplorerService) { }

  ngOnInit() {
    this.fileExplorerService.pathAdded$.subscribe((paths: Array<any>) => {
      this.paths = paths;
    });
  }

  navigateByPath(i, e) {}

}
