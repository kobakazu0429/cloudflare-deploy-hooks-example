type Props = {
  title: string;
  date: string;
};

export const App = ({ title, date }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body>
        <h1>{date}</h1>
      </body>
    </html>
  );
};
