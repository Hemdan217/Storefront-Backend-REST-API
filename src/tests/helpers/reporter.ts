import { SpecReporter } from "jasmine-spec-reporter";

import CustomReporter = jasmine.CustomReporter;

jasmine.getEnv().addReporter(new SpecReporter() as unknown as CustomReporter);

// class CustomProcessor extends DisplayProcessor {
//   public displayJasmineStarted(info: SuiteInfo, log: string): string {
//     return `TypeScript ${log}`;
//   }
// }

// jasmine.getEnv().clearReporters();
// jasmine.getEnv().addReporter(
//   new SpecReporter({
//     spec: {
//       displayStacktrace: StacktraceOption.NONE,
//     },
//     customProcessors: [CustomProcessor],
//   })
// );

// import {
//   DisplayProcessor,
//   SpecReporter,
//   StacktraceOption,
// } from "jasmine-spec-reporter";
// import SuiteInfo = jasmine.JasmineStartedInfo;

// class CustomProcessor extends DisplayProcessor {
//   public displayJasmineStarted(info: SuiteInfo, log: string): string {
//     return `TypeScript ${log}`;
//   }
// }

// jasmine.getEnv().clearReporters();
// jasmine.getEnv().addReporter(
//   new SpecReporter({
//     spec: {
//       displayStacktrace: StacktraceOption.NONE,
//     },
//     customProcessors: [CustomProcessor],
//   })
// );
