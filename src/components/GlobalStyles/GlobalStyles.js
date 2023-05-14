
import PropTypes from 'prop-types';

import './GlobalStyles.scss';

function GloabalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;