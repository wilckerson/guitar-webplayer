declare module "react-https-redirect" {
  import React from "react";

  interface HttpsRedirectProps {
    children?: React.ReactNode;
  }

  export default function HttpsRedirect(
    props: HttpsRedirectProps
  ): React.ReactElement<HttpsRedirectProps>;
}
