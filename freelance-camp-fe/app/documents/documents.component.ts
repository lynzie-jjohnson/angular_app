import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
    documents: Document[] = [
        {
            title: "My first doc",
            decsription: "blah blah blah",
            file_url: "http://google/com",
            updated_at: "12/8/17",
            image_url: "http://google/com",
        },
        {
            title: "My second doc",
            decsription: "blah blah blah",
            file_url: "http://google/com",
            updated_at: "12/8/17",
            image_url: "http://google/com",
        },
        {
            title: "My third doc",
            decsription: "blah blah blah",
            file_url: "http://google/com",
            updated_at: "12/8/17",
            image_url: "http://google/com",
        }
    ]
}