import * as React from 'react';
import {IntlProvider, FormattedMessage, FormattedNumber, useIntl} from 'react-intl';

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  myMessage: "Some smart French word: {ts, date, ::yyyyMMdd}",
};

export default function ChildComponent() {
  const intl = useIntl();
  return (
    <IntlProvider messages={{...intl.messages, ...messagesInFrench}} locale="fr" defaultLocale="en">
      <p>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ts: Date.now()}}
        />
        <br />
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>

      <p>
        This should fallback to parent IntlProvider (though default message was provided:
        <br />
        <FormattedMessage
          id="key-doesnt-exist-in-child"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ts: Date.now()}}
        />
      </p>

      <p>
        This should fallback to parent IntlProvider:
        <br />
        <FormattedMessage
          id="key-doesnt-exist-in-child"
        />
      </p>

      <p>
        This should fallback to defaultMessage:
        <br />
        <FormattedMessage
          id="key-doesnt-exist-anywhere"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ts: Date.now()}}
        />
      </p>
    </IntlProvider>
    )
}