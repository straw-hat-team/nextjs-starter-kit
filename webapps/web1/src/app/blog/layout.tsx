import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white mx-auto max-w-screen-md">
      {props.children}
    </div>
  );
}
