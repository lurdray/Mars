const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Good Choice! Because Earth might be no more soon!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Join Community!'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));