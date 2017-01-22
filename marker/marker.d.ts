import { ElementRef } from '@angular/core';
import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
export declare class MarkerElement {
    private mapService;
    private groupService;
    private popupService;
    private http;
    private elementText;
    private LeafletElement;
    private LeafletGroup;
    lat: number;
    lon: number;
    mouseover: string;
    onclick: string;
    iconUrl: string;
    marker: any;
    constructor(mapService: MapService, groupService: GroupService, popupService: PopupService, http: Http, elementText: ElementRef, LeafletElement?: LeafletElement, LeafletGroup?: LeafletGroup);
    ngOnInit(): void;
    createMarkerlayer(marker: any, map: any): void;
    imageExists(url: any, callback: any): void;
    getImage(): Observable<any>;
}
