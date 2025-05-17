import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </div>
  );
}
