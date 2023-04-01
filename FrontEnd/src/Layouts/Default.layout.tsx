import React, { ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default DefaultLayout;

// We imported React and ReactNode from the react package. ReactNode is a built-in type that is used to specify the type of children props in React components.
// We defined an interface DefaultLayoutProps that has a single property children of type ReactNode.
// We updated the function signature of DefaultLayout to use the React.FC type and pass in the DefaultLayoutProps as a generic type parameter.
// We used the ReactNode type for the children prop in the function parameter to ensure that only valid React nodes can be passed as children to this component.
