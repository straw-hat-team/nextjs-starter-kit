import type { PropsWithChildren } from 'react';

export function Button(props: PropsWithChildren<{}>) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://bit.ly/3se7YYw"
      className="border-black-500 pointer rounded-lg border bg-purple-700 px-10 py-4 font-normal text-gray-200 shadow-md"
    >
      {props.children}
    </a>
  );
}
