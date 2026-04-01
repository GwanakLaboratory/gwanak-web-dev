import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

type Bubble =
  | { role: 'user'; text: string }
  | { role: 'ai'; text: string; streaming: boolean };

function nearestScrollRoot(el: HTMLElement | null): Element | null {
  let p: HTMLElement | null = el?.parentElement ?? null;
  while (p) {
    const { overflowY } = getComputedStyle(p);
    if (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') {
      return p;
    }
    p = p.parentElement;
  }
  return null;
}

const GlabChatDemo = () => {
  const { t, i18n } = useTranslation();
  const script = useMemo(
    () =>
      [
        {
          user: t('landing.chat.turn1.user'),
          ai: t('landing.chat.turn1.ai'),
        },
        {
          user: t('landing.chat.turn2.user'),
          ai: t('landing.chat.turn2.ai'),
        },
      ] as const,
    // eslint-disable-next-line react-hooks/exhaustive-deps -- t identity changes every render; language drives copy
    [i18n.language],
  );

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

    const scrollRoot = nearestScrollRoot(el);
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      root: scrollRoot,
      threshold: 0,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

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

        for (const turn of script) {
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
  }, [visible, reducedMotion, script]);

  if (reducedMotion) {
    return (
      <div className="chat-msgs glab-chat-msgs" ref={rootRef}>
        {script.flatMap((turn, i) => [
          <div key={`u-${i}`} className="chat-msg user">
            {turn.user}
          </div>,
          <div key={`a-${i}`} className="chat-msg ai">
            <span className="label">GLAB</span>
            {turn.ai}
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
          {t('landing.chat.send')}
        </button>
      </div>
    </div>
  );
};

export default GlabChatDemo;
