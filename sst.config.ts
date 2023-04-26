import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "my-example-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      // const serverCachePolicy = new cf.CachePolicy(stack, "ServerCache", {
      //   queryStringBehavior: cf.CacheQueryStringBehavior.all(),
      //   headerBehavior: cf.CacheHeaderBehavior.none(),
      //   cookieBehavior: cf.CacheCookieBehavior.none(),
      //   defaultTtl: cdk.Duration.days(0),
      //   maxTtl: cdk.Duration.days(365),
      //   minTtl: cdk.Duration.days(0),
      //   enableAcceptEncodingBrotli: true,
      //   enableAcceptEncodingGzip: true,
      // });

      const site = new NextjsSite(stack, "site");
      //  {
      //   cdk: {
      //     serverCachePolicy,
      //   },
      // });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
