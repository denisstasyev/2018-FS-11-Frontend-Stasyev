import React from "react";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://a040c6c13d9641e291575ac21d943829@sentry.io/1465431"
});

class SentryErrorLogger extends React.PureComponent {
  state = { error: null, eventId: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    if (this.state.error) {
      //render fallback UI
      return (
        <div
          onClick={() =>
            Sentry.showReportDialog({ eventId: this.state.eventId })
          }
        >
          Report feedback
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SentryErrorLogger;
