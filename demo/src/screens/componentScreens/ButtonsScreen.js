import React, {Component} from 'react';
import {ScrollView, StyleSheet, Alert, Text, Image} from 'react-native';
import {View, Assets, Constants, Button, Colors, Typography} from 'react-native-ui-lib';//eslint-disable-line
import DemoScreen from '../DemoScreen';
const plusIcon = require('../../assets/icons/plus.png');

const ButtonSpace = 20;

export default class ButtonsScreen extends DemoScreen {

  constructor(props) {
    super(props);

    this.propsToRender = ['label', 'color', 'backgroundColor', 'size', 'outlineColor', 'outline', 'disabled', 'link', 'enableShadow', 'borderRadius'];

    this.state = {
      backgroundColor: Colors.yellow30,
      label: 'Button',
      // outline: true,
    };
  }

  getComponent() {
    return Button;
  }

  render() {
    /*return (
      <View flex>
        <View center paddingV-20>
          <Button
            ref={(component) => { this.component = component; }}
            {...this.state}
          />
        </View>
        <View flex>
          {this.renderComponentSettings()}
        </View>
      </View>
    );*/

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Buttons</Text>

        <Text style={styles.header}>Do you have it in small?</Text>
        <Button
          label={'Default'}
          onPress={() => Alert.alert('Default Button #1')}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Button
          label={'Medium'}
          size={Button.sizes.medium}
          onPress={() => Alert.alert('Medium Button #1')}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Button
          label={'Small'}
          size={Button.sizes.small}
          onPress={() => Alert.alert('Small Button #1')}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Button
          label={'This is a button with long text'}
          onPress={() => Alert.alert('Long Text #2')}
          containerStyle={{marginBottom: ButtonSpace}}
        />

        <Button
          label={'Disabled'}
          disabled
          onPress={() => Alert.alert('Disabled')}
          containerStyle={{marginBottom: ButtonSpace}}
        />

        <Text style={styles.header}>Do you have it in red?</Text>
        <Button
          label={'Bold!'}
          onPress={() => Alert.alert('Button #3')}
          labelStyle={{fontWeight: '800'}}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Button
          label={'Red Button'}
          onPress={() => Alert.alert('Button #3')}
          backgroundColor={Colors.red30}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Button
          label={'Dark Label'}
          dark10
          onPress={() => Alert.alert('Button #3')}
          backgroundColor={Colors.red30}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Button
          label={'With Shadow'}
          onPress={() => Alert.alert('Button #3')}
          enableShadow
          containerStyle={{marginBottom: ButtonSpace}}
        />

        <Text style={styles.header}>Inside Out</Text>
        <Button
          label="Outline"
          outline
          onPress={() => Alert.alert('Long Text #2')}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Button
          label="Outline M"
          size={Button.sizes.medium}
          outline
          onPress={() => Alert.alert('Long Text #2')}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Button
          label="Red Outline"
          outline
          outlineColor={Colors.red10}
          onPress={() => Alert.alert('Long Text #2')}
          containerStyle={{marginBottom: ButtonSpace}}
        />

        <Text style={styles.header}>Let your curves show</Text>
        {Constants.isIOS ? <Button
          label={'Squarish'}
          borderRadius={2}
          onPress={() => Alert.alert('Button #3')}
          containerStyle={{marginBottom: ButtonSpace}}
        /> : <Button
          label={'Roundish'}
          borderRadius={15}
          onPress={() => Alert.alert('Button #3')}
          containerStyle={{marginBottom: ButtonSpace}}
        />}
        <Button
          label={'Custom'}
          borderRadius={22}
          onPress={() => Alert.alert('Button #3')}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Button
          label={'No Radius'}
          borderRadius={0}
          onPress={() => Alert.alert('Button #3')}
          containerStyle={{marginBottom: ButtonSpace}}
        />
        <Text style={styles.header}>Special Cases</Text>
        <Button
          onPress={() => Alert.alert('Button #3')}
          containerStyle={{marginBottom: ButtonSpace}}
        >
          <Text>{Assets.emojis.cloud} {Assets.emojis.airplane} {Assets.emojis.sunny}</Text>
        </Button>
        <Button
          outline
          onPress={() => Alert.alert('Button #3')}
          containerStyle={{marginBottom: ButtonSpace}}
        >
          <Image source={plusIcon}/>
          <Text style={{marginLeft: 10, color: Colors.blue30}}>Custom Icon</Text>
        </Button>

        <Button
          text90
          link
          containerStyle={{marginBottom: ButtonSpace}}
          iconSource={plusIcon}
          label="link icon"
        />

        <Button
          text90
          link
          disabled
          containerStyle={{marginBottom: ButtonSpace}}
          iconSource={plusIcon}
          label="disabled link"
        />

        <Button blue30 label="link button" link/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 25,
  },
  title: {
    ...Typography.text20,
  },
  header: {
    ...Typography.text60,
    marginVertical: 20,
  },
});
