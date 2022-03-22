import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfigurationAutomatiqueComponent} from './configuration-automatique.component';

describe('ConfigurationAutomatiqueComponent', () => {
    let component: ConfigurationAutomatiqueComponent;
    let fixture: ComponentFixture<ConfigurationAutomatiqueComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConfigurationAutomatiqueComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfigurationAutomatiqueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
