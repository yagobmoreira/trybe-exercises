import React from 'react';

type TitleProps = {
  titleMessage: string
}

class Title extends React.Component<TitleProps> {
  render () {
    const { titleMessage } = this.props;
    return (
      <h1>{titleMessage}</h1>
    )
  }
}

export default Title;