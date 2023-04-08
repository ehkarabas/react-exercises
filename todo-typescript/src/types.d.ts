// .d.ts dosyalarinda belirtilebilecek tum type tanimlamalari

// interface
interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

// interface Point {
//   x: number;
//   y: number;
// }

// // type alias
// type StringOrNumber = string | number;

// // class
// class ExternalLibraryClass {
//   constructor(value: number);
//   getValue(): number;
// }

// // function
// function calculateArea(width: number, height: number): number;

// // enum
// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// // namespace
// declare namespace MyNamespace {
//   interface NestedInterface {
//     value: string;
//   }

//   function nestedFunction(): void;
// }

// // global variable

// declare const GLOBAL_VALUE: string;
// declare function globalFunction(): void;

// // module ve module seviyesinde export
// declare module "../forTestingPurposes/testModule" {
//   export interface MyInterface {
//     value: number;
//   }

//   export function myFunction(): void;
//   export const myInterfaceObject: MyInterface;
// }
