import DefaultLayout from "src/layouts/DefaultLayout";
import styles from "../../style/GeneralStyles.module.scss";
import BasicExamples from "./examples/BasicExample";
import ButtonExamples from "./examples/ButtonExample";
import PillExamples from "./examples/PillExample";
import VariationsExamples from "./examples/VariationsExample";
import BadgeAPI from "./tables/BadgeAPI";

const BadgePage = () => {
  return (
    <div>
      <DefaultLayout>
        <div className={styles.Page}>
          <h1>Badges</h1>
          <p>
            Documentation and examples for badges, our small count and labeling
            component.
          </p>
          <h2>Examples</h2>
          <p>
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and em units.
          </p>
          <div className={styles.Example}>
            <BasicExamples.BasicExample />
          </div>
          <div className={styles.Example}>
            <BasicExamples.BasicExampleCode />
          </div>
          <p>
            Badges can be used as part of links or buttons to provide a counter.
          </p>
          <div className={styles.Example}>
            <ButtonExamples.ButtonExample />
          </div>
          <div className={styles.Example}>
            <ButtonExamples.ButtonExampleCode />
          </div>
          <p>
            Note that depending on how they are used, badges may be confusing
            for users of screen readers and similar assistive technologies.
            While the styling of badges provides a visual cue as to their
            purpose, these users will simply be presented with the content of
            the badge. Depending on the specific situation, these badges may
            seem like random additional words or numbers at the end of a
            sentence, link, or button. Unless the context is clear, consider
            including additional context with a visually hidden piece of
            additional text.
          </p>
          <h2>Contextual variations</h2>
          <p>
            Add any of the below mentioned modifier classes to change the
            appearance of a badge.
          </p>
          <div className={styles.Example}>
            <VariationsExamples.VariationsExample />
          </div>
          <div className={styles.Example}>
            <VariationsExamples.VariationsExampleCode />
          </div>
          <h2>Pill</h2>
          <p>
            badges Use the pill modifier class to make badges more rounded (with
            a larger border-radius). Useful if you miss the badges from v3.
          </p>
          <div className={styles.Example}>
            <PillExamples.PillExample />
          </div>
          <div className={styles.Example}>
            <PillExamples.PillExampleCode />
          </div>
          <h1>API</h1>
          <BadgeAPI />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default BadgePage;
