import React from "react";
import Container from "../common/Container";

export function MainLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Container className={className}>
        {children}
        
        
        </Container>;
    </>
  );
}
