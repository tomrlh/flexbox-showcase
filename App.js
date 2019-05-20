import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry, Picker } from 'react-native'

class FlexboxExamples extends Component {
  state = {
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }



  render() {
    const containerStyle = {
      flex: 1,
      flexDirection: this.state.flexDirection,
      justifyContent: this.state.justifyContent
    }

    return (
      <View>
        <View style={styles.header}>
          <Picker
            selectedValue={this.state.justifyContent}
            onValueChange={(selectedValue) => this.setState({justifyContent: selectedValue})}>
             <Picker.Item label="Flex Start" value="flex-start" />
             <Picker.Item label="Flex End" value="flex-end" />
             <Picker.Item label="Space Between" value="space-between" />
             <Picker.Item label="Space Around" value="space-around" />
             <Picker.Item label="Center" value="center" />
          </Picker>
          <Picker
            selectedValue={this.state.flexDirection}
            onValueChange={(selectedValue) => this.setState({flexDirection: selectedValue})}>
             <Picker.Item label="column (default)" value="column" />
             <Picker.Item label="row" value="row" />
          </Picker>
        </View>

        <View style={containerStyle}>
          <View style={styles.box}/>
          <View style={styles.box}/>
          <View style={styles.box}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;