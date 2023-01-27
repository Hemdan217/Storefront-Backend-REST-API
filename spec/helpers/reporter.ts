import { SpecReporter } from "jasmine-spec-reporter";

import CustomReporter = jasmine.CustomReporter;

jasmine.getEnv().addReporter(new SpecReporter() as unknown as CustomReporter);
// @ts-ignore
class CustomProcessor extends DisplayProcessor {
  // @ts-ignore
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `TypeScript ${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      // @ts-ignore
      displayStacktrace: StacktraceOption.NONE,
    },
    // @ts-ignore
    customProcessors: [CustomProcessor],
  })
);
