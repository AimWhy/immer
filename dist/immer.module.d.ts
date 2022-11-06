declare module "index" {
    export function isObject(v: any): boolean;
    export function createNode(key: any): {
        key: any;
        next: any;
    };
    export function produce(baseState: any, reducer: any): any;
}
