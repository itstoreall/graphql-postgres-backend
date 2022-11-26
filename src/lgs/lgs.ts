/* eslint-disable @typescript-eslint/no-explicit-any */
import * as cl from './logMargins';

const lgs = {
  runServer: (port: string) => {
    cl.w(`  server ★(◔.◔)★ http://localhost:${port}/graphql`);
  },

  // ================================

  one: (a: any) => {
    cl.o(a);
  },
  two: (a: any, b: any) => {
    cl.o(a, b);
  },
  three: (a: any, b: any, c: any) => {
    cl.o(a, b, c);
  },
  four: (a: any, b: any, c: any, d: any) => {
    cl.o(a, b, c, d);
  },
  five: (a: any, b: any, c: any, d: any, e: any) => {
    cl.o(a, b, c, d, e);
  },
  six: (a: any, b: any, c: any, d: any, e: any, f: any) => {
    cl.o(a, b, c, d, e, f);
  },
};

export default lgs;
