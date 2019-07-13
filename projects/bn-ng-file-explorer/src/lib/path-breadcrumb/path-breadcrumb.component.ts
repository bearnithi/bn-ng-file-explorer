import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BnNgFileExplorerService } from '../bn-ng-file-explorer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bn-path-breadcrumb',
  templateUrl: './path-breadcrumb.component.html',
  styleUrls: ['./path-breadcrumb.component.scss']
})
export class PathBreadcrumbComponent implements OnInit, OnDestroy {
  public paths: Array<any> = [];
  private pathSubscription: Subscription;

  @Output() pathChange = new EventEmitter<any>();

  constructor(private fileExplorerService: BnNgFileExplorerService) { }

  ngOnInit() {
    this.pathSubscription = this.fileExplorerService.pathAdded$.subscribe((paths: Array<any>) => {
      this.paths = paths;
    });
  }

  navigateToPath(path, e) {
    e.preventDefault();
    this.pathChange.emit(path);
  }

  ngOnDestroy() {
    this.pathSubscription.unsubscribe();
  }

}
