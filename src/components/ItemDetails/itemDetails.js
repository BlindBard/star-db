import React, { Component } from 'react';

import ErrorButton from '../ErrorButton';

import cn from 'classnames';
import styles from './styles.module.scss';

const Record = ({ item, field, label }) => {
  return (
    <li className={cn(styles.listGroupItem, 'list-group-item')}>
      <span className={styles.term}>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class PersonDetails extends Component {
  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const { item, image } = this.state;

    if (!this.state.item) {
      return <span>Select a person from a list</span>;
    }

    const { name } = item;

    return (
      <div className={cn(styles.itemDetails, 'card')}>
        <img className={styles.itemImage} src={image} alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
