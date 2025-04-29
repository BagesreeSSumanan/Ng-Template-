import { Component,Input } from '@angular/core';


@Component({
  selector: 'paragraph',
  standalone: false,
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.css'
})
export class ParagraphComponent {
  @Input() colorselected: string = 'black';
}
