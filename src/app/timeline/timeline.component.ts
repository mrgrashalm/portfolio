import { Component, Input } from '@angular/core';
import { TIMELINE_ENTRIES } from './timeline-entries';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  /** Number of entries to show; all entries if not set */
  @Input() limit?: number;

  /** Compact mode hides descriptions and tags (used on the home page) */
  @Input() compact = false;

  get entries() {
    return this.limit ? TIMELINE_ENTRIES.slice(0, this.limit) : TIMELINE_ENTRIES;
  }
}
