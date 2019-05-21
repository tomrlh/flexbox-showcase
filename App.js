import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry, Picker } from 'react-native'

class FlexboxExamples extends Component {
  state = {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }

  getStyles = () => {
    return StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: this.state.flexDirection,
        justifyContent: this.state.justifyContent,
        alignItems: this.state.alignItems
      },
      box: {
        height: 50,
        width: 50,
        backgroundColor: '#e76e63',
        margin: 10,
      }
    })
  }

  render() {
    return (
      <View>
        <View>
        <Text>Justify Content</Text>
          <Picker
            selectedValue={this.state.justifyContent}
            onValueChange={(selectedValue) => this.setState({justifyContent: selectedValue})}>
             <Picker.Item label="Flex Start" value="flex-start" />
             <Picker.Item label="Flex End" value="flex-end" />
             <Picker.Item label="Space Between" value="space-between" />
             <Picker.Item label="Space Around" value="space-around" />
             <Picker.Item label="Center" value="center" />
          </Picker>
          
          <Text>Align Items</Text>
          <Picker
            selectedValue={this.state.alignItems}
            onValueChange={(selectedValue) => this.setState({alignItems: selectedValue})}>
             <Picker.Item label="Flex Start" value="flex-start" />
             <Picker.Item label="Flex End" value="flex-end" />
             <Picker.Item label="Center" value="center" />
             <Picker.Item label="Stretch" value="stretch" />
          </Picker>

          <Text>Flex Direction</Text>
          <Picker
            selectedValue={this.state.flexDirection}
            onValueChange={(selectedValue) => this.setState({flexDirection: selectedValue})}>
             <Picker.Item label="column (default)" value="column" />
             <Picker.Item label="row" value="row" />
          </Picker>
        </View>

        <View style={this.getStyles().container}>
          <View style={this.getStyles().box}/>
          <View style={this.getStyles().box}/>
          <View style={this.getStyles().box}/>
        </View>
      </View>
    )
  }
}

export default FlexboxExamples;