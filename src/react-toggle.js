// @flow
import * as React from 'react';

type handleOpen = (e: Event) => void;
type handleClose = (e: Event) => void;
type handleToggle = (e: Event) => void;

type TogglerInterface = {
  open: boolean,
  handleOpen: handleOpen,
  handleClose: handleClose,
  handleToggle: handleToggle
};

type Props = {
  defaultOpen: boolean,
  children: TogglerInterface => React.Node
};

type State = {
  open: boolean
};

export default class Toggler extends React.Component<Props, State> {
  state = {
    open: this.props.defaultOpen || false
  };

  handleOpen = (e: Event): void => {
    this.setState({
      open: true
    });
  };

  handleClose = (e: Event): void => {
    this.setState({
      open: false
    });
  };

  handleToggle = (e: Event): void => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { children } = this.props;
    const { open } = this.state;
    const { handleOpen, handleClose, handleToggle } = this;

    return children({ open, handleOpen, handleClose, handleToggle });
  }
}
