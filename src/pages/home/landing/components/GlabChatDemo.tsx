import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

const SCRIPT = [
  {
    user: '요즘 시장이 불안한데, 추가 매수해도 돼?',
    ai:
      '지금은 달려들 때가 아닙니다. 변동성 확대 국면이라 현금을 챙기며 관망할 때입니다.',
  },
  {
    user: '현대차 -20% 물렸어. 물타기 해도 될까?',
    ai:
      '이미 많이 오른 뒤 꺾인 상태입니다. 단순 저점이 아니니 물타기를 자제하고, 추가 하락 여부를 먼저 확인하세요.',
  },
] as const;

type Bubble =
  | { role: 'user'; text: string }
  | { role: 'ai'; text: string; streaming: boolean };

const GlabChatDemo = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const msgsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [composerText, setComposerText] = useState('');
  const [sending, setSending] = useState(false);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useLayoutEffect(() => {
    const el = msgsRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [bubbles, composerText]);

  useEffect(() => {
    if (!visible || reducedMotion) return;

    let alive = true;

    const run = async () => {
      while (alive) {
        setBubbles([]);
        setComposerText('');
        setSending(false);

        for (const turn of SCRIPT) {
          if (!alive) return;

          for (let i = 0; i <= turn.user.length && alive; i++) {
            setComposerText(turn.user.slice(0, i));
            await sleep(i === 0 ? 0 : 28 + Math.random() * 22);
          }
          if (!alive) return;

          await sleep(380);
          setSending(true);
          await sleep(420);
          if (!alive) return;

          setSending(false);
          setComposerText('');
          setBubbles((prev) => [...prev, { role: 'user', text: turn.user }]);
          await sleep(280);
          if (!alive) return;

          setBubbles((prev) => [
            ...prev,
            { role: 'ai', text: '', streaming: true },
          ]);

          for (let i = 0; i <= turn.ai.length && alive; i++) {
            const slice = turn.ai.slice(0, i);
            setBubbles((prev) => {
              const next = [...prev];
              const last = next[next.length - 1];
              if (last?.role === 'ai') {
                next[next.length - 1] = {
                  role: 'ai',
                  text: slice,
                  streaming: i < turn.ai.length,
                };
              }
              return next;
            });
            await sleep(12 + Math.random() * 10);
          }
          if (!alive) return;

          await sleep(2400);
        }

        await sleep(900);
      }
    };

    run();
    return () => {
      alive = false;
    };
  }, [visible, reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="chat-msgs" ref={rootRef}>
        {SCRIPT.flatMap((t, i) => [
          <div key={`u-${i}`} className="chat-msg user">
            {t.user}
          </div>,
          <div key={`a-${i}`} className="chat-msg ai">
            <span className="label">GLAB</span>
            {t.ai}
          </div>,
        ])}
      </div>
    );
  }

  return (
    <div className="glab-chat-demo" ref={rootRef}>
      <div ref={msgsRef} className="chat-msgs glab-chat-msgs">
        {bubbles.map((b, idx) =>
          b.role === 'user' ? (
            <div key={`u-${idx}`} className="chat-msg user glab-msg-enter">
              {b.text}
            </div>
          ) : (
            <div key={`a-${idx}`} className="chat-msg ai glab-msg-enter">
              <span className="label">GLAB</span>
              <span className="glab-ai-body">
                {b.text}
                {b.streaming ? (
                  <span className="glab-stream-cursor" aria-hidden>
                    ▍
                  </span>
                ) : null}
              </span>
            </div>
          ),
        )}
      </div>

      <div className="glab-chat-composer">
        <div className="glab-chat-input-wrap">
          <div className="glab-chat-input-fake" aria-hidden>
            {composerText}
            <span className="glab-chat-caret" />
          </div>
        </div>
        <button
          type="button"
          className={`glab-chat-send${sending ? ' glab-chat-send--active' : ''}`}
          tabIndex={-1}
          aria-hidden
        >
          전송
        </button>
      </div>
    </div>
  );
};

export default GlabChatDemo;
