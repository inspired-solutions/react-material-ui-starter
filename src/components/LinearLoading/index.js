import React from "react";
import PropTypes from 'prop-types';
import { LinearProgress, withStyles } from "@material-ui/core";
import styles from './styles';

const LinearLoading = ({ loading = false, color, classes}) => {
  if (loading) {
    return <LinearProgress
      variant="query"
      color="primary"
      className={classes.loading}
    />;
  }

  return null;
};

LinearLoading.propTypes = {
  loading: PropTypes.bool,
};

export default withStyles(styles)(LinearLoading);