import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { Extent } from '../extent';
import BaseObject, { ObjectEvent } from '../Object';
import { ProjectionLike, TransformFunction } from '../proj';
import GeometryType from './GeometryType';

export default abstract class Geometry extends BaseObject {
    constructor();
    protected simplifiedGeometryMaxMinSquaredTolerance: number;
    protected simplifiedGeometryRevision: number;
    protected abstract computeExtent(extent: Extent): Extent;
    abstract applyTransform(transformFn: TransformFunction): void;
    abstract clone(): Geometry;
    abstract closestPointXY(x: number, y: number, closestPoint: Coordinate, minSquaredDistance: number): number;
    containsXY(x: number, y: number): boolean;
    getClosestPoint(point: Coordinate, opt_closestPoint?: Coordinate): Coordinate;
    getExtent(opt_extent?: Extent): Extent;
    abstract getSimplifiedGeometry(squaredTolerance: number): Geometry;
    abstract getType(): GeometryType;
    intersectsCoordinate(coordinate: Coordinate): boolean;
    abstract intersectsExtent(extent: Extent): boolean;
    abstract rotate(angle: number, anchor: Coordinate): void;
    abstract scale(sx: number, opt_sy?: number, opt_anchor?: Coordinate): void;
    simplify(tolerance: number): Geometry;
    abstract simplifyTransformed(squaredTolerance: number, opt_transform?: TransformFunction): Geometry;
    transform(source: ProjectionLike, destination: ProjectionLike): Geometry;
    abstract translate(deltaX: number, deltaY: number): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
