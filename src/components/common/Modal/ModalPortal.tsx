import React from 'react';
import ReactDOM from 'react-dom';

function ModalPortal({ children }: { children: React.ReactNode }) {
  const portal = document.getElementById('modal');
  if (!portal) return null;
  return ReactDOM.createPortal(children, portal);
}

export default ModalPortal;
