type TemplateProps = {
  html: string;
  css: string;
  globalStyles: string;
  ids: string[];
};

export const template = ({
  html,
  css,
  globalStyles,
  ids = [],
}: TemplateProps) =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      ${globalStyles}
      <style data-emotion-css="${ids.join(' ')}">${css}</style>
    </head>
    <body>
      <div id="app" style="">
        ${html}
      </div>
      <script src="./main.bundle.js"></script>
    </body>
  </html>`;
