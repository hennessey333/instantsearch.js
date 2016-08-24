import React, {PropTypes, Component} from 'react';

import themeable from '../themeable';

class Hits extends Component {
  static propTypes = {
    applyTheme: PropTypes.func.isRequired,
    hits: PropTypes.array,
    itemComponent: PropTypes.func.isRequired,
  };

  render() {
    const {applyTheme, itemComponent: ItemComponent, hits} = this.props;
    return (
      <div {...applyTheme('root', 'root')}>
        {hits.map(hit =>
          <ItemComponent key={hit.objectID} hit={hit} />
        )}
      </div>
    );
  }
}

export default themeable({
  root: 'Hits',
})(Hits);