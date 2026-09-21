import styles from './Section7Unibox.module.scss';

export default function Section7Unibox() {
  return (
    <section className={styles.section}>
      <div>
        <div>
          <h1>Unibox - Manage every outbound reply in one focused inbox</h1>
          <a href="#a">
            <img src="/images/inline-elements/1475982494.svg" alt="" />
            Learn Unibox
          </a>
        </div>
        <div>
          <p>
            Manage campaign replies, collaborate with your team, and qualify
            leads from Email, LinkedIn and WhatsApp. All in one focused
            workspace.
          </p>
          <ul>
            <li>
              <img src="/images/inline-elements/3338047389.svg" alt="" />
              <span>Unified Inbox</span> - All campaign replies, one inbox
            </li>
            <li>
              <img src="/images/inline-elements/3338047389.svg" alt="" />
              <span>Focused Workspace</span> - Only outreach replies
            </li>
            <li>
              <img src="/images/inline-elements/3338047389.svg" alt="" />
              <span>Team Collaboration</span> - Assign and manage replies
            </li>
            <li>
              <img src="/images/inline-elements/3338047389.svg" alt="" />
              <span>AI Qualification</span> - Prioritize high-intent leads
            </li>
          </ul>
        </div>
      </div>

      <img
        src="/images/sendr-unibox-screenshot.png"
        alt="Sendr Unibox screenshot"
      />
    </section>
  );
}
