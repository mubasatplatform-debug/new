export function Logo() {
  return <div className="logo"><small>Plus</small>ديل</div>;
}

export function BrowserFrame({ url = 'dheelplus.sa', children }: { url?: string; children: React.ReactNode }) {
  return (
    <main className="browser">
      <div className="browser-bar">
        <div className="dots"><span className="dot red"/><span className="dot yellow"/><span className="dot green"/></div>
        <div className="url">{url}</div>
        <div />
      </div>
      {children}
    </main>
  );
}
