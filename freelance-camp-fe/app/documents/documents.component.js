"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
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
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html',
            styleUrls: ['documents.component.css']
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map