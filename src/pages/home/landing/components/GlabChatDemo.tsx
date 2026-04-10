import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

type Bubble =
  | { role: 'user'; text: string }
  | { role: 'ai'; text: string; streaming: boolean };

type Turn = { user: string; ai: string };

async function playTurn(
  turn: Turn,
  alive: () => boolean,
  setComposerText: (s: string) => void,
  setSending: (v: boolean) => void,
  setBubbles: Dispatch<SetStateAction<Bubble[]>>,
): Promise<void> {
  for (let i = 0; i <= turn.user.length && alive(); i++) {
    setComposerText(turn.user.slice(0, i));
    await sleep(i === 0 ? 0 : 28 + Math.random() * 22);
  }
  if (!alive()) return;

  await sleep(380);
  setSending(true);
  await sleep(420);
  if (!alive()) return;

  setSending(false);
  setComposerText('');
  setBubbles((prev) => [...prev, { role: 'user', text: turn.user }]);
  await sleep(280);
  if (!alive()) return;

  setBubbles((prev) => [...prev, { role: 'ai', text: '', streaming: true }]);

  for (let i = 0; i <= turn.ai.length && alive(); i++) {
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
  if (!alive()) return;
  await sleep(2400);
}

const GlabChatDemo = () => {
  const { t, i18n } = useTranslation();
  const script = useMemo(
    () =>
      [
        { user: t('landing.chat.turn1.user'), ai: t('landing.chat.turn1.ai') },
        { user: t('landing.chat.turn2.user'), ai: t('landing.chat.turn2.ai') },
      ] as const satisfies readonly Turn[],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- language only
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
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setVisible(!!e?.isIntersecting), {
      threshold: 0.12,
      rootMargin: '32px',
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useLayoutEffect(() => {
    const el = msgsRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [bubbles]);

  useEffect(() => {
    if (!visible || reducedMotion) return;
    let alive = true;
    const isAlive = () => alive;

    (async () => {
      while (isAlive()) {
        setBubbles([]);
        setComposerText('');
        setSending(false);
        for (const turn of script) {
          if (!isAlive()) return;
          await playTurn(turn, isAlive, setComposerText, setSending, setBubbles);
        }
        if (!isAlive()) return;
        await sleep(900);
      }
    })();

    return () => {
      alive = false;
    };
  }, [visible, reducedMotion, script]);

  if (reducedMotion) {
    return (
      <div className="glab-chat glab-chat--reduced" ref={rootRef}>
        <div ref={msgsRef} className="glab-chat__thread chat-msgs">
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
      </div>
    );
  }

  return (
    <div className="glab-chat" ref={rootRef}>
      <div ref={msgsRef} className="glab-chat__thread chat-msgs glab-chat-msgs">
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

      <div className="glab-chat__composer" aria-hidden>
        <div className="glab-chat__input">
          <div className="glab-chat__input-line">
            {composerText}
            <span className="glab-chat__caret" aria-hidden />
          </div>
        </div>
        <button
          type="button"
          className={`glab-chat__send${sending ? ' glab-chat__send--active' : ''}`}
          tabIndex={-1}
        >
          {t('landing.chat.send')}
        </button>
      </div>
    </div>
  );
};

export default GlabChatDemo;
