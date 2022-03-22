import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfigurationManuelleComponent} from './configuration-manuelle.component';

describe('ConfigurationManuelleComponent', () => {
    let component: ConfigurationManuelleComponent;
    let fixture: ComponentFixture<ConfigurationManuelleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConfigurationManuelleComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigurationManuelleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
