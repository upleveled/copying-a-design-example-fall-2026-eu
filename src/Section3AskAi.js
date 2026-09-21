import styles from './Section3AskAi.module.scss';

export default function Section3AskAi() {
  return (
    <section className={styles.section}>
      <div>
        <div>
          <span>No filter, no spin</span>
          <h1>Ask AI about Sendr</h1>
          <p>
            Don't take our word for it. Pick your favorite AI and ask what it
            thinks about Sendr.
          </p>
        </div>

        <div>
          <div>
            <img src="/images/inline-elements/1529132500.svg" alt="" />
            I'm evaluating Sendr (sendr.ai), an all-in-one multichannel platform
            for personalized outbound, email, LinkedIn, WhatsApp, with
            personalized video and voice built in, all in one system instead of
            separate tools. Based on what you know about my business and how I
            currently do outreach, would this be a good fit, what would it
            likely replace, and where might it fall short for us?
          </div>
          <div>
            <a href="#a">
              <img src="/images/chatgpt_logo_3.png" alt="ChatGPT logo" />
              Ask ChatGPT
            </a>
            <a href="#a">
              <img src="/images/claude_logo_4.png" alt="Claude logo" />
              Ask Claude
            </a>
            <a href="#a">
              <img src="/images/perplexity_logo_1.png" alt="Perplexity logo" />
              Ask Perplexity
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
