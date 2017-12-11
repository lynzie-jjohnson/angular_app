import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"
    documents: Document[] = [
        {
            title: "My first doc",
            decsription: "blah blah blah",
            file_url: "http://google/com",
            updated_at: "12/8/17",
            image_url: "https://d2wucpkmh57zie.cloudfront.net/wp-content/uploads/2015/10/stocksnap.jpg",
        },
        {
            title: "My second doc",
            decsription: "blah blah blah",
            file_url: "http://google/com",
            updated_at: "12/8/17",
            image_url: "https://cdn.makeawebsitehub.com/wp-content/uploads/2014/12/deathtostockphoto.jpg",
        },
        {
            title: "My third doc",
            decsription: "blah blah blah",
            file_url: "http://google/com",
            updated_at: "12/8/17",
            image_url: "https://static.pexels.com/photos/7919/pexels-photo.jpg",
        }
    ]
}