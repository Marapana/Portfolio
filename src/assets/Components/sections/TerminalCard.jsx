import React from 'react';

const TerminalCard = () => {
  return (
    <div className="terminal-card" aria-label="Capabilities terminal">
      <div className="terminal-header">
        <div className="terminal-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="terminal-title">TERMINAL</span>
      </div>

      <pre className="terminal-code">
        <code>
          <span className="code-line">
            <span className="code-keyword">const</span> <span className="code-name">tharindu</span> = {'{'}
          </span>
          <span className="code-line">
            {'  '}
            <span className="code-prop">focus</span>: <span className="code-string">"UX-first digital products"</span>,
          </span>
          <span className="code-line">
            {'  '}
            <span className="code-prop">offers</span>: [<span className="code-string">"UI design"</span>,{' '}
            <span className="code-string">"Front-end"</span>],
          </span>
          <span className="code-line">
            {'  '}
            <span className="code-prop">strength</span>: <span className="code-string">"clarity + execution"</span>,
          </span>
          <span className="code-line">
            {'  '}
            <span className="code-prop">status</span>: <span className="code-boolean">"open to build"</span>,
          </span>
          <span className="code-line">{'};'}</span>
          <span className="code-line code-comment">// Ready to shape better product experiences</span>
          <span className="code-line">
            <span className="code-name">tharindu</span>.<span className="code-fn">build</span>(
            <span className="code-string">"your next idea"</span>);
            <span className="terminal-cursor" aria-hidden="true" />
          </span>
        </code>
      </pre>
    </div>
  );
};

export default TerminalCard;
