/* eslint-disable global-require */
// eslint-disable-next-line import/no-mutable-exports
let Previewable = null;
// eslint-disable-next-line no-undef
if (__PREVIEW__ENABLED__) {
  const React = require('react');
  const { createClient } = require('contentful');
  const client = createClient({
    // eslint-disable-next-line no-undef
    space: __PREVIEW__SPACE_ID__,
    // eslint-disable-next-line no-undef
    accessToken: __PREVIEW__ACCESS_TOKEN__,
    host: 'preview.contentful.com',
  });
  Previewable = (Component, query) => {
    return class _Previewable extends React.Component {
      static displayName = `Previewable(${Component.name || Component.displayName})`;

      state = {
        isQueryDone: false,
        queryData: null,
      };

      componentDidMount() {
        this.fetch();
      }

      componentDidUpdate(prevProps) {
        const { data } = this.props;
        if (data !== prevProps.data) {
          this.fetch();
        }
      }

      async fetch() {
        this.setState({
          isQueryDone: false,
          queryData: null,
        });
        if (query) {
          const queryData = await query({
            client,
            props: this.props,
          });
          this.setState({
            isQueryDone: !!queryData,
            queryData,
          });
        }
      }

      render() {
        const { isQueryDone, queryData } = this.state;
        const { data, ...rest } = this.props;
        return <Component {...rest} data={isQueryDone ? queryData : data} />;
      }
    };
  };
} else {
  // No-op
  Previewable = x => x;
}

export default Previewable;
