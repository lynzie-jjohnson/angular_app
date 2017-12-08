import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'This is a company', 'http://this.is.a.site.com', 'These are my skills', 150, 150, 150, 'lynzie@j.com')
    proposalTwo: Proposal = new Proposal(15, 'This is a GREAT company', 'http://this.is.a.site.com', 'These are my skills', 22, 30, 150, 'lynzie@j.com')
    proposalThree: Proposal = new Proposal(15, 'This is a COOLIO company', 'http://this.is.a.site.com', 'These are my skills', 750, 150, 50, 'lynzie@j.com')

    proposals: Proposal[] = [
        this.proposalOne, 
        this.proposalTwo, 
        this.proposalThree
    ]
}