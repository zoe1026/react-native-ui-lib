import React, {PropTypes} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import _ from 'lodash';
import {Colors, Shadows, BorderRadiuses} from '../../style';
import {Constants} from '../../helpers';
import {BaseComponent} from '../../commons';
import View from '../view';

import CardSection from './CardSection';
import CardItem from './CardItem';
import CardImage from './CardImage';

class Card extends BaseComponent {

  static displayName = 'Card';

  static propTypes = {
    ...View.propTypes,
    /**
     * card custom width
     */
    width: PropTypes.number,
    /**
     * card custom height
     */
    height: PropTypes.number,
    /**
     * action for when pressing the card
     */
    onPress: PropTypes.func,
    /**
     * Additional styles for the top container
     */
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
    /**
     * Use to identify the button in tests
     */
    testId: PropTypes.string,
  };

  generateStyles() {
    this.styles = createStyles(this.props);
  }

  // todo: add unit test
  calcImagePosition(childIndex) {
    const {row, children} = this.props;
    const childrenCount = React.Children.count(children);
    if (childIndex === 0) {
      return row ? 'left' : 'top';
    } else if (childIndex === childrenCount - 1) {
      return row ? 'right' : 'bottom';
    }
  }

  renderChildren() {
    const children = React.Children.map(this.props.children, (child, index) => {
      if (_.get(child, 'type') === CardImage) {
        const position = this.calcImagePosition(index);
        return React.cloneElement(child, {key: index, position});
      }

      return child;
    });
    return children;
  }

  render() {
    const {onPress, style, containerStyle, testId, ...others} = this.props;
    const Container = onPress ? TouchableOpacity : View;
    return (
      <Container style={[this.styles.container, containerStyle]} onPress={onPress} testId={testId}>
        <View style={[this.styles.innerContainer, style]} {...others}>
          {this.renderChildren()}
        </View>
      </Container>
    );
  }
}

function createStyles({width, height}) {
  return StyleSheet.create({
    container: {
      width,
      height,
      backgroundColor: 'transparent',
      ...Shadows.white40.bottom,
      padding: Constants.isAndroid ? 2 : undefined,
    },
    innerContainer: {
      backgroundColor: Colors.white,
      borderRadius: Constants.isIOS ? BorderRadiuses.br40 : BorderRadiuses.br10,
      overflow: 'hidden',
      flexGrow: 1,
      elevation: 2,
    },
  });
}

Card.Section = CardSection;
Card.Item = CardItem;
Card.Image = CardImage;

export default Card;
