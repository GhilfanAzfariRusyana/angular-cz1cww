export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Magnum Mild',
    price: 799,
    description: 'A small smoke with one of the best taste'
  },
  {
    id: 2,
    name: 'Magnum Filter',
    price: 699,
    description: 'A large smoke with one of the best taste'
  },
  {
    id: 3,
    name: 'Juara Kretek',
    price: 299,
    description: 'A smoke with tea taste'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/