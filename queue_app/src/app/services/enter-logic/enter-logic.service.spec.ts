import { TestBed } from '@angular/core/testing';
import { EnterLogicService } from './enter-logic.service';

describe('EnterLogicService', () => {
    let service: EnterLogicService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EnterLogicService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
