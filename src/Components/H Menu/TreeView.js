import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function MultiSelectTreeView() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
    >
          <TreeItem nodeId="5" label="Prepaid">
          </TreeItem>
      
      
      <TreeItem nodeId="1" label="DTH">
        <TreeItem nodeId="2" label="Recharge" />
        <TreeItem nodeId="3" label="Buy New DTH Connection" />
        <TreeItem nodeId="4" label="View Plans" />
        <TreeItem nodeId="5" label="Upgrade Box" />
        <TreeItem nodeId="6" label="Xstream" />

      </TreeItem>
      <TreeItem nodeId="2" label="Postpaid">
          </TreeItem>

          <TreeItem nodeId="3" label="Broadband">
          </TreeItem>

          <TreeItem nodeId="4" label="Bank">
          </TreeItem>

          <TreeItem nodeId="5" label="Help">
          </TreeItem>

          <TreeItem nodeId="6" label="Xstream">
          </TreeItem>

          <TreeItem nodeId="7" label="Sign In">
          </TreeItem>
    </TreeView>
  );
}
