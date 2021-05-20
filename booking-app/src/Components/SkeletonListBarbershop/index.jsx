import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

function BarbershopSkeletonList(props) {
  const { data } = props;
  return (
    <Box>
      <Grid container>
        {data.map((data, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton variant="rect" width="100%" height={148} />
                <Skeleton />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default BarbershopSkeletonList;
